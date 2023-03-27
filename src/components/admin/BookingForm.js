import { useEffect, useState } from "react";

export default function BookingForm({ savePost, post }){
    const [produktnavn, setProduktnavn] = useState("");
    const [tid, setTid] = useState("");
    const [dato, setDato] = useState("");
    const [email, setEmail] = useState("");
    const [mobil, setMobil] = useState(0);
    const [hundenavn, setHundenavn] = useState("");
    const [hunderace, setHunderace] = useState("");
    const [navn, setNavn] = useState("");
    const [adresse, setAdresse] = useState("");
    const [bynavn, setBynavn] = useState("");
    const [postnr, setPostnr] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

useEffect(() => {
    if (post) {
        setProduktnavn(post.produktnavn);
        setTid(post.tid);
        setDato(post.dato);
        setEmail(post.email);
        setMobil(post.mobil);
        setHundenavn(post.hundenavn);
        setHunderace(post.hunderace)
        setNavn(post.navn)
        setAdresse(post.adresse)
        setBynavn(post.bynavn)
        setPostnr(post.postnr)
        }
        }, [post]); 

async function handleSubmit(e) {
    e.preventDefault();
    // Der oprettes et objekt "formData" med de oplysninger som blev indtastet i formularen.
    const formData = {
        produktnavn: produktnavn,
        tid: tid,
        dato: dato,
        email: email,
        mobil: parseFloat(mobil),
        hundenavn: hundenavn,
        hunderace: hunderace,
        navn: navn,
        adresse: adresse,
        bynavn: bynavn,
        postnr: parseInt(postnr)
        }

    const validForm = formData.produktnavn && formData.tid && formData.dato && formData.email && 
    formData.mobil && formData.hundenavn && formData.hunderace && formData.navn && formData.adresse && 
    formData.bynavn && formData.postnr;
     if (validForm) {
        savePost(formData);
    } else {
        setErrorMessage("Udfyld venligst alle felter.");
    }
    }

return (
    <form className="formularlayout" onSubmit={handleSubmit} >

<label>
    Produktnavn<input type="text" name="produktnavn" value={produktnavn} 
    placeholder="Indtast produktnavn" onChange={e => setProduktnavn(e.target.value)} />
</label>

<label>
    Tid<input type="text" name="tid" value={tid} placeholder="Indtast
    tid" onChange={e => setTid(e.target.value)} />
</label>

<label>
    Dato<input type="text" name="dato" value={dato} placeholder="Indtast dato" onChange={e =>
    setDato(e.target.value)} />
</label>

<label>
    Email<input type="text" name="email" value={email} placeholder="Indtast
    email" onChange={e => setEmail(e.target.value)} />
</label>

<label>
    Mobil<input type="text" name="mobil" value={mobil} placeholder="Indtast
    mobil" onChange={e => setMobil(e.target.value)} />
</label>

<label>
    Hundenavn<input type="text" name="hundenavn" value={hundenavn} placeholder="Indtast
    hundenavn" onChange={e => setHundenavn(e.target.value)} />
</label>

<label>
    Hunderace<input type="text" name="hunderace" value={hunderace} placeholder="Indtast
    hunderace" onChange={e => setHunderace(e.target.value)} />
</label>

<label>
    Navn<input type="text" name="navn" value={navn} placeholder="Indtast
    navn" onChange={e => setNavn(e.target.value)} />
</label>

<label>
    Adresse<input type="text" name="adresse" value={adresse} placeholder="Indtast
    adresse" onChange={e => setAdresse(e.target.value)} />
</label>

<label>
    Bynavn<input type="text" name="bynavn" value={bynavn} placeholder="Indtast
    bynavn" onChange={e => setBynavn(e.target.value)} />
</label>

<label>
    Postnr.<input type="text" name="postnr" value={postnr} placeholder="Indtast
    postnr" onChange={e => setPostnr(e.target.value)} />
</label>

<p className="tekst-fejl">{errorMessage}</p><button type="submit">Gem Aftale</button>
</form>
);
}  
    