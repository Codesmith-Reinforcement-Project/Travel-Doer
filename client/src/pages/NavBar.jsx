import {Link} from 'react-router-dom';

const Navbar = () => {
    return (    
        <div>
                <div className='nav' id = 'topnav'>
                    <div className='Home'>
                        <Link to="/">Home</Link>
                    </div>
                    <div className='Results'>
                        <Link to="/results">Results</Link>
                </div>
                    <div className='Results'>
                        <Link to="/results">Results</Link>
                    </div>
                </div>

                <div className='nav' id = 'rightnav'>
                    <div className='Sign Up'>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                    <div className='Log In'>
                        <Link to="/login">Log In</Link>
                    </div>
                </div>

                
        </div>

    )

}

export default Navbar;