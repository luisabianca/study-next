import PostsFetch from "@/components/postsFetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Posts',
  description: 'A page Posts the site'
}

export default function Posts() {
  return (
    <main>
      <h1>Posts</h1>
      <PostsFetch />
    </main>
  );
}
