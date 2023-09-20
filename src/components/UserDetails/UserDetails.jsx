import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, phone} = user;
    return (
        <div>
            <h1>User Name: {name}</h1>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default UserDetails;