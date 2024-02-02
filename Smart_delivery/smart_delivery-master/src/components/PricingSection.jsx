import React from "react";
import "../App.css";

const PricingSection = () => {
  return (
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
      <button className="reserve-button">Rezervare</button>
    </div>
  );
};

export default PricingSection;
