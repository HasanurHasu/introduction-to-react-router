import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {userId, title, body } = post;
    return (
        <div>
            <h2>UserID: {userId}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;