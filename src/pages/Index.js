import Post from '../components/Post';
import {useLoaderData, Form} from 'react-router-dom';


function Index (props){

    // fetch the loaderdata using the useLoaderData hook
    const reservs = useLoaderData()

    // map over the todos and create a Post component for each reserv
    return <>
    <div style={{textAlign: "center"}}>
        <h2 className="red">Schedule Oil Change</h2>
        <Form method="post" action="/create">
            <input type="text" name="date" placeholder="Drop-off Date"/>
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="date" placeholder="Pick-up Date"/>
            <input type="text" name="phone_number" placeholder="Phone Number"/>
            <input type="text" name="vin" placeholder="Vin Number"/>
            <button>Schedule New Oil Change</button>
        </Form>
    </div>
    <div>
    {reservs.map((reserv) => <Post key={reserv.id} post={reserv}/>)}
    </div>
    </>

}

export default Index;