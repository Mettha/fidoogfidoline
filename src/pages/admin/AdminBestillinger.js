import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bestillingskort from "../../components/admin/BestillingsAdminKort";

export default function AdminBestillinger() {
    const [posts, setPosts] = useState([]);
    const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
    const navigate = useNavigate();

    useEffect(() => {
        async function getPosts() {
        const url = "https://fidoshundebiks-default-rtdb.europe-west1.firebasedatabase.app/bestillinger.json";
        const response = await fetch(url);
        // data indeholder alt indhold fra produkt database
        const data = await response.json();

        if (data !== null) {
            const postsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
            }));
                //variabel "posts" bliver lig med listen af produkter
                setPosts(postsArray);
            } else {
                // sætter variablen "isPosts" til false, for der er ingen produkter
                setIsPosts(false);
        }
        }
        getPosts();
        }, []);

// Event handler for klik på opret knap
function opretklik() {
    navigate("/opretaftale");
    }
    return (
        <main>
            <h1> 
            Administration af bestillinger <button type="button" onClick={opretklik}>+ Opret Aftale</button>
            </h1>
    
        {isPosts ? (
            <div className="kortraekke">
                {posts.map((post) => (
                <Bestillingskort key={post.id} post={post} />
                 ))}
            </div>
            ):(
            <p>Ingenting at vise</p>
            )}
        </main>
        );
        }
    