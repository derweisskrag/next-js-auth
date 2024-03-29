import {MovieProps} from "@/interfaces/MovieProps";

/**
 * This modules contains data for dynamic pages `Moves`.
 * In each grid, there is a movie, you can click on it
 * to gain more insight into it (redirects to the dynamic
 * page with special id).
 *
 * @property
 * id (string) - an identification of the movie (when using DB, this file may not be needed!)
 * title (string) - the name of the movie
 * src (string) - the path to the image
 * description (string)
 */

export const MoviesData: MovieProps[] = [
    {
        id: "1",
        title: "Movie 1",
        src: "",
        description: "This is movie 1",
        rating: 3.0
    },
    {
        id: "2",
        title: "Movie 2",
        src: "",
        description: "This is movie 2",
        rating: 4.6
    },
    {
        id: "3",
        title: "Movie 3",
        src: "",
        description: "This is movie 3",
        rating: 7.0
    },
    {
        id: "4",
        title: "Movie 4",
        src: "",
        description: "This is movie 4",
        rating: 6.5
    },
    {
        id: "5",
        title: "Movie 5",
        src: "",
        description: "This is movie 5",
        rating: 7.6
    },
    {
        id: "6",
        title: "Movie 6",
        src: "",
        description: "This is movie 6",
        rating: 9.1
    },
    {
        id: "7",
        title: "Movie 7",
        src: "",
        description: "This is movie 7",
        rating: 7.8
    },
    {
        id: "8",
        title: "Movie 8",
        src: "",
        description: "This is movie 8",
        rating: 10.0
    },
];