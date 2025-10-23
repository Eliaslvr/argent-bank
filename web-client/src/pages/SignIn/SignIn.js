import React from 'react';
import Narbar from '../../components/Navbar/Narbar';
import MainSignIn from '../../components/MainSignIn/MainSignIn'
import Footer from '../../components/Footer/Footer';

import '../../index.css'

function SignIn() {
    return (
        <>
            <Narbar />
            <main className="main bg-dark">
                <MainSignIn />
            </main>
            <Footer />
        </>
    );
}

export default SignIn;