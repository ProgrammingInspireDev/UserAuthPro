import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
        navigate('/'); 
    };

    return (
        <nav className='bg-gray-800 text-white flex gap-4 p-4 '>
            <button onClick={handleLogout} className='hover:underline cursor-pointer'>
                Signout
            </button>
        </nav>
    );
};

export default Navbar;
