import { FC } from 'react';
import { Modal, Tabs, TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { SearchGroup } from './SearchGroup';
import { CreateGroup } from './CreateGroup';

interface GroupModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: () => void;
}

const SEARCH_GROUP_TAB_KEY = 'search-group';
const CREATE_GROUP_TAB_KEY = 'create-group';

export const GroupModal: FC<GroupModalProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const { t } = useTranslation();

  const items: TabsProps['items'] = [
    {
      key: SEARCH_GROUP_TAB_KEY,
      label: t('GROUPS.SEARCH_GROUP'),
      children: <SearchGroup />,
    },
    {
      key: CREATE_GROUP_TAB_KEY,
      label: t('GROUPS.CREATE_GROUP'),
      children: <CreateGroup />,
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <Modal
      title={t('GROUPS.TITLE')}
      open={open}
      onOk={onSubmit ?? onClose}
      onCancel={onClose}
      okText={t('COMMON.CHOOSE')}
      cancelText={t('COMMON.CANCEL')}
      centered
      width={'90%'}
    >
      <Tabs
        className={'font-semibold text-sm'}
        defaultActiveKey={SEARCH_GROUP_TAB_KEY}
        items={items}
        onChange={onChange}
      />
      {/* Modal content */}
    </Modal>
  );
};
