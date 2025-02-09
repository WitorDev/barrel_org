import { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed z-50 w-full bg-slate-900 shadow-lg">
            <nav className={`max-w-screen-xl mx-auto px-10 flex ${isOpen ? "flex-col" : "flex-row"} md:flex-row justify-between items-center py-2`}>
                <Brand isOpen={isOpen} />
                <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
                <NavLinks isOpen={isOpen} />
            </nav>
        </header>
    );
}

function Brand({ isOpen }) {
    return (
        <div className={`${isOpen ? "hidden" : "block"} text-white text-2xl font-bold`}>
            Ba<span className='text-yellow-500'>rre</span>l
        </div>
    );
}

function MenuButton({ isOpen, toggleMenu }) {
    return (
        <button 
            className="text-white md:hidden text-3xl focus:outline-none" 
            onClick={toggleMenu}
        >
            {isOpen ? <MdClose /> : <MdMenu />}
        </button>
    );
}

function NavLinks({ isOpen }) {
    return (
        <ul className={`text-white md:flex md:items-center text-center md:space-x-6 ${isOpen ? 'block' : 'hidden'} mt-2 md:mt-0`}>
            {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link} className="hover:border-b-2 hover:border-yellow-500 py-2 md:py-0">
                    <Link to={`/${link.toLowerCase()}`}>{link}</Link>
                </li>
            ))}
        </ul>
    );
}
