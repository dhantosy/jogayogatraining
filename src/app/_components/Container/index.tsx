import { ReactNode } from 'react';
import { ContainerOuter, ContainerInner } from './styles';

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <ContainerOuter>
      <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
  );
}
