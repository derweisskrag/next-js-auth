import {NavProps} from "@/interfaces/NavProps";
import {FaHome} from "react-icons/fa";
import {FcAbout} from "react-icons/fc";
import { MdMovieFilter } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
export const navItems: NavProps[] = [
    {
        title: "Home",
        href: "/",
        icon: <FaHome />,
    },
    {
        title: "About",
        href: "/about",
        icon: <FcAbout />
    },
    {
        title: "Best Movies",
        href: "#movies",
        icon: <MdMovieFilter />
    },
    {
        title: "Log Out",
        href: "/api/auth/signout",
        icon: <IoLogOutOutline />
    }
];