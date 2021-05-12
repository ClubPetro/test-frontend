import { PropsWithChildren } from 'react';
import { FiX } from 'react-icons/fi';

import ReactDOM from 'react-dom';

import * as S from './styles';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

interface ModalProps {
  isShown: boolean;
  title: string;
  hide(): void;
}

export default function Modal(props: PropsWithChildren<ModalProps>) {
  const { isShown, title, hide, children } = props;

  const modal = (
    <S.Container>
      <S.Content>
        <header>
          <strong>{title}</strong>
          <button type="button" onClick={hide}>
            <FiX size="20" />
          </button>
        </header>
        <div>{children}</div>
      </S.Content>
    </S.Container>
  );

  return isShown ? ReactDOM.createPortal(modal, modalRoot) : null;
}
