type PageParams = {
  params: {
    id: string
  }
}

type ProdutoType = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: number
}

export default async function ProdutosPage({params}: PageParams) {
  const response = await fetch(`https://api.origamid.online/produtos/${params.id}`)
  const data: ProdutoType = await response.json();

  return (
    <main>
      <h1>{data.nome}</h1>
      <h2>{data.preco}</h2>
      <p>{data.descricao}</p>
    </main>
  );
}