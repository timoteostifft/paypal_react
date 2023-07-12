import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Product } from "../../components/Product";
import { Product as TypeOfProduct } from "../../types/Product";
import { Container, Wrapper, Form, Card, SliderWrapper } from "./styles";
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { PiShoppingCartBold } from 'react-icons/pi'
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import { Navigate } from "../../components/Carrousel/Navigate";
import useWindowDimensions from "../../hooks/useWIndowsDimensions";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { PayPalButtons } from "@paypal/react-paypal-js"

const schema = yup.object({
  firtName: yup.string().required("First name is required."),
  lastName: yup.string().required("Last name is required."),
  email: yup.string().required("E-mail is required").email("Invalid e-mail."),
  phone: yup
    .string()
    .matches(/^\+1\d{10}$/, 'Invalid phone number.')
    .required('Phone number is required.'),
  address: yup.string().required("Address is required."),
  state: yup.string().required("State or Province is required."),
  zip: yup.string().required("Zip or Postal code is required."),
  country: yup.string().required("Country is required.")
})

type FormType = yup.InferType<typeof schema>;

export function Cart() {
  const { width } = useWindowDimensions()

  const products: TypeOfProduct[] = [
    {
      id: '1',
      name: 'Laptop DELL',
      price: '3420',
      serial_number: '5382905893295032953421'
    },
    {
      id: '2',
      name: 'IPhone 14',
      price: '4300',
      serial_number: '4218421904821094210484'
    },
  ]

  const settings = {
    prevArrow: <Navigate direction="left"/>,
    nextArrow: <Navigate direction="right"/>
  };

  const resolver = yupResolver<FormType>(schema);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver });

  async function onSubmit({
    firtName,
    lastName,
    email,
    phone,
    address,
    state,
    zip,
    country
  }: FormType) {
    try {
      console.log({
        firtName,
        lastName,
        email,
        phone,
        address,
        state,
        zip,
        country
      })
    } catch (err) {
      console.log(err)
    }
  }

  async function handleCreateOrder(data: any) {
    console.log(data)
  }

  return (
    <Container>
      <Header />
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
              register={{...register("firtName")}}
              error={errors.firtName?.message}
            />
            <Input
              placeholder="Last name"
              register={{...register("lastName")}}
              error={errors.lastName?.message}
            />
            <Input
              placeholder="E-mail"
              register={{...register("email")}}
              error={errors.email?.message}
            />
            <Input
              placeholder="Phone"
              register={{...register("phone")}}
              error={errors.phone?.message}
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
              register={{...register("address")}}
              error={errors.address?.message}
            />
            <Input
              placeholder="State or Province"
              register={{...register("state")}}
              error={errors.state?.message}
            />
            <Input
              placeholder="Zip or Postal code"
              register={{...register("zip")}}
              error={errors.zip?.message}
            />
            <Input
              placeholder="Country"
              register={{...register("country")}}
              error={errors.country?.message}
            />
          </Card>

        {/* <button type="submit">
          <span>Pay with Paypal</span>
        </button> */}
          <PayPalButtons />
        </Form>

        <Card>
          <header>
            <PiShoppingCartBold />
            <div>
              <h3>Cart items</h3>
              <p>Make sure you are aware of the selected products</p>
            </div>
          </header>
          {width < 768 ? (
            <SliderWrapper>
            <Slider {...settings}>
              {products.map((product) => (
                <Product
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  serial_number={product.serial_number}  
                />
              ))}
            </Slider>
          </SliderWrapper>
          ) : (
            <SliderWrapper>
              {products.map((product) => (
                <Product
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  serial_number={product.serial_number}  
                />
              ))}
            </SliderWrapper>
          )}
        </Card>
      </Wrapper>
    </Container>
  )
}