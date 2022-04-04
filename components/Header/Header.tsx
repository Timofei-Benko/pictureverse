import { useRouter } from 'next/router';
import { Dropdown } from './components';

export const Header = () => {
  const { pathname } = useRouter();
  const isNotLoginPage = pathname !== '/login' && pathname !== '/register';

  return (
    <div className={`w-full ${isNotLoginPage && 'border-b-3 border-b-secondary'}`}>
      <div className='page-wrap'>
        <div className='flex items-center h-full py-3 px-6'>
          <div className='mb-3'>
            <span className='logo'>Pictureverse</span>
          </div>
          <Dropdown />
        </div>
      </div>
    </div>
  )
}
