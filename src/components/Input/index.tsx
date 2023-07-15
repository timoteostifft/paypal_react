import { UseFormRegisterReturn } from "react-hook-form";
import { Container } from "./styles";
import { Error } from "../Error";

interface Props extends React.HTMLProps<HTMLInputElement> {
  register: UseFormRegisterReturn
  error?: string
}

export function Input({ error, placeholder, register }: Props) {
  return (
    <Container>
      <input
        {...register}
        type="text"
        placeholder={placeholder}
        onChange={register.onChange}
      />
      {error && <Error message={error} />}
    </Container>
  )
}