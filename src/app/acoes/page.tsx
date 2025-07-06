import { Metadata } from "next";
import Link from "next/link";

type Acoestype = {
  id: number;
  preco_anterior: number;
  preco: number;
  simbolo: string;
  nome: string;
  descricao: string;
  vendas: number;
  atualizada: string
}

export const metadata: Metadata = {
  title: 'Açoes',
  description: 'A page Açoes the site'
}

export default async function Acoes() {
  const response = await fetch('https://api.origamid.online/acoes');
  const data = await response.json() as Acoestype[];

  return (
    <main>
      <h1>Ações</h1>
      <ul>
        {data.map((acao) => 
          <li key={acao.id}>
            <Link href={`/acoes/${acao.simbolo}`}>{acao.nome}</Link>
          </li>
        )}
      </ul>
    </main>
  );
}
