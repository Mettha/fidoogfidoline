export default function Bestillingskort({post}) {
    return (
        <div className="kort">
            <div className="tekst">
                <h3>{post.produktnavn}</h3>
                <p>{post.beskrivelse}</p>
                <hr/>
                <p>Produkt{post.produkt}</p>
                <p>Tid: {post.tid}</p>
                <p>Dato {post.dato}</p>
                <p>Email {post.email}</p>
                <p>Mobil {post.mobil}</p>
                <p>Hundenavn {post.hundenavn}</p>
                <p>Hunderace {post.hunderace}</p>
                <p>Navn {post.navn}</p>
                <p>Adresse: {post.adresse}</p>
                <p>Bynavn {post.nynavn}</p>
                <p>Postnr. {post.postnr}</p>
            </div>
        </div>
    ) 
 }