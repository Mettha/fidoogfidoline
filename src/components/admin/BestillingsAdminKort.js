import { useNavigate } from "react-router-dom";

export default function BestillingsAdminKort({post}){
    const navigate = useNavigate();

    function opdaterKlik(){
        navigate(`posts/${post.id}`);
    }

    return (
        <div className="kort bestillingskort" onClick={opdaterKlik}>
            <div className="tekst">
                <h3>{post.produktnavn}</h3>
                <hr/>
                <p>Tid: {post.tid}</p>
                <p>Dato {post.dato}</p>
                <p>Email {post.email}</p>
                <p>Mobil {post.mobil}</p>
                <p>Hundenavn {post.hundenavn}</p>
                <p>Hunderace {post.hunderace}</p>
                <p>Navn {post.navn}</p>
                <p>Adresse: {post.adresse}</p>
                <p>Bynavn {post.bynavn}</p>
                <p>Postnr. {post.postnr}</p>
            </div>
        </div>
    );
}
