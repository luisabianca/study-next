import { getAula } from "@/api/cursos";
import { Metadata } from "next";
import Link from "next/link";

type AulaType = {
  params: {
    curso: string
    aula: string
  }
}

export const metadata: Metadata = {
  title: 'Aulas',
  description: 'A page Aulas the site'
}

export default async function AulaPage({params}: AulaType) {
  const aula = await getAula(params.curso, params.aula);

  return (
    <main>
      <Link href={`/cursos/${params.curso}`}>Voltar</Link>
      <h1>{aula.nome}</h1>
      <p>{aula.descricao}</p>
      <p>Tempo: {aula.tempo} min</p>
    </main>
  );
}
