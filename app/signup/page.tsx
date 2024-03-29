"use client";

import {Button, Input, Link, Image} from "@nextui-org/react";
import {AnimatePresence, motion} from "framer-motion";
export default function SignUp(){
    return (
        <main className={"flex flex-col items-center justify-center gap-[150px] md:flex-row"}>
            <div>
                Image container
            </div>
            <div className={"flex flex-col gap-5"}>
                <label>Sign Up to watch movies in our theatre!</label>
                <AnimatePresence mode={"wait"}>
                    <motion.form
                        initial={{ y: -300, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 50 }}
                        className={"flex flex-col gap-5 border-2 border-gray-300 p-4 rounded-md"}
                    >
                        <div className={"flex flex-col gap-5"}>
                            <label>Enter the username: </label>
                            <Input placeholder={"Username..."}/>
                        </div>
                        <div className={"flex flex-col gap-5"}>
                            <label>Enter the password: </label>
                            <Input placeholder={"Password..."}/>
                        </div>
                        <div className={"flex flex-col gap-5"}>
                            <label>Repeat the password: </label>
                            <Input placeholder={"Repeat the password..."}/>
                        </div>
                        <div className={"flex flex-col gap-5"}>
                            <label>Enter your email: </label>
                            <Input placeholder={"Your email..."}/>
                        </div>
                        <div>
                            <Button>
                                Complete registration
                            </Button>
                            <div className={"my-5 flex items-center justify-between"}>
                                Already have an account?
                                <Link href={"/login"}>
                                    Login
                                </Link>
                            </div>
                        </div>
                    </motion.form>
                </AnimatePresence>
            </div>
        </main>
    );
}