import React from 'react';

const HeroHeader: React.FC<{ userName: string }> = ({ userName }) => {
  return (
    <div className='relative mx-auto w-full'>
      <div className='pt-[8px] pb-3'>
        <h2 className='m-0 font-rubik text-[35px] font-semibold leading-[41px] text-white'>
          Good morning, {userName}
        </h2>
      </div>
    </div>
  );
};

export default HeroHeader;
