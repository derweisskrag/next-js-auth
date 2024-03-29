import type {IconType} from "react-icons";
import React from "react";

export interface ICard{
    title: string;
    src: string;
    description?: string;
    icon?: React.ReactElement<IconType>;
    href?: string;
}