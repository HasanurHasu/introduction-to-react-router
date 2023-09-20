
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { id, name, email, website } = user;
    const userStyle = {
        padding: '5px',
        border: '2px solid red',
        borderRadius: '10px'
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{website}</p>
            <Link to={`/user/${id}`}><button>More Details</button></Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
};

export default User;