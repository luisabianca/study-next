import { getCursos } from "@/api/cursos";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Cursos',
  description: 'A page Cursos the site'
}

export default async function Cursos() {
  const cursos = await getCursos();
  return (
    <main>
      <h1>Cursos</h1>
      <ul>
        {cursos.map((curso) => 
        <li key={curso.id}>
          <Link href={`/cursos/${curso.slug}`}>
            {curso.nome}
          </Link>
        </li>
      )}
      </ul>
    </main>
  );
}
