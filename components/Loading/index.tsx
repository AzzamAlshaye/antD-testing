import { FC } from 'react';
import './Loading.scss';
export const Loading: FC = () => {
  return (
    <div className={'container'}>
      <span className={'loader'} />
    </div>
  );
};
