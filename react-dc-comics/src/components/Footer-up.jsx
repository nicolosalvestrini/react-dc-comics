import digital from "../assets/img/buy-comics-digital-comics.png";
import merchandaise from "../assets/img/buy-comics-merchandise.png";
import locator from "../assets/img/buy-comics-shop-locator.png";
import subscriptions from "../assets/img/buy-comics-subscriptions.png";
import visa from "../assets/img/buy-dc-power-visa.svg";
export default function FooterUp() {
  return (
    <footer className="bg-primary">
      <div className="container py-3">
        <section className="row d-flex justify-content-between align-items-center">
          <a
            href="#"
            className="col-2 text-white text-decoration-none d-flex align-items-center"
          >
            <img
              src={digital}
              alt="buy-comics-digital-comics"
              className="dimension pe-2"
            />
            DIGITAL COMICS
          </a>

          <a
            href="#"
            className="col-2 text-white text-decoration-none d-flex align-items-center "
          >
            <img
              src={merchandaise}
              alt="buy-comics-merchandise"
              className="dimension pe-2"
            />
            MERCHANDISE
          </a>

          <a
            href="#"
            className="col-2 text-white text-decoration-none d-flex align-items-center"
          >
            <img src={locator} alt="buy-comics-shop-locator" className="dimension pe-2" />
            SHOP LOCATOR
          </a>

          <a
            href="#"
            className="col-2 text-white text-decoration-none d-flex align-items-center"
          >
            <img
              src={subscriptions}
              alt="buy-comics-subscriptions"
              className="dimension pe-2"
            />
            SUBSCRIPTIONS
          </a>

          <a
            href="#"
            className="col-2 text-white text-decoration-none d-flex align-items-center"
          >
            <img src={visa} alt="buy-dc-power-visa" className="dimension pe-2" />
            DC POWER VISA
          </a>
        </section>
      </div>
    </footer>
  );
}
