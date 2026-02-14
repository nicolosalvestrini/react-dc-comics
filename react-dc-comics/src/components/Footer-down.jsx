import facebook from "../assets/img/footer-facebook.png";
import twitter from "../assets/img/footer-twitter.png";
import youtube from "../assets/img/footer-youtube.png";
import pinterest from "../assets/img/footer-pinterest.png";
import periscope from "../assets/img/footer-periscope.png";
export default function FooterDown() {
    return(
    <footer className="bg-dark">
        <div className="container pt-4 pb-4 d-flex justify-content-between align-items-center">
            <section>
                <button className="btn border-primary text-white">SIGN-UP NOW!</button>
            </section>
            <section className="text-primary">
                <ul className="list-unstyled d-flex align-items-center mb-0">
                    <li className="fw-bold text-primary fs-6">FOLLOW US</li>
                    <li><a href="" className="text-decoration-none"><img src={facebook} alt="logo-facebook" className="image-dimension"/></a></li>
                    <li><a href="" className="text-decoration-none"><img src={twitter} alt="logo-twitter" className="image-dimension"/></a></li>
                    <li><a href="" className="text-decoration-none"><img src={youtube} alt="logo-youtube" className="image-dimension"/></a></li>
                    <li><a href="" className="text-decoration-none"><img src={pinterest} alt="logo-pinterest" className="image-dimension"/></a></li>
                    <li><a href="" className="text-decoration-none"><img src={periscope} alt="logo-periscope" className="image-dimension" /></a></li>
                </ul>
            </section>
        </div>
    </footer>
    )
    
}