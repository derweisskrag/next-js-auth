"use client";

import {Button, Input, Link} from "@nextui-org/react";
import {FormEvent, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

/**
 * "Form" is the form component used on the client side
 * of the application. It is used to gather valuable data
 * from users and let Java process it.
 * @component {<Form />}
 * @example
 * The component is used inside server components:
 * <Form />
 */

export default function Form(){
    const [value, setValue] = useState<string>("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // handle submission
    }

    return (
        <AnimatePresence mode={"wait"}>
            <motion.form
                initial={{ x: 300, y: 300, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ x: -300, y: -300, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 50 }}
                onSubmit={handleSubmit}
                className={"flex flex-col gap-4 border-2 border-gray-300 p-4 rounded-md"}>
                <span>Want to watch the movie?</span>
                <div>
                    <Input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <Input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Surname"
                    />
                </div>
                <div>
                    <Input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Phone"
                    />
                </div>
                <div>
                    <Input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div>
                    <Button as={Link} color="primary" href="/signup" variant="flat">
                        Submit
                    </Button>
                </div>
            </motion.form>
        </AnimatePresence>
    );
}