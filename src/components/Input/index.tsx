// import { UseFormRegisterReturn } from "react-hook-form";
import { Container } from "./styles";
import { Error } from "../Error";

interface Props extends React.HTMLProps<HTMLInputElement> {
  // register: UseFormRegisterReturn
  error?: string
}

export function Input({ error, placeholder }: Props) {
  return (
    <Container>
      <input
        // {...register}
        type="text"
        placeholder={placeholder}
      />
      {error && <Error message={error} />}
    </Container>
  )
}