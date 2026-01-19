import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import '../styles/Wilhan_project.module.css';


export default function CurrencySelector() {
  const { currency, setCurrency } = useContext(CurrencyContext);

  return (
    <select
      className="form-select form-select-sm ms-2"
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      style={{ width: 90 }}
      aria-label="Select currency"
    >
      <option value="IDR">IDR</option>
      <option value="JPY">JPY</option>
      <option value="USD">USD</option>
    </select>
  );
}
