"use client";

import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogOut(){
    const router = useRouter();
    return (
        <main className={"flex items-center justify-center"}>
            <div className={"flex flex-col items-center justify-center h-screen gap-5 text-2xl"}>
                <div>
                    <h1>Are you sure you want to log out?</h1>
                </div>
                <Button
                    onClick={(e) => {
                        signOut().then(() => router.push("/")).catch(e => console.log(e));
                    }}
                >
                    Log Out
                </Button>
                <Button onClick={() => router.push("/")}>
                    Go back to home!
                </Button>
            </div>
        </main>
    );
}