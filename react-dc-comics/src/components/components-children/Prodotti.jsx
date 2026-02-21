export default function Prodotti(props) {
  const { id, alt, series, src } = props;

  return (
    <>
      <div key={id} className="col-2">
        <img
          src={src}
          alt={alt}
          className="card-img-top cover-img"
        />
        <div className="">
          <h5 className="text-white">{series}</h5>
        </div>
      </div>
    </>
  );
}
