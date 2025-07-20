import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-gray-800 text-white flex gap-4 p-4'>
            <Link to='/login' className='hover:underline'>Login</Link>
            <Link to='/signup' className='hover:underline'>SignUp</Link>
            <Link to='/' className='hover:underline'>Home</Link>
        </nav>
    );
}


export default Navbar;