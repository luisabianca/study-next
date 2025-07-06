import Link from "next/link";

type Produto = {
  id: number;
  nome: string;
}

export default async function ServerFetch() {
  const response = await fetch('https://api.origamid.online/produtos') 
  const data =  await response.json() as Produto[]

  return (
    <>
      <p>Server Fetch</p>
      <ul>
        {data.map((produto) => 
          <li key={produto.id}>
            <Link href={String(`produtos/${produto.id}`)}>
              {produto.nome}
            </Link>
          </li> 
        )}
      </ul>
    </>
  )
}
