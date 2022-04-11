import { NextPage } from 'next';
import { client } from '../_app';
import { GET_PICTURES } from '../../queries/GetPictures';
import { Pictures } from '../../queries/__generated__/Pictures';

interface IFeedProps {
  data: Pictures;
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_PICTURES,
  });

  return {
    props: {
      data,
    },
  }
}

const Feed: NextPage<IFeedProps> = ({ data }) => {
  if (!data.pictures) return (
    <span>Something went wrong. Reload the page</span>
  );

  return (
    <div className='w-4/12 mx-auto'>
      {data.pictures.map(picture => {
        const { id, base64, comments, likesCount, likedBy, description, uploadDate } = picture;

        // 🤨
        if (base64 === '1234') return null;

        return (
          <div key={id} className='border-3 border-secondary p-6'>
            <img src={`data:image/jpeg;base64,${base64}`}  alt=''/>
          </div>
        )
      })}
    </div>
  );
};

export default Feed;
