import React, { useEffect, useState } from "react";
import Bestillingskort from "../components/Bestillingskort";

export default function Booking () {
    const [posts, setPosts] = useState([]);
    const [isPosts, setIsPosts] = useState(true);

    useEffect(() => {
        async function getPosts(){
            const url="https://fidoshundebiks-default-rtdb.europe-west1.firebasedatabase.app/bestillinger.json";
           
           // Vent indtil response modtager positivt svar fra firebase
            const response = await fetch(url);
            // læg json data (listen af produkter) over i variablen "data"
            const data = await response.json();

            if (data!==null){
                const postsArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                    }));
                    setPosts(postsArray);
                    } else {
                    setIsPosts(false);
                    }
                    }
                    getPosts();
                    }, []);

    return(
        <main>
            {isPosts?(
                <div className="kortraekke">
                    {posts.map((post)=> (
                    <Bestillingskort key={post.id} post={post}/>
                    ))}
                </div>
            ):(
                <p>Ingen bestillinger at vise</p>
            )}
        </main>
    )
}
