import { Link } from "react-router-dom";

function Success() {
  return (
    <div>
      <div>
        <Link className="back_btn" to="/scooters">
          Back
        </Link>
      </div>
      <div>
        <h3>Formularul a fost trimis cu success</h3>
        <p>Test</p>
      </div>
    </div>
  );
}

export default Success;
