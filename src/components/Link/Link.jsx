import PropTypes from 'prop-types'; 
const Link = ({route}) => {
    return (
        <li className="ml-3">
        <a href={route.path}>{route.name}</a></li>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired
}

export default Link;