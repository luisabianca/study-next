'use client'

import { useEffect, useState } from "react";

type Produto = {
  id: number;
  nome: string;
}

export default function ClientFetch() {
  const [ produto, setProduto ] = useState<Produto[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.origamid.online/produtos') 
      const data = (await response.json()) as Produto[]
      setProduto(data);
    } 

    fetchData();
  },[])

  return (
    <>
      <p>Client Fetch</p>
      <ul>
        {produto.map((produto) => <li key={produto.id}>{produto.nome}</li> )}
      </ul>
    </>
  )
}
