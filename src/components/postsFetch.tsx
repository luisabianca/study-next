import Link from "next/link";

type PostsType = {
  id: number;
  title: string; 
}

export default async function PostsFetch() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json() as PostsType[];

  return (
    <>
      <p>Posts List</p>
      <ul>
        {data.map((post) =>  
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li> 
        )}
      </ul>
    </>
  )
}