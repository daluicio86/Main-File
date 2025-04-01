"use client";
import React from "react";
import ContactFormV2 from "../form/ContactFormV2";
import LocationMaps from "../utilities/LocationMaps";
import ContactFormV3 from "../form/ContactFormV3";

const ContactContentV1 = () => {
  return (
    <>
      <div className="contact-us-area mb-150">
        <div className="container">
          <div className="row mb-150">
            <div className="col-lg-3 col-md-6">
              <div className="contact-single-box">
                <div className="contact-icon">
                  <i class="bi bi-patch-check" />
                </div>
                <div className="contact-content">
                  <h4>Certificaciones</h4>
                  <span>
                    Creación de certificaciones con aliados estratégicos para
                    capacitación y formación profesional
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact-single-box">
                <div className="contact-icon">
                <i class="bi bi-laptop"/>
                </div>
                <div className="contact-content">
                  <h4>Consultorías</h4>
                  <span>
                    Desarrollamos consultorías a la medida de las necesidades de
                    cada empresa{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact-single-box two">
                <div className="contact-icon">
                <i class="bi bi-building"/>
                </div>
                <div className="contact-content">
                  <h4>Programas In-Company</h4>
                  <span>
                    Elaboración de programas In-Company con especialistas en el
                    sector de la capacitación y formación
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact-single-box two">
                <div className="contact-icon">
                <i class="bi bi-journal-text"/>
                </div>
                <div className="contact-content">
                  <h4>Avales Académicos</h4>
                  <span>
                    Otorgamos avales académicos a programas de formación de
                    empresas de capacitación, que estén alineadas con nuestra
                    filosofía
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row contact">
            <div className="contact-box">
              <div className="contact-title">
                <h2>Solicita más información</h2>
              </div>
              <ContactFormV3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContentV1;
