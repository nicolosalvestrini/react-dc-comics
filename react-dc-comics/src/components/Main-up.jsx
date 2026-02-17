import jumbotron from "../assets/img/jumbotron.jpg";
import FumettiCards from "../components/components-children/Fumetti.jsx";
export default function MainUp() {
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
      <FumettiCards />
      <button className="button d-block mx-auto">
        LOAD MORE
      </button>
      </div>
    </main>
  );
}
