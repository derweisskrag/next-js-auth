"use client";

import {Button, Input, Link, Image} from "@nextui-org/react";
import {AnimatePresence, motion} from "framer-motion";
import {signIn} from "next-auth/react";

export default function Login(){
    return (
        <main className={"flex flex-col items-center justify-center gap-[150px] md:flex-row text-default-500 lg:w-[100%]"}>
            <div>
                Image container
            </div>
            <div className={"flex flex-col gap-5 m-[5rem] items-center justify-center"}>
                <label>Login to watch movies in our theatre!</label>
                <AnimatePresence mode={"wait"}>
                    <motion.form
                        className={"flex flex-col gap-5 border-2 border-gray-300 p-4 rounded-md lg:w-[25em] lg:h-[30em] items-left justify-center"}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 50 }}
                    >
                        <div className={"flex flex-col gap-5 lg:text-2xl"}>
                            <label>Enter the username or email</label>
                            <Input placeholder="Username..."/>
                        </div>
                        <div className={"flex flex-col gap-5 lg:text-2xl"}>
                            <label>Enter the password: </label>
                            <Input placeholder={"Password..."}/>
                        </div>
                        <div className={"flex items-end flex-grow flex-wrap justify-center gap-2"}>
                            <Button className={"lg:text-2xl self-start basis-11/12 md:basis-5/12 lg:basis-1/5"}>
                                Login
                            </Button>
                            <Button
                                onClick={() => signIn()}
                                className={"flex flex-grow self-start bg-blue-300 lg:text-2xl basis-11/12 md:basis-2/4 lg:basis-9/12"}>
                                Sign in with GitHub!
                            </Button>
                            <div className={"flex-grow text-center"}>
                                Don&apos;t have an account?
                                <Link href={"/signup"} className={"ml-2"}>
                                    Please, sign up!
                                </Link>
                            </div>
                        </div>
                    </motion.form>
                </AnimatePresence>
            </div>
        </main>
    );
}