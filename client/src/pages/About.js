import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"Ecommerce app - About us"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/Aboutus.jpg"
            alt="contact us "
            style={{ width: "92%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">About Us</h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            quis sequi. Iusto impedit doloribus harum non modi, ea ex autem.
          </p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            quis sequi. Iusto impedit doloribus harum non modi, ea ex autem.
          </p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            quis sequi. Iusto impedit doloribus harum non modi, ea ex autem.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
