import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Product } from "../../components/Product";
import { Product as TypeOfProduct } from "../../types/Product";
import { Container, Wrapper, Form, Card } from "./styles";
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { PiShoppingCartBold } from 'react-icons/pi'

export function Cart() {
  const products: TypeOfProduct[] = [
    {
      id: '1',
      name: 'Laptop DELL',
      price: '3420',
      serial_number: '5382905893295032953421'
    },
  ]

  return (
    <Container>
      <Header />

      <Wrapper>
        <Form>
          <Card>
            <header>
              <AiOutlineUser/>
              <div>
                <h3>Personal Information</h3>
                <p>Enter your data so that we can identify you</p>
              </div>
            </header>
            <Input
              placeholder="First name"
            />
            <Input
              placeholder="Last name"
            />
            <Input
              placeholder="E-mail"
            />
            <Input
              placeholder="Phone"
            />
          </Card>

          <Card>
            <header>
              <HiOutlineLocationMarker />
              <div>
                <h3>Shipping address</h3>
                <p>Enter the address you want your order to be delivered</p>
              </div>
            </header>
            <Input
              placeholder="Address line"
            />
            <Input
              placeholder="State / province"
            />
            <Input
              placeholder="Zip / Postal code"
            />
            <Input
              placeholder="Country"
            />
          </Card>

        <button type="submit">
          <span>Pay with Paypal</span>
        </button>
        </Form>

        <Card>
          <header>
            <PiShoppingCartBold />
            <div>
              <h3>Cart items</h3>
              <p>Make sure you are aware of the selected products</p>
            </div>
          </header>
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              serial_number={product.serial_number}  
            />
          ))}
        </Card>

      </Wrapper>
    </Container>
  )
}