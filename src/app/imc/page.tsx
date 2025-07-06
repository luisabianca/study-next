import Imc from "@/components/imc";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Cáluladora de IMC',
  description: 'A page IMC the site'
}

export default function IMC() {
  return (
    <Imc />
  );
}
