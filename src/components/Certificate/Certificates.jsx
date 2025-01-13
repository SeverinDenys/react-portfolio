import React from "react";
import { certificatesData } from "../../../certificates";

const Certificates = () => {
  return (
    <section className="certificates">
      <h2>Certificates</h2>
      {certificatesData.map((certificate, index) => (
        <div className="certificates-holder" key={index}>
          <h4>{certificate.certificateName}</h4>
          <a href={certificate.URL} target="_blank">
            <span> View Certificate 📜 </span>
          </a>
        </div>
      ))}
    </section>
  );
};

export default Certificates;
