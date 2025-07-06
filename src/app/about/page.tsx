import ClientFetch from "@/components/clientFetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
  description: 'A page about the site'
}

export default function About() {
  return (
    <main>
      <h1>About</h1>
       <ClientFetch />
    </main>
  );
}
