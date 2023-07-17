import { BrowserRouter } from "react-router-dom"
import { Router } from "./router"
import { GlobalStyle } from './styles/global'
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <PayPalScriptProvider options={{
        clientId: "AQDDHAzMKr-KbfWGv9fgGb4bhJNpJ3xLUlw5CSyMnQhrhcS5orPxvUHnHAWdHdt9GQwByJZ-x86WTdpb",
        disableFunding: "card",
        currency: "BRL",
        intent: "capture"
      }}>
        <Router />
      </PayPalScriptProvider>
      <ToastContainer />
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
