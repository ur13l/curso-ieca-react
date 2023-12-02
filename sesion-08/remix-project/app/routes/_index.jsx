import { metadata } from "../meta";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

export const meta = () => {
  console.log("Ejecutando código de meta()");
  return metadata;
};

export const loader = async () => {
  console.log("Ejecutando código de loader()");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return json({ posts });
};

export default function Index() {
  const { posts } = useLoaderData();

  console.log("Ejecutando código de Index");
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Talento Tech - React</h1>
      <Link to="/second">Ir a la segunda página</Link>
      <Link to="/posts/new">Crear nuevo post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
