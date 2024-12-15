import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiKey from './api';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [rate, setRate] = useState(1);

  useEffect(() => {
    axios
      .get(`https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/${fromCurrency}`)
      .then((response) => setRate(response.data.conversion_rates[toCurrency]))
      .catch((error) => console.error(error));
  }, [fromCurrency, toCurrency]);

  const convertedAmount = (amount * rate).toFixed(2);

  return (
    <div className="currency-converter">
      <h3>Valyuta Konvertori</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="UZS">UZS</option>
      </select>
      <span> → </span>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="UZS">UZS</option>
      </select>
      <p>Konvertatsiya natijasi: {convertedAmount} {toCurrency}</p>
    </div>
  );
};

export default CurrencyConverter;