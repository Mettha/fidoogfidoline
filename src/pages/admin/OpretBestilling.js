import { useNavigate } from "react-router-dom";
import BookingForm from "../../components/admin/BookingForm";


export default function OpretBestilling() {
    const navigate = useNavigate();

    async function createPost(newPost) {

        const url = "https://fidoshundebiks-default-rtdb.europe-west1.firebasedatabase.app/bestillinger.json";
        const firstResponse = await fetch(url);
        let firstData = await firstResponse.json();

        if (firstData === null) { // If there are NO objects...(hvis data er lig med 0 (=== betyder lig med))
            firstData = [] // Create new array for objects
        }

        firstData.push(newPost); // Add new post to object list

        const response = await fetch(url, {
            method: "PUT", // Overwrites database
            body: JSON.stringify(firstData) // Rewrite database
        });

        const data = await response.json();
        console.log(data);
        navigate("/bestillinger");
    }

    return (
        <section className="page">
         <h1>Opret ny aftale</h1>
             <BookingForm savePost={createPost} />
        </section>
     );
}