"use client";

import { Checkbox, Button } from "@nextui-org/react";
import {EventHandler, useState} from "react";

/**
 * The SeatSelector component allows users to choose seats from a dynamically rendered grid.
 * It provides a more intuitive interface compared to a dropdown
 * for selecting seats in a theater setting.
 *
 * It uses CheckBox and Button components provided by nextui library. This way,
 * we can dynamically render sits places.
 *
 */

// constant
const SIT_NUMBER = 42;

function SeatSelector() {
    // create the grid
    const seatLabels = Array.from({ length: SIT_NUMBER }, (_, index) => `Seat ${index + 1}`);

    return (
        <div className="seat-selector flex flex-col gap-4 justify-center items-center">
            <label className="mb-2">Choose your seat in the theatre:</label>
            <div className={"place-items-center grid gap-2 grid-cols-3 md:grid-cols-6"}>
                {seatLabels.map((_, index) => (
                    <div className={"flex gap-3"} key={index}>
                        <span key={index}>{index}</span>
                        <Checkbox key={index}/>
                    </div>
                ))}
            </div>
            <div className="seat-selector-actions">
                <Button
                    variant="bordered"
                >
                    Confirm Selection
                </Button>
            </div>
        </div>
    );
}


export default function SeatPlaces(){
    return (
        <SeatSelector />
    );
}