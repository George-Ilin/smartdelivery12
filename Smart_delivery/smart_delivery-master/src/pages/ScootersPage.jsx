import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PricingSection from "../components/PricingSection";

function ScooterPage() {
  const [scooter, setScooter] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getInformation() {
      try {
        const res = await axios.get(
          `http://localhost:8000/scooter/${params.id}`
        );

        return setScooter(res.data);
      } catch (error) {
        toast.error("Datele nu au putut fi preluate");
      }
    }

    getInformation();
  }, [params.id]);

  if (!scooter) {
    return <div>No scooter.</div>;
  }

  const {
    id,
    img,
    marca,
    motor,
    anul,
    locuri,
    timp_incarcare,
    viteza,
    sarcina,
    greutate,
    autonomie,
    baterie,
    culoare,
    pret1,
    pret2,
    pret3,
    pret4,
  } = scooter;

  return (
    <div className="info-car">
      <div>
        <Link className="back_btn" to="/scooters">
          <img src="https://www.atvrom.ro/storage/backend/campaigns/back-to-site-icon_nZp7y_1686588133.webp" />{" "}
          Back
        </Link>
      </div>
      <div>
        <h2>{marca}</h2>
        <div className="details_container">
          <div className="img_car">
            <img className="picture" src={img} alt="masina" id={id} />
          </div>
          <div className="info-details">
            <p className="item_details">Motor: {motor}</p>
            <p className="item_details">Timp incarcare: {timp_incarcare}</p>
            <p className="item_details">Locuri: {locuri}</p>
            <p className="item_details">Viteza max: {viteza}</p>
            <p className="item_details">Anul: {anul}</p>
          </div>
          <div className="info-details">
            <p className="item_details">Sarcina: {sarcina}</p>
            <p className="item_details">Greutate: {greutate}</p>
            <p className="item_details">Baterie: {baterie}</p>
            <p className="item_details">Culoare: {culoare}</p>
            <p className="item_details">Autonomie: {autonomie}</p>
          </div>
        </div>
      </div>
      {/* Tabel */}
      <div className="service_container">
        <div className="pricing-section">
          <p>*Tarifele includ T.V.A.</p>
          <table className="price-table">
            <thead>
              <tr>
                <th>1-7 zile</th>
                <th>7-14 zile</th>
                <th>14-21 zile</th>
                <th> +21 zile</th>
                <th>Garantia blocată</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pret1} €/zi</td>
                <td>{pret2} €/zi</td>
                <td>{pret3} €/zi</td>
                <td>{pret4} €/zi</td>
                <td>200 €</td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={() => {
              setActiv(true);
            }}
            className="reserve-button"
          >
            Rezervare
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScooterPage;
