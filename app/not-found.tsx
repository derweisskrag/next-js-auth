"use client";

import {Button} from "@nextui-org/react";
import {useRouter} from "next/navigation";

export default function NotFound(){
    const router = useRouter();
    return (
        <main className={"flex items-center justify-center m-5 p-5 gap-5"}>
            <h1>NotFound the page!</h1>
            <Button onClick={() => router.push("/")}>Go back to Home</Button>
        </main>
    );
}