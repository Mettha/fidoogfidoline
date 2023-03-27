import { useNavigate } from "react-router-dom";

export default function ProduktAdminkort({post}){
    const navigate = useNavigate();

    // når bruger klikker på produktkort dirigeres bruger til formularside.
    function opdaterKlik(){
        navigate(`posts/${post.id}`);
    }
    //post.id er kortets unikke placering i produktlisten (placering/ index i arrayet)
    
// opdaterKlik = EventHandler
// onClick = EventListner
    return (
        <div className="kort adminkort" onClick={opdaterKlik}>
            <div className="tekst">
                <h3>{post.produktnavn}</h3>
                <p>{post.beskrivelse}</p>
                <hr/>
                <p>Varighed: {post.varighed} min.</p>
                <p>Pris kr. {post.pris}</p>
            </div>
        </div>
    );
}