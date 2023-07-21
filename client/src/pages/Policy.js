import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Ecommerce app - Policy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/privacypolicy.png"
            alt="privacypolicy"
            style={{ width: "52%", margin: "0px 0px 0px 178px" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">
            Privacy policies
          </h1>
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

export default Policy;
