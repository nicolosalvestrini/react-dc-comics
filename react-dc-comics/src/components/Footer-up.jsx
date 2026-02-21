import FooterLink from "/src/components/components-children/FooterLink.jsx";
export default function FooterUp(props) {
  const {navbarItems} = props
  return (
    <footer className="backround logo-bg overflow-hidden">
      <div className="container d-flex justify-content-start position-relative">
        <img src="/dc-logo-bg.png" alt="" className="backround-logo"/>
        <FooterLink />
      </div>
    </footer>
  );
}
