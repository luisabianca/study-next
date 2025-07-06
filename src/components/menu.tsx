import Link from "next/link";

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/imc">Calculadora de IMC</Link>
      </li>
      <li>
        <Link href="/produtos">Produtos</Link>
      </li>
      <li>
        <Link href="/posts">Posts</Link>
      </li>
      <li>
        <Link href="/cursos">Cursos</Link>
      </li>
    </ul>
  )
}