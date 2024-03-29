import MyCard from "@/components/ui/Card";
import {AboutData} from "@/lib/AboutData";
export default function About(){
    return (
        <main>
            <div className={"m-10 p-5 grid gap-5 place-items-center justify-center grid-cols-1 md:grid-cols-3 md:grid-rows-2"}>
                {AboutData.map((about, index) => (
                    <div className={"md:row-span-2 md:z-10"} key={index}>
                    <MyCard
                        title={about.title}
                        src={about.src}
                        description={about.description}
                        icon={about.icon}
                        key={index}
                    /></div>
                ))}
            </div>
        </main>
    );
}