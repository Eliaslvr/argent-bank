import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../actions/authActions';
import Image from '../../img/argentBankLogo.png'
import './Navbar.css'

function Narbar() {
    const isConnected = useSelector((state) => state.auth.user);
    const userName = useSelector((state) => state.user.userData.userName);

    console.log('username ==> navbar', userName);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandle = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
			<nav className="main-nav">
				<Link to="/" className="main-nav-logo" >
					<img className="main-nav-logo-image" src={Image} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
				</Link>
				{isConnected ? (
					<div>
                        <Link to='/profile' className="main-nav-item">
                            {userName}
                        </Link>
                        <Link to='/' className="main-nav-item" onClick={logoutHandle}>
                            Sign Out
                        </Link>
                    </div>
				) : (
					<div>
                        <Link to="./sign_in" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    </div>
				)}
			</nav>
    );
}

export default Narbar;