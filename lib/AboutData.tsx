import { GrAchievement } from "react-icons/gr";
import { GoBriefcase, GoCodeOfConduct  } from "react-icons/go";
import {MovieProps} from "@/interfaces/MovieProps";
import {ICard} from "@/interfaces/CardInterface";

/**
 * This module contains the data used for rendering About page
 *
 * @property
 * title (string) - the title of the about item (e.g., achievement)
 * src (string) - the path to the image (for about page, we use a Card)
 * description (string) - a paragraph used to describe the object
 * icon (IconType) - an Optional React icon.
 */

export const AboutData: ICard[] = [
    {
        title: "Achievement",
        src: "",
        description: "Our theatre published our first movie!",
        icon: <GrAchievement />,
    },
    {
        title: "Proficiency",
        src: "",
        description: "We are happy to let people enjoy watching famous movies in our theatre! \ " +
            "We serve hundreds of people every day!",
        icon: <GoBriefcase />,
    },
    {
        title: "Quality",
        src: "",
        description: "We share the best movies in the world!",
        icon: <GoCodeOfConduct />
    }
]