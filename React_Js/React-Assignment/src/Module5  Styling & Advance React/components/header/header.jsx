import React from 'react';
import '../header/header.css';
import Logo from '../../../assets/images/logo.svg';
const Header = () => {
return(
    <>
    <header className='container-fluid'>
        <div className='row'>
            <div className='col'>
                <img src={Logo}  />
            </div>
        </div>
    </header>
    </>
)
}

export default Header;