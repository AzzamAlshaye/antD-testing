import { FC } from 'react';
import { Card, Radio, Typography } from 'antd';

const { Text, Title } = Typography;

interface GroupCardProps {
  id: string;
  title: string;
  description: string;
  createdBy: string;
  createdAt: string;

  /** Optional selection */
  selectable?: boolean;
  selected?: boolean;
  onSelect?: (id: string) => void;
}

export const GroupCard: FC<GroupCardProps> = ({
  id,
  title,
  description,
  createdBy,
  createdAt,
  selectable = false,
  selected = false,
  onSelect,
}) => {
  return (
    <div
      onClick={() => selectable && onSelect?.(id)}
      className={`
        w-full cursor-pointer transition bg-white rounded-lg p-4 
        ${selected ? 'border border-solid border-primary' : ''}
      `}
    >
      <div className='flex justify-between items-start gap-6'>
        {/* LEFT */}
        <div className='flex items-start gap-4'>
          {selectable && <Radio checked={selected} />}

          <div>
            <div className='text-base font-semibold mb-4'>{title}</div>
            Description:
            <span className={'font-semibold ms-2'}>{description}</span>
          </div>
        </div>
        {/* RIGHT */}
        <div className='flex items-center  justify-end gap-2 '>
          <span>Created by: {createdBy}</span>
          <span>Created at: strong {createdAt}</span>
        </div>
      </div>
    </div>
  );
};
