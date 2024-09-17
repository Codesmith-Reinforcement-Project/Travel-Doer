import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (    
                <div className='navBar'>
                    <div className='Home'>
                        <Link to="/">Stocks</Link>
                    </div>
                    <div className='Results'>
                        <Link to="/results">Favourite</Link>
                </div>
                    <div className='Sign Up'>
                        <Link to="/signup">Cart</Link>
                    </div>
                </div>
    )

}

export default Navbar;