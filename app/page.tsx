

// import Best Movie Card
import BestMovie from "../components/ui/BestMovie";
import MovieGrid from "@/components/ui/MovieGrid";

export default function Home() {
  return (
    <main className={"w-full"}>
        <div className={"m-auto w-max-2xl my-[200px]"}>
            <BestMovie/>
        </div>
        <MovieGrid />
    </main>
  );
}
