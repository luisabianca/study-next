'use client'

import { useState } from "react"

export default function Imc() {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [imc, setImc] = useState(0)

  const classificarIMC = (valor: number) => {
    if (valor < 18.5) return "Abaixo do peso";
    if (valor < 24.9) return "Peso normal";
    if (valor < 29.9) return "Sobrepeso";
    return "Obesidade";
  };

  const handleClick = () => {
    if(altura > 0) {
      setImc(peso / (altura * altura))
    } else {
      alert("Por favor, insira uma altura válida.");
    }
  }

  return (
    <main>
      <h1>Calculadora de IMC</h1>
      <label htmlFor="altura">Altura</label>
      <input type="number" name="altura" id="altura" step="0.01" onChange={(e) => setAltura(Number(e.target.value))} required/>
      <label htmlFor="peso">Peso</label>
      <input type="number" name="peso" id="peso" onChange={(e) => setPeso(Number(e.target.value))} required/>
      <button onClick={handleClick}>Calcular</button>

      <div className="result">
        {imc > 0 && <p>Seu IMC é: {imc.toFixed(2)} - {classificarIMC(imc)}</p>}
      </div>
    </main>
  )
}