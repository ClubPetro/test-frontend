import { PropsWithChildren } from 'react';

import * as S from './styles';

export default function Container({ children }: PropsWithChildren<unknown>) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
