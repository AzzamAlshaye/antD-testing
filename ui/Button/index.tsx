// AppButton.tsx
import { Button as AndtButton, ButtonProps } from 'antd';
import clsx from 'clsx';

type AppButtonProps = ButtonProps & {};

export const Button = ({ className, ...props }: AppButtonProps) => {
  return <AndtButton {...props} className={clsx('', className)} />;
};
