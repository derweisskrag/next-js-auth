"use client";

// import image
// API or DB to render movies
import Image from "next/image";

// import icon
import { Gi3DMeeple } from "react-icons/gi";
import Form from "@/components/ui/Form";
import SeatPlaces from "@/components/ui/SeatPlaces";


/**
 * `BestMovie` is a React component that renders a card for the best movie.
 *
 * The card includes an image and a rating, both centered within their parent div.
 * The parent div uses flexbox for layout, with items centered and justified to the end.
 *
 * @component
 * @example
 * // To use this component, you can import it and use it in your JSX like this:
 * <BestMovie />
 */
export default function BestMovie(){
    return (
        <main className={"text-default-500 my-6 p-5 flex flex-col items-center justify-center gap-10 \ " +
            "md:grid grid-cols-3 grid-rows-2 md:place-items-center \ " +
            "lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:place-items-center \ " +
            "xl:flex xl:flex-row xl:items-center xl:justify-center xl:gap-15 xl:text-2xl \ " +
            "w-full xl:bg-gray-100 h-[724px] md-rounded"}>
            <div className={"lg:row-span-2"}>
                <p>Best Movie</p>
                <div>
                    <div>Image</div>
                    <div className={"flex items-center justify-end"}>
                        <span className={"flex items-center justify-center gap-4"}>Rating <Gi3DMeeple/></span>
                    </div>
                </div>
            </div>
            <div className={"md:col-span-2"}>
                <Form/>
            </div>
            <div className={"md:col-span-3 lg:col-span-2"}>
                <SeatPlaces />
            </div>
        </main>
    );
}