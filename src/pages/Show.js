import { Link, useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const post = useLoaderData();

  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.subject}</h1>
      <h2>{post.details}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Update Caller's Info</h2>
        <Form method="post" action={`/update/${post.id}`}>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            defaultValue={post.subject}
          />
          <input
            type="text"
            name="details"
            placeholder="Details"
            defaultValue={post.details}
          />
          <button>Update Caller's Info</button>
        </Form>
        <Form method="post" action={`/delete/${post.id}`}>
            <button>Delete Caller's Info</button>
        </Form>
      </div>
      <Link to="/">Back</Link>
    </div>
  );
}

export default Show;