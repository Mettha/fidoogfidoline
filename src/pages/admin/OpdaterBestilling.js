import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookingForm from "../../components/admin/BookingForm";

export default function OpdaterBestilling() {

    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const params = useParams();

    const url = `https://fidoshundebiks-default-rtdb.europe-west1.firebasedatabase.app/bestillinger/${params.postId}.json`;

    useEffect(() => {
        async function getPost() {
          const response = await fetch(url);
          const data = await response.json();
          // post variablen indeholder oplysninger om det valgte produkt
            setPost(data);
          }
          getPost();
        }, [url]);

        async function savePost(postToUpdate) {
            const response = await fetch(url, {
              method: "PUT",
              body: JSON.stringify(postToUpdate)
            });
            const data = await response.json();
            console.log(data);
            // Efter gemt aftale sendes brugeren til /bestillinger -> AdminBestillinger
            navigate("/bestillinger");
          }

        async function deletePost() {
            const bekraeftSletning = window.confirm(`Vil du slette denne aftale "${post.produktnavn}"?`)
           
    if (bekraeftSletning) {
            const url = "https://fidoshundebiks-default-rtdb.europe-west1.firebasedatabase.app/bestillinger.json";
            const firstResponse = await fetch(url);
            const firstData = await firstResponse.json();
            
            firstData.splice(params.postId, 1); // Delete element from array
                   
            const response = await fetch(url, {
                method: "PUT", // Overwrites database
                body: JSON.stringify(firstData) // Rewrite database
            });
            
            const data = await response.json();
            console.log(data);
            // efter sletning går browseren til /bestillinger -> 
            navigate("/bestillinger");
            }
            }

            return (
                <section className="page">
                  <h1>Opdatér aftale</h1>
                  <BookingForm post={post} savePost={savePost}/>
                  <button className="btn-delete" onClick={deletePost}>Slet Aftale</button>
                </section>
            );
            }