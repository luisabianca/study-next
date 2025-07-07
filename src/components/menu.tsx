import { cookies } from "next/headers";
import Link from "next/link";

type Conta = {
  autorizado: boolean;
  usuario: string;
}

export default async function Menu() {
  let conta: Conta = {
    autorizado: false,
    usuario: ''
  }

  const token = (await cookies()).get('token')?.value;
  const response = await fetch('https://api.origamid.online/conta/perfil', {
    headers: {
      Authorization: "Bearer " + token
    }
  })
  if(response.ok) {
    conta = await response.json() as Conta;
  } else {
    console.log('Erro ao buscar perfil');
  }

  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        {conta.autorizado ? 'Welcome, ' + conta.usuario : <Link href="/login">Login</Link>}
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/imc">IMC Calculator</Link>
      </li>
      <li>
        <Link href="/produtos">Products</Link>
      </li>
      <li>
        <Link href="/posts">Posts</Link>
      </li>
      <li>
        <Link href="/cursos">Courses</Link>
      </li>
      <li>
        <Link href="/acoes">Actions</Link>
      </li>
    </ul>
  )
}