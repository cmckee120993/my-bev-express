import React, {useState} from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Search from './Search';
import Slushies from './Slushies';
import Contact from './Contact';
import '../styles/Header.css';


function Header() {
    const [currentPage, handlePageChange] = useState('Home');

    const renderPage = () => {
        switch (currentPage) {
            case 'Home':
                return <Home />;
            case 'Search':
                return <Search />;
            case 'Slushies':
                return <Slushies />;
            case 'Contact':
                return <Contact />;

            default:
                return <Home />
        }
    };

    return (
        <div>
            <header className="header">
                <p className="tagline">We got a whole lotta beer!</p>
            </header>

            <Navbar currentPage={currentPage}
            handlePageChange={handlePageChange} />

            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    );
};

export default Header;