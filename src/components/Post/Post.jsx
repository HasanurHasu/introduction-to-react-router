
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post;

    const postStyle = {
        padding: '5px',
        border: '2px solid red',
        borderRadius: '10px'
    }
    return (
        <div style={postStyle} >
            <h3>Post ID: {id}</h3>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
};

export default Post;