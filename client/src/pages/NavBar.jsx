import {Link} from 'react-router-dom';

const Navbar = () => {
    return (    
                <div className='navBar'>
                    <div className='Home'>
                        <Link to="/">Home</Link>
                    </div>
                    <div className='Results'>
                        <Link to="/results">Results</Link>
                </div>
                    <div className='Sign Up'>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
    )

}

export default Navbar;