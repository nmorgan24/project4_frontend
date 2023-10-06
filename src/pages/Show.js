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
        <h1>{post.date}</h1>
        <h2>{post.name}</h2>
        <h2>{post.time}</h2>
        <h2>{post.phone_number}</h2>
        <h2>{post.number_of_customers}</h2>
      <div style={{ textAlign: "center" }}>
        <h2 className="red">Update Reservation</h2>
        <Form method="post" action={`/update/${post.id}`}>
          <input
            type="text"
            name="date"
            placeholder="Drop-off Date"
            defaultValue={post.date}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={post.name}
          />
          <input
            type="text"
            name="date"
            placeholder="Pick-up Date"
            defaultValue={post.time}
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            defaultValue={post.phone_number}
          />
          <input
            type="text"
            name="vin"
            placeholder="Vin Number"
            defaultValue={post.number_of_customers}
          />
          <button>Update Oil Change</button>
        </Form>
        <Form method="post" action={`/delete/${post.id}`}>
            <button>Delete Oil Change</button>
        </Form>
      </div>
      <Link to="/">Back to Index</Link>
    </div>
  );
}

export default Show;