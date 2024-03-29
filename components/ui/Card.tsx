/**
 * This card is reused within the application with different
 * parameters.
 *
 * @param {data} - a JS object containing the following properties:
 *  - title (string) for the name/title
 *  - src (string) for image src
 *  - description (string) for the description of an object
 *  - icon (IconType) is the React icon by react-icon
 *  - href (string) is an optional href for the Link for dynamic content
 *
 * @component {<Card />}
 * @example
 * <Card data={{
 *      title: "Hello, world!",
 *      description: "This is an English sentence."
 * }}>
 */

import {ICard} from "@/interfaces/CardInterface";
import type {CardProps} from "@nextui-org/card";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";


export default function MyCard({
    title,
    src,
    description,
    icon,
    href
}: ICard) {

    return (
        <Card className="max-w-[400px] xl:text-2xl">
            <CardHeader className="flex gap-3 items-center justify-center">
                <Image
                    alt="Movie image"
                    height={150}
                    radius="sm"
                    src={src}
                    width={150}
                />
                <div className="flex flex-col">
                    <p className="text-md">
                        {title}
                        {icon}
                    </p>
                </div>
            </CardHeader>
            <Divider/>
            <CardBody className={"flex items-center justify-center"}>
                <p className={"text-default-500"}>{description} </p>
            </CardBody>
            <Divider/>
            { href && (
                <CardFooter className={"flex items-center justify-center"}>
                    <Link
                    showAnchorIcon
                    href={href}
                    >
                    Learn about
                    </Link>
                </CardFooter>
            )}
        </Card>
    );
}
