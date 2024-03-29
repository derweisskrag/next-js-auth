import MyCard from "@/components/ui/Card";
import {MoviesData} from "@/lib/MoviesData";
import {Route} from "next";

export default function MovieGrid(){
    return (
        <main id={"movies"} className={"grid m-5 p-5 gap-5 place-items-center grid-cols-1 md:grid-cols-2 \ " +
            "lg:grid-cols-3 \ " +
            "xl:grid-cols-4 xl:text-2xl xl:text-center \ " +
            "2xl:grid-cols-5 2xl:text-2xl"}>
            {MoviesData.map((movie, index) => (
                <MyCard
                    title={movie.title}
                    src={movie.src}
                    description={movie.description}
                    href={'/movies/' + movie.id}
                    key={index}
                />
            ))}
        </main>
    );
}