import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-gray-800 text-white flex gap-4 p-4'>
            <Link to='/' className='hover:underline'>Signout</Link>
        </nav>
    );
}


export default Navbar;