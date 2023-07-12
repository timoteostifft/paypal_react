import { BrowserRouter } from "react-router-dom"
import { Router } from "./router"
import { GlobalStyle } from './styles/global'
import { PayPalScriptProvider } from "@paypal/react-paypal-js"

function App() {

  return (
    <BrowserRouter>
      <PayPalScriptProvider options={{
        clientId: "AQDDHAzMKr-KbfWGv9fgGb4bhJNpJ3xLUlw5CSyMnQhrhcS5orPxvUHnHAWdHdt9GQwByJZ-x86WTdpb",
        disableFunding: "card",
        currency: "BRL"
      }}>
        <Router />
      </PayPalScriptProvider>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
