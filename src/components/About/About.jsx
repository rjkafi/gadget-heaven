import React, { useEffect } from "react";

const About = () => {
    useEffect(()=>{
        document.title='Abouts || Gadget_Heaven '
       },[])
  return (
    <section className="bg-gray-200">
     <div className="container mx-auto py-12 text-center">
     <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg">
        Welcome to Gadget_Heaven! We provide the best products for your needs.
        Our goal is to deliver high-quality items with excellent customer service.
        Thank you for shopping with us!
      </p>
     </div>
    </section>
  );
};

export default About;
