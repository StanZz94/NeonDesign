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

    return <header className="w-full h-auto px-8 flex flex-row justify-between bg-stone-800">
        <div className="h-24 w-auto my-2">
            <img src={logoImg} alt="logo" className="h-full w-auto object-contain" />
        </div>
        <nav className="flex flex-row my-auto ">
            <ul className="flex gap-5">
                {navLinks.map((navlink) => (
                    <li key={navlink.text}>
                        <NavLink
                            to={navlink.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#FF0000] underline"
                                    : " text-[#FF9D04] hover:text-[#FF5806] hover:underline"
                            }
                            end
                        >
                            <span className="text-xl font-bold">{navlink.text}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
        <div className="h-24 w-auto my-2">
            <p className="text-white">Phone: +359 885 506 618</p>
            <p className="text-white">office@lightreklama.com</p>
            <div>
                <button>EN</button>
            </div>
        </div>
    </header>
}