import React, { createContext, useState, useMemo } from "react";
import '../styles/Wilhan_project.module.css';

export const CurrencyContext = createContext({
  currency: "JPY",
  setCurrency: () => {},
  format: (amountJpy) => amountJpy,
});

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("JPY");

  // static conversion rates (per 1 JPY)
  const rates = useMemo(
    () => ({
      JPY: 1,
      IDR: 110, // 1 JPY = 110 IDR (example)
      USD: 0.0065, // 1 JPY = 0.0065 USD (example)
    }),
    []
  );

  function format(amountJpy) {
    const rate = rates[currency] ?? 1;
    const value = amountJpy * rate;

    if (currency === "JPY") {
      return new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(value);
    }
    if (currency === "IDR") {
      return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value);
    }
    // USD
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
  }

  const ctx = {
    currency,
    setCurrency,
    format,
  };

  return <CurrencyContext.Provider value={ctx}>{children}</CurrencyContext.Provider>;
}
