import { getCurso } from "@/app/api/cursos";
import { Metadata } from "next";
import Link from "next/link";

type CursoType = {
  params: {
    curso: string
  }
}

export const metadata: Metadata = {
  title: 'Cursos',
  description: 'A page Cursos the site'
}

export default async function CursoPage({params}: CursoType) {
  const curso = await getCurso(params.curso);
  return (
    <main>
      <Link href='/cursos'>Voltar</Link>
      <h1>{curso.nome}</h1>
      <p>{curso.descricao}</p>
      <p>Total Horas: {curso.total_horas}</p>
      <p>Total Aulas: {curso.total_aulas}</p>
      <h2>Aulas</h2>
      <ul>
        {curso.aulas.map((aula) => 
          <li key={aula.id}>
            <Link href={`/cursos/${params.curso}/${aula.slug}`}>
              {aula.nome}
            </Link>
          </li>
        )}
      </ul>
    </main>
  );
}
