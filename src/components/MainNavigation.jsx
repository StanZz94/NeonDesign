import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logoImg from "../../public/logoNeo.png";

const navLinks = [
    { text: "Home", path: "/" },
    { text: "About Us", path: "/about-us" },
    { text: "Directions", path: "/directions" },
    { text: "Portfolio", path: "/portfolio" },
    { text: "Clients", path: "/clients" },
    { text: "Road Signs", path: "/road-signs" },
    { text: "Equipment", path: "/equipment" },
    { text: "Contacts", path: "/contacts" },
];

export default function MainNavigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-stone-800 text-white">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">

                {/* Logo */}
                <div className={`h-16  md:hidden lg:block`}>
                    <img src={logoImg} alt="logo" className="h-full w-auto object-contain" />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-4 lg:space-x-6 ">
                    {navLinks.map((navlink) => (
                        <NavLink
                            key={navlink.text}
                            to={navlink.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#FF0000] underline md:text-sm lg:text-lg font-semibold"
                                    : "text-[#FF9D04] hover:text-[#FF5806] hover:underline md:text-sm lg:text-lg font-semibold"
                            }
                            end
                        >
                            {navlink.text}
                        </NavLink>
                    ))}
                </nav>

                {/* Contact + Lang */}
                <div className="hidden md:flex flex-col md:text-xs lg:text-sm text-right">
                    <p className="text-white">Phone: +359 885 506 618</p>
                    <p className="text-white">office@lightreklama.com</p>
                    <button className="text-[#FF9D04] hover:text-[#FF5806] mt-1">EN</button>
                </div>

                {/* Burger Icon */}
                <button className="md:hidden text-white" onClick={() => setMenuOpen((prev) => !prev)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-stone-900 px-6 pb-4 space-y-3">
                    {navLinks.map((navlink) => (
                        <NavLink
                            key={navlink.text}
                            to={navlink.path}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? "block text-[#FF0000] underline text-lg font-semibold"
                                    : "block text-[#FF9D04] hover:text-[#FF5806] hover:underline text-lg font-semibold"
                            }
                            end
                        >
                            {navlink.text}
                        </NavLink>
                    ))}
                    <div className="pt-3 border-t border-stone-700">
                        <p className="text-white">Phone: +359 885 506 618</p>
                        <p className="text-white">office@lightreklama.com</p>
                        <button className="text-[#FF9D04] hover:text-[#FF5806] mt-1">EN</button>
                    </div>
                </div>
            )}
        </header>
    );
}
