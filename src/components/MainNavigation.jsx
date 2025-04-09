import { NavLink } from "react-router-dom";

import logoImg from "../../public/logoNeo.png";

const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'Abouts Us', path: '/about-us' },
    { text: 'Directions', path: '/directions' },
    { text: 'Portfolio', path: '/portfolio' },
    { text: 'Clients', path: '/clients' },
    { text: 'Road Signs', path: '/road-signs' },
    { text: 'Equipment', path: '/equipment' },
    { text: 'Contacts', path: '/contacts' },
];

export default function MainNavigation() {

    return <header className="w-full h-24 px-20 flex flex-row justify-betweens bg-stone-900">
        <div className="h-22 w-auto mt-1">
            <img src={logoImg} alt="logo" className="h-full w-auto object-contain" />
        </div>
        <nav className="flex flex-row my-auto">
            <ul className="flex gap-4">
                {navLinks.map((navlink) => (
                    <li key={navlink.text}>
                        <NavLink
                            to={navlink.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#BAE218] underline"
                                    : "text-[#dec245] hover:text-[#d9b15a] hover:underline"
                            }
                            end
                        >
                            <span className="text-xl font-semibold">{navlink.text}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
}