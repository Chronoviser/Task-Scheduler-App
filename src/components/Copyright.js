import { Link } from 'react-router-dom';

function Copyright() {
    return (
        <footer>
            <h5>Copyright &copy; 2021</h5>
            <Link to="/about">About</Link>
        </footer>
    );
}

export default Copyright;