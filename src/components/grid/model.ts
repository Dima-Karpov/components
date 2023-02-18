import {ReactNode} from "react";

export interface IGridContainer {
    children: ReactNode;
    columns?: string;
    gap?: string;
}