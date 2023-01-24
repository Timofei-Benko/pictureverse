import { useSelector } from 'react-redux';
import cn from 'classnames';
import { useMutation } from '@apollo/client';
import { Comments } from './elements/Comments';
import HeartIcon from '../../public/heart.svg';
import { IPictures } from '../../types/common';
import { GetPictures_pictures_comments, GetPictures_pictures_likedBy } from '../../queries/__generated__/GetPictures';
import { TRootState } from '../../redux/store';
import { LIKE_PICTURE } from '../../queries/LikePicture';

export const PictureViewer = ({ data, error }: IPictures) => {
  const { isAuthenticated, userId } = useSelector((state: TRootState) => state.user);
  const [like] = useMutation(LIKE_PICTURE);

  const handleLike = (picId: string, userId: string) => {
    like({
      variables: {
        input: {
          id: picId,
          userId,
        }
      }
    });
  }

  const checkIfIsLiked = (likedBy: (GetPictures_pictures_likedBy | null)[] | null) => {
    if (likedBy && userId) {
      return !!(likedBy.find((user, idx) => {
        if (user) {
          return user.id === userId ? user : null;
        }
        return null;
      }))
    }
    return false;
  }

  if (error) return (
    <span>Something went wrong. Reload the page</span>
  );

  return (
    <div className='w-4/12 mx-auto mt-12'>
      {data.pictures.map(picture => {
        const { id, base64, comments, likesCount, likedBy, description, uploadDate } = picture;

        // 🤨
        if (base64 === '1234') return null;

        return (
          <div key={id} className='flex flex-col p-6 mb-8 border-3 border-secondary border-3 border-secondary
          shadow-[25px_-25px_0px_-10px] shadow-secondary'>
            <img src={`data:image/jpeg;base64,${base64}`}  alt="Uploaded picture" />
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-center">
                {userId && (
                  <button className="mr-2" onClick={() => handleLike(id, userId)}>
                    <HeartIcon
                      className={cn('h-6 w-6 like', {
                          ['liked']: checkIfIsLiked(likedBy),
                        },
                      )}
                    />
                  </button>
                )}
                <span>{likesCount}</span>
              </div>
              <p>description: {description}</p>
              <Comments isAuthenticated={isAuthenticated} comments={comments} />
            </div>
          </div>
        )
      })}
    </div>
  );
};
