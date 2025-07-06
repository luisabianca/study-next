import { Metadata } from "next";

type ParamsType = {
  params: {
    id: string
  }
}

type PostParam = {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const metadata: Metadata = {
  title: 'Post Page',
  description: 'A page Post Page the site'
}

export default async function PostPage({params}: ParamsType) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const data = await response.json() as PostParam;

  return (
    <main>
      <h1>{data.title}</h1>
      <h2>User id: {data.userId}</h2>
      <p>{data.body}</p>
    </main>
  );
}
