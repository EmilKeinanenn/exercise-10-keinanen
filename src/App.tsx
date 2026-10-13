import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const VAT_RATE = 0.255

function App() {
  const [amount, setAmount] = useState('')
  const [vat, setVat] = useState<string | null>(null)
  const [total, setTotal] = useState<string | null>(null)

  const calculate = () => {
    const value = parseFloat(amount.replace(',', '.'))
    if (Number.isNaN(value)) {
      setVat(null)
      setTotal(null)
      return
    }
    const vatValue = value * VAT_RATE
    setVat(vatValue.toFixed(2))
    setTotal((value + vatValue).toFixed(2))
  }

  return (
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>
      <h1>Vat Calculator</h1>
      <div>
        <label>
          Amount (€):{' '}
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>
      <button className="counter" onClick={calculate}>
        Calculate VAT
      </button>
      <p>
        VAT (€): {vat ?? ''}, Total (€): {total ?? ''}
      </p>
    </section>
  )
}

export default App
