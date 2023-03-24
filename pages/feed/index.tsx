import { NextPage } from 'next';
import { client } from '../_app';
import { GET_PICTURES } from '../../gql/GetPictures';
import { IPictures } from '../../types/common';
import { PictureViewer } from '../../components/PictureViewer';

export async function getServerSideProps() {
	const { data, error } = await client.query({
		query: GET_PICTURES,
	});

	return {
		props: {
			data,
			error: error ?? null,
		},
	};
}

const Feed: NextPage<IPictures> = ({ data, error }) => {
	return <PictureViewer data={data} error={error} />;
};

export default Feed;
