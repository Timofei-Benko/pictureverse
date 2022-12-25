import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { Dropdown, UploadModal } from './components';
import { TRootState } from '../../redux/store';
import { routes } from '../../constants/routes';

export const Header = () => {
  const [isUploadModalVisible, setIsUploadModalVisible] = useState<boolean>(false);
  const { pathname } = useRouter();
  const isNotLoginPage = pathname !== routes.login && pathname !== routes.register;
  const { isAuthenticated } = useSelector((state: TRootState) => state.user);

  return (
    <div className={cn(
      'w-full',
      {['border-b-3 border-b-secondary']: isNotLoginPage}
    )}>
      <div className="page-wrap">
        <div className="flex items-center justify-end h-full py-3 px-6">
          <div className="mb-3 mr-auto">
            <span className="logo">pictureverse</span>
          </div>
          {isAuthenticated && (
            <button className="button" onClick={() => setIsUploadModalVisible(true)}>upload</button>
          )}
          <Dropdown/>
          <UploadModal isVisible={isUploadModalVisible} setIsVisible={setIsUploadModalVisible}/>
        </div>
      </div>
    </div>
  );
};
