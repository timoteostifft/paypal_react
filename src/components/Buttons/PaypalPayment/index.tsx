import { PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { Product } from "../../../types/Product";
import React from "react";
import { FormType } from "../../../pages/Cart";

const API_URL = import.meta.env.VITE_API_URL;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  products: Product[]
  disabled: boolean;
  formData: () => FormType
}

export function PaypalPayment({ products, disabled, formData }: Props) {
  async function createOrder(data: any, actions: any) {
    return fetch(`${API_URL}/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        products: products.map((product) => ({
          name: product.name,
          price: product.price,
          serial_number: product.serial_number
        })),
        payer: {
          first_name: formData().firstName,
          last_name: formData().lastName,
          email: formData().email,
          phone: formData().phone,
          address: formData().address,
          state: formData().state,
          zip: formData().zip,
          country: formData().country
        }
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  };

  async function onApprove(data: any, actions: any) {
    const response =  fetch(`${API_URL}/capture-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((response) => {
        response.json()
      })
    
    toast.success("Payment approved successfully!")
    return response;
  };
  
  return (
    <PayPalButtons
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
      disabled={disabled}
    />
  );
  
}