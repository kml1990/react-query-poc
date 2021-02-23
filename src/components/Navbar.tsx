import React from 'react';
import { Page } from '../App';

export interface NavbarProps {
    setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setPage }) => {
  return (
    <nav className="Navbar">
        <button className="Navbar__button" onClick={() => setPage(Page.PLANETS)}>{Page.PLANETS}</button>
        <button className="Navbar__button" onClick={() => setPage(Page.PEOPLE)}>{Page.PEOPLE}</button>
    </nav>
  );
}

export default Navbar;
