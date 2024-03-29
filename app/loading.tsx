import {Spinner} from "@nextui-org/react";

export default function Loading(){
    return (
        <div className={"flex items-center justify-center"}>
            <h1>Loading...</h1>
            <Spinner />
        </div>
    );
}