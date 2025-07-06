'use client'

import { useState } from "react"

export default function Imc() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [imc, setImc] = useState('')

  const classificarIMC = (valor: number) => {
    if (valor < 18.5) return "Abaixo do peso";
    if (valor < 24.9) return "Peso normal";
    if (valor < 29.9) return "Sobrepeso";
    return "Obesidade";
  };

  const handleClick = () => {
    const alturaNum = Number(altura);
    const pesoNum = Number(peso);
    const total = (pesoNum / (alturaNum * alturaNum)).toFixed(2)
    if(alturaNum && pesoNum) {
      setImc(total)
    } else {
      alert("Por favor, insira um valor válido.");
    }
  }

  return (
    <main>
      <h1>Calculadora de IMC</h1>
      <label htmlFor="altura">Altura</label>
      <input type="number" name="altura" id="altura" step="0.01" value={altura} onChange={(e) => setAltura(e.target.value)} required/>
      <label htmlFor="peso">Peso</label>
      <input type="number" name="peso" id="peso" value={peso} onChange={(e) => setPeso(e.target.value)} required/>
      <button onClick={handleClick}>Calcular</button>

      <div className="result">
        {imc && <p>Seu IMC é: {imc} - {classificarIMC(Number(imc))}</p>}
      </div>
    </main>
  )
}