export const footerData = [
  {
    title: "DC COMICS",
    links: [
      { label: "Characters", href: "#" },
      { label: "Comics", href: "#" },
      { label: "Movies", href: "#" },
      { label: "TV", href: "#" },
      { label: "Games", href: "#" },
      { label: "Videos", href: "#" },
      { label: "News", href: "#" },
    ],
  },
  {
    title: "SHOP",
    links: [
      { label: "Shop DC", href: "#" },
      { label: "Shop DC Collectibles", href: "#" },
    ],
  },
  {
    title: "DC",
    links: [
      { label: "Terms Of Use", href: "#" },
      { label: "Privacy Policy (New)", href: "#" },
      { label: "Ad Choices", href: "#" },
      { label: "Advertising", href: "#" },
      { label: "Jobs", href: "#" },
      { label: "Subscriptions", href: "#" },
      { label: "Talent Workshops", href: "#" },
      { label: "CPSC Certificates", href: "#" },
      { label: "Ratings", href: "#" },
      { label: "Shop Help", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "SITES",
    links: [
      { label: "DC", href: "#" },
      { label: "MAD Magazine", href: "#" },
      { label: "DC Kids", href: "#" },
      { label: "DC Universe", href: "#" },
      { label: "DC Power Visa", href: "#" },
    ],
  },
];

export default function FooterLink() {
  return (
    <section className="pt-5 pb-5 ">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {footerData
              .filter(
                section => section.title === "DC COMICS" || section.title === "SHOP"
              )
              .map((section, index) => (
                <ul className="list-unstyled mb-3" key={index}>
                  <li className="fw-bold text-white fs-6 mb-2">{section.title}</li>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-secondary text-decoration-none"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
          </div>

          <div className="col-md-3">
            {footerData
              .filter(section => section.title === "DC")
              .map((section, index) => (
                <ul className="list-unstyled mb-3" key={index}>
                  <li className="fw-bold text-white fs-6 mb-2">{section.title}</li>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-secondary text-decoration-none"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
          </div>

          <div className="col-md-3">
            {footerData
              .filter(section => section.title === "SITES")
              .map((section, index) => (
                <ul className="list-unstyled mb-3" key={index}>
                  <li className="fw-bold text-white fs-6 mb-2">{section.title}</li>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-secondary text-decoration-none"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

