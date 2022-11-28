import React, {useState} from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Search from './Search';
import Slushies from './Slushies';
import Contact from './Contact';

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
                <h1>Beverage Express</h1>
            </header>

            <Navigation currentPage={currentPage}
            handlePageChange={handlePageChange} />

            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    );
};

export default Header;