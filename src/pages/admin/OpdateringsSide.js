import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostForm from "../../components/admin/PostForm";

export default function OpdateringsSide() {

  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const params = useParams();

  const url = `https://fidoshundebiks-default-rtdb.europe-west1.firebasedatabase.app/produkter/${params.postId}.json`;
  //${params.postID} udpeger et specifik produkt/data på listen
  // ${params.postID} er lig med det produkt-liste-id/index som brugeren klikkede på for at opdatere det.

// finder data om det produkt som brugeren klikkede på.
useEffect(() => {
  async function getPost() {
    const response = await fetch(url);
    const data = await response.json();
    // post variablen indeholder oplysninger om det valgte produkt
      setPost(data);
    }
    getPost();
  }, [url]);

  // function gemmer ændrede oplysninger
  async function savePost(postToUpdate) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(postToUpdate)
    });
    const data = await response.json();
    console.log(data);
    // Efter gem produkt sendes brugeren til /admin -> AdminSide
    navigate("/admin");
  }

  // function sletter produkt
  async function deletePost() {
    const bekraeftSletning = window.confirm(`Vil du slette produktet "${post.produktnavn}"?`)
   
// Klikker brugeren ok til bekræft sletning, slettes produkter.    
if (bekraeftSletning) {
    const url = "https://fidoshundebiks-default-rtdb.europe-west1.firebasedatabase.app/produkter.json";
    const firstResponse = await fetch(url);
    const firstData = await firstResponse.json();

    firstData.splice(params.postId, 1); // Delete element from array
       
    const response = await fetch(url, {
        method: "PUT", // Overwrites database
        body: JSON.stringify(firstData) // Rewrite database
    });

    const data = await response.json();
    console.log(data);
    // efter sletning går browseren til /admin -> AdminSide
    navigate("/admin");
    }
  }

return (
    <section className="page">
      <h1>Opdatér produkt</h1>
      <PostForm post={post} savePost={savePost}/>
      <button className="btn-delete" onClick={deletePost}>Slet produkt</button>
    </section>
);
}
//formularen præsenteres for brugeren i componenten PostForm