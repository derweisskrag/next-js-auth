import {IconType} from "react-icons";
import React from "react";
import {ImageProps} from "@nextui-org/image";

export type NavProps = {
    title: string;
    href?: string | URL;
    icon?: React.ReactElement<IconType>;
    src?: string;
};