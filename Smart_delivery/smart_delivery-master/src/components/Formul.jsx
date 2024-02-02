import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Formular({ setActiv }) {
  const params = useParams();
  const [on, setOn] = useState(false);
  return (
    <div>
      <div className="background-form"></div>{" "}
      <form className="form">
        {on === true ? (
          <div>
            <h1>Formularul tau a fost trimis success</h1>
            <p>Pentru mai multe detalii sunati la 0761 111 111</p>
            <Link onClick={() => setActiv(false)}>Close</Link>
          </div>
        ) : (
          <div>
            <div className="input-prel">
              <input className="text-i" type="text" />
              <div className="input-prel2">
                <input type="date" />
                <input type="time" />
              </div>
            </div>
            <div className="input-pred">
              <input type="date" />
              <input type="time" />
            </div>
            <Link onClick={() => setOn(true)}>Rezerva</Link>
          </div>
        )}
      </form>
    </div>
  );
}

export default Formular;
