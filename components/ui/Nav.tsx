"use client";

// import Nav from nextui
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    NavbarMenuToggle,
    NavbarMenu, NavbarMenuItem
} from "@nextui-org/react";

// import image
import Image from "next/image";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {NavProps} from "@/interfaces/NavProps";

// import icons
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import {navItems} from "@/lib/NavData";

export default function Nav() {
    const pathname = usePathname();
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);


    return (
        <Navbar className="my-5" onMenuOpenChange={setIsNavOpen}>
            <NavbarMenuToggle
                aria-label={isNavOpen ? "Close menu" : "Open menu"}
                className="2xl:hidden p-5 m-5 border-blue-500 border-2 rounded-lg"
            />
            <NavbarBrand>
                <div>
                    <Image
                        src="/logo.png"
                        alt={"Logo"}
                        height={75}
                        width={75}
                        className={"ml-5 my-[-46.5px]"}
                        priority />
                </div>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={pathname === "/"}>
                    <Link href="/" aria-current="page">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/about'}>
                    <Link color="foreground" href="/about">
                        About
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className={""}>
                <NavbarItem>
                    <Button as={Link} color="primary" href="/signup" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="/login" variant="flat">
                        Login
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className={"w-1/2 my-5"}>
                {navItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.title}-${index}`}>
                        <NavbarItem isActive={pathname === item?.href}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === navItems.length - 1 ? "danger" : "foreground"
                                }
                                className={`w-full grid grid-cols-2 gap-2 place-items-center items-center`}
                                href={item?.href?.toString()}
                                size="lg"
                            >
                                {item.title} {item?.icon}
                            </Link>
                        </NavbarItem>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
