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

  // returning empty <div /> instead of null to occupy top grid row of <AppLayout />
  // (idk why but i don't want to do styles conditionally there, it looks nicer this way)
  if (isLoginPage) return <div />;

  return (
    <div className='w-full border-b-3 border-b-secondary bg-accent'>
      <div className="page-wrap">
        <div className="flex items-center justify-end h-full py-3 px-6">
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
    </div>
  );
};
