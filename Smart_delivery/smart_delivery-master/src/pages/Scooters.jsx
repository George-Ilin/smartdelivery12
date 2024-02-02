import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Scooter() {
  const [scooter, setScooter] = useState([]);
  const { session } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getScooterInformation() {
      try {
        const res = await axios.get("http://localhost:8000/scooter");
        console.log(res);
        return setScooter(res.data);
      } catch (error) {
        toast.error("Something is wrong");
      }
    }
    if (session) {
      getScooterInformation();
    } else {
      navigate("/sign-in");
    }
  }, [session]);

  return (
    <div className="result-card">
      {scooter.map((item) => {
        return (
          <div key={item.id} className="card">
            <div className="container-card">
              <div className="card-title">
                <h2>{item.marca}</h2>
              </div>
              <div className="sct-img">
                <Link to={`/scooter-page/${item.id}`}>
                  <img className="image" src={item.img} alt="masina" />
                </Link>
              </div>
              <div className="buttons">
                <Link
                  className="text-base details"
                  to={`/scooter-page/${item.id}`}
                >
                  Detalii
                </Link>
                <Link
                  className="text-base reserve"
                  to={`/scooter-page/${item.id}`}
                >
                  Rezerva
                </Link>
              </div>
            </div>
            <div className="specifications">
              <h3>{item.pret}</h3>
              <div className="price-container">
                <table className="table">
                  <tr>
                    <img
                      src="https://www.atvrom.ro/storage/flashSale/Categorie-Permis_SJQ4D_1664445462.webp"
                      alt=""
                      title="Categorie Permis"
                    />

                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td>{item.categorie}</td>
                  </tr>
                  <tr>
                    <img
                      src="https://www.atvrom.ro/storage/flashSale/motor_ewrHc_1664443545.webp"
                      alt=""
                      title="Motor"
                    />

                    <td></td>
                    <td>{item.motor}</td>
                  </tr>
                  <tr>
                    <img
                      src="https://www.atvrom.ro/storage/flashSale/Cutie-de-viteze_rNdGq_1664443687.webp"
                      alt=""
                      title="Transmisie"
                    />

                    <td></td>
                    <td>{item.cutie_viteza}</td>
                  </tr>
                  <tr>
                    <img
                      src="https://www.atvrom.ro/storage/flashSale/an_2a05P_1664444303.webp"
                      alt=""
                      title="An fabricatie"
                    />

                    <td></td>
                    <td>{item.anul}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Scooter;
