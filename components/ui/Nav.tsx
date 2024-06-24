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
    NavbarMenu, NavbarMenuItem, User, Image
} from "@nextui-org/react";


import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/NavData";
import {signIn, signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

// type for the session coming from the server side
import {Session} from "next-auth";

export default function Nav({ user }: Session | {user: {name: string; email: string; image: string;}}) {
    const pathname = usePathname();
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const router = useRouter();
    return (
        <Navbar className="my-5" onMenuOpenChange={setIsNavOpen}>
            <NavbarMenuToggle
                aria-label={isNavOpen ? "Close menu" : "Open menu"}
                className="2xl:hidden p-5 m-5 border-blue-500 border-2 rounded-lg"
            />
            <NavbarBrand>
                <div className={""}>
                    <Image
                        src="/logo.png"
                        alt={"Logo"}
                        height={75}
                        width={75}
                        className={"ml-5"} />
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
                { user?.name && (
                    <NavbarItem isActive={pathname === '/dashboard'}>
                        <Link color="foreground" href="/dashboard">
                            Dashboard
                        </Link>
                    </NavbarItem>
                )}
            </NavbarContent>
            <NavbarContent justify="end" className={""}>
                <NavbarItem>
                    {   /**
                            The better idea: remove AvatarProps and allow users customize their profile instead
                            However, you handle different auth, so if you are certain about GitProvider, then
                            we can add avatar and be sure that it won't be undefined. Otherwise, handle auth differently
                        */
                        user?.name ||
                        user?.email ||
                        user?.image ?
                        <User name={user.name} description={user.email} avatarProps={{src: user?.image as string}}></User> : (
                                <User name={"Guest"} description={""} avatarProps={{src: "/logo.png"}}></User>
                            )
                    }
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="/signup" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    { user && user?.name !== "" ? (
                        <Button
                            as={Link}
                            color="primary"
                            variant="flat"
                            onClick={() => signOut()}>
                            LogOut
                        </Button>
                    ) : (
                        <Button
                            as={Link}
                            color="primary"
                            variant="flat"
                            onClick={() => router.push("/login")}>
                            Login
                        </Button>
                    )}
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
                                <div className={"flex gap-2"}>{item.title}{item.icon}</div>
                            </Link>
                        </NavbarItem>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
