import { getAula } from "@/api/cursos";
import { Metadata } from "next";

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
      <h1>{aula.nome}</h1>
      <p>{aula.descricao}</p>
      <p>Tempo: {aula.tempo} min</p>
    </main>
  );
}
