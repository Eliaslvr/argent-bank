import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../actions/authActions';
import Image from '../../img/argentBankLogo.png'
import './Navbar.css'

function Narbar() {
    const isConnected = useSelector((state) => state.auth.user);
    const userName = useSelector((state) => state.user.userData.userName);
    //const lastName = useSelector((state) => state.user.userData.lastName)
    const aa = useSelector((state) => state);
    console.log(aa);
    

    console.log('username ==> navbar', userName);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandle = () => {
        dispatch(logout());
        localStorage.clear();
        navigate('/');
    }

    return (
			<nav className="main-nav">
				<a href="/" className="main-nav-logo" >
					<img className="main-nav-logo-image" src={Image} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
				</a>
				{isConnected ? (
					<div>
                        <Link to='/profile' className="main-nav-item">
                            {userName}
                        </Link>
                        <a href='/' className="main-nav-item" onClick={logoutHandle}>
                            Sign Out
                        </a>
                    </div>
				) : (
					<div>
                        <a className="main-nav-item" href="./sign_in">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </a>
                    </div>
				)}
			</nav>
    );
}

export default Narbar;