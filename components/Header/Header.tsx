import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { routes } from '../../constants/routes';
import { TRootState } from '../../redux/store';
import { Dropdown, UploadModal } from './components';

export const Header: React.FC = () => {
	const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);

	const { isAuthenticated } = useSelector((state: TRootState) => state.user);
	const { pathname } = useRouter();
	const isLoginPage = pathname === routes.login || pathname === routes.register;

	const handleModalVisibility = () => setIsUploadModalOpen(prev => !prev);

	// returning empty <div /> instead of null to occupy left grid column of <AppLayout />
	// and avoid breaking the layout of the page
	if (isLoginPage) return <div />;

	return (
		<div className='w-full border-r-3 border-r-secondary'>
			<div className="flex flex-col justify-start h-full py-3 px-6">
				<div className="mb-3 mr-auto">
					<span className="logo">pictureverse</span>
				</div>
				{isAuthenticated && (
					<button className="button" onClick={handleModalVisibility}>upload</button>
				)}
				<Dropdown />
				<UploadModal isVisible={isUploadModalOpen} handleModalClose={handleModalVisibility} />
			</div>
		</div>
	);
};
