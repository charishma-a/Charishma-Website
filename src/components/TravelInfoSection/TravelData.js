import React from "react";
import "./TravelInfoElements.css";
import TravelInfoSection from './index'
import t1 from '../../images/t1.jpg'
import t2 from '../../images/t2.jpg'
import t3 from '../../images/t3.jpg'
import t4 from '../../images/t4.jpg'
import t6 from '../../images/t6.jpg'
import t7 from '../../images/t7.jpg'
import t8 from '../../images/t8.jpg'
import t9 from '../../images/t9.jpg'
import me from '../../images/me.jpg'
import t10 from '../../images/t10.jpg'
import london from '../../images/london.jpg'
import mon from '../../images/montreal.jpg'
function FullDetails() {
  return (
    <div className="fullDetails">
      <h1>Check Out These Awesome Destinations</h1>
      
      <div className="details-container">
        <div className="details-wrapper">
          <ul className="Data">
            <TravelInfoSection
              name="Alberta"
              src={t1}
              text="Alberta, British Columbia, Canada"
              label="Explore"
              path="/services"
            />
           
          </ul>
          <ul className="Data">
            <TravelInfoSection
              name="Khumjung, Nepal"
              src={t3}
              text="Europe"
              label="Explore"
              path="/tours"
            />
            <TravelInfoSection
              name="Lenvik, Norway"
              src={t4}
              text="Peggys Cove, Nova Scotia, Canada"
              label="Explore"
              path="/services"
            />
            <TravelInfoSection
              name="Levanto, Italy"
              src={t2}
              text="Europe"
              label="Explore"
              path="/services"
            />
          </ul>
          <ul className="Data">
          <TravelInfoSection
              name="pamukkale turkey"
              src={t9}
              text="Eiffel Tower, Paris"
              label="Explore"
              path="/tours"
            />
             <TravelInfoSection
              name="pamukkale turkey"
              src={me}
              text="Cape Breton, Nova Scotia, Canada"
              label="Explore"
              path="/tours"
            />
          </ul>
          <ul className="Data">
          <TravelInfoSection
              name="pamukkale turkey"
              src={t7}
              text="Alberta"
              label="Explore"
              path="/tours"
            />
             <TravelInfoSection
              name="pamukkale turkey"
              src={t8}
              text="Statue of Liberty, San Francisco, USA"
              label="Explore"
              path="/tours"
            />
             <TravelInfoSection
              name="pamukkale turkey"
              src={t10}
              text="Light House, Nova Scotia, Canada"
              label="Explore"
              path="/tours"
            />
          </ul>
          <ul className="Data">
          <TravelInfoSection
              name="pamukkale turkey"
              src={london}
              text="London Bridge, UK"
              label="Explore"
              path="/tours"
            />
            <TravelInfoSection
              name="pamukkale turkey"
              src={mon}
              text="Montreal, Canada"
              label="Explore"
              path="/tours"
            />
            
          </ul>
          <ul className="Data">
          <TravelInfoSection
              name="pamukkale turkey"
              src={t6}
              text="Niagara Falls, Ontario, Canada"
              label="Explore"
              path="/tours"
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default FullDetails;
