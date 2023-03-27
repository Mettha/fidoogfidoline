
import React, { useEffect, useState } from "react";
import Produktkort from "../components/Produktkort";
import hundmedsne from "../images/snowman-1280.jpg";
import animlogo from "../animations/wavelogo.json";
import Lottie from "lottie-react";


// posts kommer til at indeholde listen af hundeplejeprodukter
export default function Forside() {
    const [posts, setPosts] = useState([]);
    const [isPosts, setIsPosts] = useState(true);
    // isPost kan være enten "true" (hvis der er produkter) eller
    // "false" hvis ingen produkter er der.

    // Data hentes fra firebase og gemmes i "post" variabel
    useEffect(() => {
        async function getPosts(){
            const url="https://fidoshundebiks-default-rtdb.europe-west1.firebasedatabase.app/produkter.json";
           
           // Vent indtil response modtager positivt svar fra firebase
            const response = await fetch(url);
            // læg json data (listen af produkter) over i variablen "data"
            const data = await response.json();

            // tjek om der faktisk er produkter på listen (positiv hvis forskellig fra null (!== betyder forskellig fra))
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
           <div id="lottie">
        <Lottie animationData={animlogo} loop={false} style={{
            top: "200px",
            left: "575px",
            position: "fixed",
            }}/>
            </div>


            <div className="forsidebillede">
                <img src={hundmedsne} alt="billed med hund og sne" className="herobillede"/>
            </div>
            
            {isPosts?(
                <div className="kortraekke">
                    {posts.map((post)=> (
                        <Produktkort key={post.id} post={post}/>
                     ))}
                </div>
            ):(
                <p>Ingen produkter at vise</p>
            )}
        </main>
    )
}
// kommentar til linje 50 (isPost?) til ( )} )58 
// hvis der er produkter at vise (isPosts = true), så går programmet i løkke
// (posts.map) - hvor hvert element (post) på listen (posts), vis produktkort for produktet.