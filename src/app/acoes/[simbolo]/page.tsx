import { Metadata } from "next";
import Link from "next/link";

type ParamsType = {
  params: {
    simbolo: string;
  }
}

type AcaoType = {
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

export default async function Acao({params}: ParamsType) {
  const response = await fetch(`https://api.origamid.online/acoes/${params.simbolo}`, 
    {next: {
      revalidate: 5
    } });
  const data = await response.json() as AcaoType;

  console.log(data)

  return (
    <main>
      <Link href={'/acoes'}>Voltar</Link>
      <h1>{data.nome}</h1>
      <h2>{data.simbolo}</h2>
      <h3>Preço: {data.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h3>
      <p>{data.descricao}</p>
      <p>Vendas: {data.vendas}</p>
      <p>Última atualização: {data.atualizada}</p>
    </main>
  );
}
