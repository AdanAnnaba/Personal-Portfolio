import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div class="navbar bg-neutral text-neutral-content justify-between">
            <Link to='/' class="btn btn-ghost normal-case text-xl">Welcome to my portfolio</Link>
            <Link to='contactme' class="">Contact Me</Link>
            <a href="https://drive.google.com/u/0/uc?id=1F0bYHrqidcR1xIqposRAXueiZHK6bHqO&export=download">Download Resume</a>
            </div>
            
        </div>
    );
};

export default Header;