import { json } from "@remix-run/node";

export default function NewPost() {
  return (
    <div>
      <form
        action="/posts/new"
        method="post"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <label htmlFor="title">Título</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="body">Contenido</label>
        <textarea name="body" id="body" cols="30" rows="10"></textarea>
        <button type="submit">Crear post</button>
      </form>
    </div>
  );
}

export const action = async ({ request }) => {
  const formData = await request.formData();

  console.log(formData.get("title"));
  console.log(formData.get("body"));

  try {
    const res = await createPost({
      title: formData.get("title"),
      body: formData.get("body"),
    });

    return json({ ok: true });
  } catch (error) {
    console.log(error);
    return json({ ok: false });
  }
};
