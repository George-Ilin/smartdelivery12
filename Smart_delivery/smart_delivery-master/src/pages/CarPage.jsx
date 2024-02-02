import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Formular from "../components/Formul";

function CarPage() {
  const [car, setCar] = useState(null);
  const [activ, setActiv] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function getCarInformation() {
      try {
        const res = await axios.get(`http://localhost:8000/cars/${params.id}`);
        return setCar(res.data);
      } catch (error) {
        toast.error("Datele nu au putut fi preluate");
      }
    }

    getCarInformation();
  }, [params.id]);

  if (!car) {
    return <div>No car.</div>;
  }

  const {
    id,
    img,
    marca,
    motor,
    anul,
    norma_poluare,
    combustibil,
    putere,
    stare,
    tip_caroserie,
    cutie_viteza,
    numar_portiere,
    culoare,
    pret1,
    pret2,
    pret3,
    pret4,
  } = car;

  return (
    <div className="info-car">
      <div>
        <Link className="back_btn" to="/cars">
          <img src="https://www.atvrom.ro/storage/backend/campaigns/back-to-site-icon_nZp7y_1686588133.webp" />{" "}
          Back
        </Link>
      </div>

      {activ === true ? <Formular setActiv={setActiv} /> : null}
      <div>
        <div>
          <h2>{marca}</h2>
          <div className="details_container">
            <div className="img_car">
              <img className="picture" src={img} alt="masina" id={id} />
            </div>
            <div className="info-details">
              <p className="item_details">Motorizare: {motor}</p>
              <p className="item_details">Putere: {putere}</p>
              <p className="item_details">Combustibil: {combustibil}</p>
              <p className="item_details">Norma de poluare: {norma_poluare}</p>
              <p className="item_details">Anul: {anul}</p>
            </div>
            <div className="info-details">
              <p className="item_details">Tip Caroserie: {tip_caroserie}</p>
              <p className="item_details">
                Numar de portiere: {numar_portiere}
              </p>
              <p className="item_details">Stare: {stare}</p>
              <p className="item_details">Culoare: {culoare}</p>
              <p className="item_details">Cutie de viteze: {cutie_viteza}</p>
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
    </div>
  );
}

export default CarPage;
