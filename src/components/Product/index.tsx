import { Product as TypeOfProduct } from "../../types/Product";
import { Container } from "./styles";
import product from '../../assets/product.png'
import { formatPriceToUSD } from "../../utils/formatPriceToUSD";

export function Product({ name, price, serial_number }: Omit<TypeOfProduct, 'id'>) {
  return (
    <Container>
      <img src={product} alt=""/>
      <span>{formatPriceToUSD(price)}</span>
      <span>{name}</span>
      <p>{serial_number}</p>
    </Container>
  )
}