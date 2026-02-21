import jumbotron from "../assets/img/jumbotron.jpg";
import CardProdotti from "../components/components-children/CardProdotti.jsx";
export default function MainUp(props) {
  const {cardComics} = props
  return (
    <main className="bg-dark">
        <img
          src={jumbotron}
          alt="jumbotron of superheros"
          className="height-img"
        />
      <div className="position-relative container">
        <h3 className="badge-title">CURRENT SERIES</h3>
      </div>
      <div className="container py-5">
      <CardProdotti 
      fumetto = {cardComics} />
      <button className="button d-block mx-auto">
        LOAD MORE
      </button>
      </div>
    </main>
  );
}
