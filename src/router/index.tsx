import { Routes, Route } from "react-router-dom";
import { Cart } from "../pages/Cart";

export function Router() {
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}