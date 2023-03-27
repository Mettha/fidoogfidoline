

// post = forsiden henter oplysninger fra firebase database
// post. referere til oplysninger i Firebase JSON - fx. post.pris = element i json.
export default function Produktkort({post}) {
   return (
       <div className="kort">
           <div className="tekst">
               <h3>{post.produktnavn}</h3>
               <p>{post.beskrivelse}</p>
               <hr/>
               <p>Varighed: {post.varighed} min.</p>
               <p>Pris kr. {post.pris}</p>
              
           </div>
       </div>
   ) 
}