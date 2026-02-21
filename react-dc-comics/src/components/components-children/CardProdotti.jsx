
import Prodotti from "./Prodotti.jsx";

export default function  CardProdotti(props) {

  const {fumetto} = props;
    return (
            <section className="row">
            {fumetto.map((comic) => {
                return (
                    <Prodotti 
                    id= {comic.id}
                    series= {comic.series}
                    src= {comic.thumb}
                    alt= {comic.title}/> 
                );
            })}
            </section>
    );
}
