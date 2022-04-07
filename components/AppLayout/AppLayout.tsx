import { PropsWithChildren } from 'react';
import { Header } from '../Header';

export const AppLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className='grid grid-rows-[auto_1fr] h-screen'>
      <Header />
      <div className='pageContainer'>
        <div className='h-full w-full p-6'>
          {children}
        </div>
      </div>
    </div>
  )
};
