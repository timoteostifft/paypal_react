import { CustomArrowProps } from 'react-slick';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import { Container } from './styles';

interface Props extends CustomArrowProps {
  direction: 'right' | 'left'
}

export function Navigate({ direction, className, onClick }: Props) {
  return (
    <Container className={className} onClick={onClick}>
      {direction === 'right' ? (<MdNavigateNext />) : (<MdNavigateBefore/>)}
    </Container>
  )
}