import { GetPictures_pictures_comments } from '../../../gql/__generated__/GetPictures';

interface ICommentsProps {
  isAuthenticated: boolean;
  comments: (GetPictures_pictures_comments | null)[] | null;
}

export const Comments = ({ comments, isAuthenticated }: ICommentsProps) => {
	if (!comments) return null;

	return (
		<>
			<div className="max-h-80 overflow-auto">
				{(comments as GetPictures_pictures_comments[])
					.filter(Boolean)
					.map(({author, text}, index) => {
						return (
							<div className="flex flex-col gap-4" key={`${author}-${index}`}>
								<span className="block">comments: {comments.length}</span>
								<span className="block">author: {author.name || 'unknown'}</span>
								<p>{text}</p>
							</div>
						);
					}
					)}
			</div>
			{isAuthenticated && (
				<button className="hover:underline">add comment</button>
			)}
		</>
	);
};
