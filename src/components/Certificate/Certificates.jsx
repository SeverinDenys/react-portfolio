import React from "react";
import { certificatesData } from "../../../certificates";

const Certificates = () => {
  return (
    <section className="certificates" id="certificates">
      <h2>Certificates</h2>
      {certificatesData.map((certificate, index) => (
        <div className="certificates-holder" key={index}>
          <h4>"{certificate.certificateName}"</h4>
          <a
            href={certificate.URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              View Certificate
              {certificate.icon && (
                <img
                  src={certificate.icon}
                  alt={`${certificate.certificateName} icon`}
                  // style={{ width: "20px", marginLeft: "8px" }}
                />
              )}
            </span>
          </a>
        </div>
      ))}
    </section>
  );
};

export default Certificates;
