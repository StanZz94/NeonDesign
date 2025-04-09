import { NavLink } from "react-router-dom"

export default function MainNavigation() {

    return <header className="w-full mx-auto py-8 px-20 flex justify-betweens bg-stone-950">
        <nav className="flex flex-row gap-20">
            <ul className="flex gap-4">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#BAE218] underline"
                                : "text-[#dec245] hover:text-[#d9b15a] hover:underline"
                        }
                        end
                    >
                        <span className="text-xl font-semibold">Home</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
}