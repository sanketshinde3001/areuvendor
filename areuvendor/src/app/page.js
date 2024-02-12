// pages/index.js

import React from 'react';
import Section2 from '../components/Section2';



const Home = () => {
  
  return (
    <>
      <Section2
      borderColor="purple-700"
      imageSrc="https://pros.weddingpro.com/wp-content/uploads/2023/10/Iris-Mannings-Photography-Ikem-and-Shae-Vendor-With-Couple-Venue-Yours-Truly-165-1.png?w=1024"
      topTag="35M Couples love us!"
      title="Boost your business’ credibility"
      description="Build your reputation by investing in wedding advertising on The Knot and WeddingWire, two of the most trusted wedding marketplaces hosting more than 9 million couple reviews."
      buttonText="Gain your Couple's trust"
      marginTop={10}
    />
       <Section2
      borderColor="purple-700"
      imageSrc="https://pros.weddingpro.com/wp-content/uploads/2023/10/6_HP_Monitor-growth.png"
      topTag=""
      title="Monitor your business growth and advertising with ease&nbsp;"
      description="Our robust Insights tool measures your performance from every interaction to make it easy for you to view, track and understand the ROI of partnering with us."
      buttonText="Understand your ROI"
      marginTop={10}
    />
  
    </>
  );
}

export default Home;
