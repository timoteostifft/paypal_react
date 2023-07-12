import { Container } from './styles';
import { FiAlertTriangle } from 'react-icons/fi';

interface Props {
  message: string;
}

export function Error({ message }: Props) {
  return (
    <Container>
      <FiAlertTriangle color="#ED1C24" />
      {message || ''}
    </Container>
  );
}
