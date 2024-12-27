import React from "react";
import Vision from "./Vision";
import Approch from "./Approch";

const AboutUs = () => {
  return (
    <div className="container pt-24">
      <div>
        <h1 className="font-bold text-4xl text-center">
          Tentang <span className="text-primary">Kami</span>
        </h1>
      </div>

      <section className="my-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Visi Kami</h2>
        <Vision />
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Pendekatan Kami
        </h2>
        <Approch />
      </section>
    </div>
  );
};

export default AboutUs;
