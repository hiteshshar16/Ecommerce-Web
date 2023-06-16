import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"Ecommerce app - About us"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img src="/images/Aboutus.jpg" alt="contact us " style={{width:"92%"}} />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste doloribus maiores, natus, deleniti nisi asperiores eum eligendi sunt atque, vitae quas itaque dolorem magnam debitis consequuntur obcaecati esse cupiditate quis!
          </p>
        </div>
      </div>
    </Layout>
  )
}



export default About