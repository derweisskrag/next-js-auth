import {IconType} from "react-icons";
import React from "react";

export type NavProps = {
    title: string;
    href?: string | URL;
    icon?: React.ReactElement<IconType>;
};