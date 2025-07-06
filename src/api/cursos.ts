type CursosType = {
  descricao: string;
  id: number;
  nome: string;
  slug: string;
  total_aulas: number
  total_horas: number
}

type AulaType = {
  descricao: string;
  id: number;
  nome: string;
  slug: string;
  curso_id: number;
  tempo: number;
  ordem: number;
}

export async function getCursos() {
  const response = await fetch('https://api.origamid.online/cursos');
  return await response.json() as CursosType[];
}

export async function getCurso(curso: string) {
  const response = await fetch(`https://api.origamid.online/cursos/${curso}`);
  return await response.json() as CursosType & { aulas: AulaType[] };
}

export async function getAula(curso: string, aula: string) {
  const response = await fetch(`https://api.origamid.online/cursos/${curso}/${aula}`);
  return await response.json() as AulaType;
}