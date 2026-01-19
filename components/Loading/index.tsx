import { FC } from 'react';

export const Loading: FC = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-white'>
      <span className='h-8 w-8 animate-spin rounded-full border-2 border-brand-500 border-t-transparent' />
    </div>
  );
};
