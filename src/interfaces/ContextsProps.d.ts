import { ReactNode } from "react";

export interface ContextsProps {
    children: ReactNode;
}

export interface RoutesContextValues {
    handleNatigation: void;
    redirect: JSX.Element | undefined;
    history: History;
}