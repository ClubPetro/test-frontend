import { ToastMessage } from '../../hooks/useToast';

import Toast from './Toast';

import * as S from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

export default function ToastContainer(props: ToastContainerProps) {
  const { messages } = props;

  return (
    <S.Wrapper>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </S.Wrapper>
  );
}
