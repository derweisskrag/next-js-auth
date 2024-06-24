import {Image} from "@nextui-org/react";
import {MoviesData} from "@/lib/MoviesData";

/**
 * This is a blog page
 *
 *
 *
 * @param params
 * @constructor
 */

export default function Movie({ params }: {
    params:{
        id: string;
    }
}){
    const targetMovie = MoviesData.find((movie) => movie.id == params.id);

    // check if the movie was found
    if(!targetMovie){
        return <div className={"text-2xl text-bold m-auto w-2"}>Not Found!</div>
    }

    const {title, src, description, rating} = targetMovie;


    return (
        <main className={"flex items-center justify-center m-5 p-5 gap-5"}>
            <Image
                alt="Movie image"
                height={250}
                radius="sm"
                src={src}
                width={250}
            />
            <div>
                <h1>{title}</h1>
                <h2>{rating}</h2>
                <p>{description}</p>
            </div>
        </main>
    );
}

export function generateStaticParams(){
    return MoviesData.map((movie) => {
        return {
            params: {
                id: movie.id.toString()
            }
        }
    });
}