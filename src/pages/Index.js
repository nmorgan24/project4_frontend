import Post from '../components/Post';
import {useLoaderData, Form} from 'react-router-dom';
import "../styles.scss";

function Index (props){

    // fetch the loaderdata using the useLoaderData hook
    const todos = useLoaderData()

    // map over the todos and create a Post component for each todo
    return <>
    <div style={{textAlign: "center"}}>
        <h2>Return Missed Calls</h2>
        <Form method="post" action="/create">
            <input type="text" name="Name" placeholder="Caller's Name"/>
            <input type="text" name="Number" placeholder="Phone Number"/>
            <button>Create a New Missed Call</button>
        </Form>
    </div>
    {todos.map((todo) => <Post key={todo.id} post={todo}/>)}
    </>

}

export default Index;