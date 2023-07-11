import { Container } from "./styles";
import logo from '../../assets/paypal.png'

export function Header() {
  return (
    <Container>
      <div>
        <img src={logo} alt="" />
      </div>
    </Container>
  )
}