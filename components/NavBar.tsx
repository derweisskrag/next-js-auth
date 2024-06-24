import {getServerSession, Session} from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options";
import Nav from "@/components/ui/Nav";

/**
 * This component wraps the UI component to pass server side props
 * down to the UI components.
 * Read: https://nextjs.org/docs/app/building-your-application/rendering/server-components
 *
 * @return {JSX.Element} Nav with the user or empty user to render the
 * React component conditionally in the app.
 */

export default async function NavBar(){
    const session = await getServerSession(options);

    return (
        <div>
            {!session?.user ? (<Nav user={{name:"", "email": "", "image": ""}} />) : (
                <Nav user={session?.user} expires={session?.expires}/>
            )}
        </div>
    );
}