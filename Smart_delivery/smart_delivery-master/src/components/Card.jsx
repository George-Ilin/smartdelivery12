import { Link } from "react-router-dom";

function Card({
  car: { img, anul, motor, cutie_viteza, categorie, marca, id, pret },
}) {
  return (
    <div className="card">
      <div className="container-card">
        <div className="card-title">
          <h2>{marca}</h2>
        </div>
        <div className="car-img">
          <Link to={`/car-page/${id}`}>
            <img className="image" src={img} alt="masina" />
          </Link>
        </div>
        <div className="buttons">
          {" "}
          <Link className="text-base details" to={`/car-page/${id}`}>
            Detalii
          </Link>
          <Link className="text-base reserve" to={`/car-page/${id}`}>
            Rezerva
          </Link>
        </div>
      </div>
      <div className="specifications">
        <h3>{pret}</h3>
        <div className="price-container">
          <table className="table">
            <tr>
              <img
                src="https://www.atvrom.ro/storage/flashSale/Categorie-Permis_SJQ4D_1664445462.webp"
                alt=""
                title="Categorie Permis"
              />

              <td> &nbsp;&nbsp;&nbsp;</td>
              <td>{categorie}</td>
            </tr>
            <tr>
              <img
                src="https://www.atvrom.ro/storage/flashSale/motor_ewrHc_1664443545.webp"
                alt=""
                title="Motor"
              />

              <td></td>
              <td>{motor}</td>
            </tr>
            <tr>
              <img
                src="https://www.atvrom.ro/storage/flashSale/Cutie-de-viteze_rNdGq_1664443687.webp"
                alt=""
                title="Transmisie"
              />

              <td></td>
              <td>{cutie_viteza}</td>
            </tr>
            <tr>
              <img
                src="https://www.atvrom.ro/storage/flashSale/an_2a05P_1664444303.webp"
                alt=""
                title="An fabricatie"
              />

              <td></td>
              <td>{anul}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Card;
