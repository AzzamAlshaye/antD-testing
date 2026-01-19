import { ReactNode, ReactElement, Children } from 'react';

interface ConditionalProps {
  children: ReactNode;
}
interface ElseProps {
  render?: boolean;
  children: ReactNode;
}

interface IfProps {
  isTrue: boolean;
  children: ReactNode;
}

/**
 *
 *
 * @author aalhowimel @ 2024-03-07
 */

export const Conditional = (props: ConditionalProps) => {
  let when: ReactNode = null;
  let otherwise = null;

  Children.forEach(props.children, (child: any) => {
    if (child.props.isTrue == undefined) {
      otherwise = child;
    } else if (!when && child.props.isTrue) {
      when = child;
    }
  });

  return when || otherwise;
};

export const If = ({ isTrue, children }: IfProps): ReactElement =>
  (isTrue && children) as ReactElement;

export const Else = ({ render, children }: ElseProps): ReactElement =>
  (render || children) as ReactElement;
