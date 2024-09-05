import { Link } from "react-router-dom";
import React , {useState} from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../index.css";

function Services (){
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div>
            <Header/>
            <br/>
            <div className="p-5 ">
        <h1 className="text-[#252B61] text-3xl font-bold pl-[25px]">
          Our features and services
        </h1>
        <h5 className="text-[#5b5b7e] text-xl font-bold pl-[25px]">
          Explore our services
        </h5>

        <div className=" flex flex-row gap-2 p-[25px] text-[#252b61]  ">
          <div className=" relative w-1/3 h- bg-[#A3DAC2] rounded lg p-5" style={{ animation: "slide-in-left 1s ease-out forwards" }}
              onLoad={() => setIsLoaded(true)} >
            <h3 className="font-bold text-3xl">
              Therapy & Report generation 
            </h3>
            <br></br>
            <p className="italic">Specializing in issues detected through EEG scans, CareMate provides support for those with negative EEG waves, offering alternative treatments, therapies, and lifestyle changes to improve brain health. In addition to suggesting the best medical alternatives, CareMate generates personalized reports based on your EEG results, helping you understand your condition better. With its focus on neurotherapy, CareMate ensures you receive accurate, timely advice and seamless follow-up care, making your health journey easier to manage.</p>
            <p className="italic">In addition to personalized treatment plans, CareMate focuses on neurotherapy to provide accurate and timely advice. The service includes seamless follow-up care, ensuring that you stay informed about your health and receive ongoing support. CareMate aims to make your health journey more manageable by integrating advanced data analysis with practical, actionable recommendations, ultimately helping you achieve better outcomes and enhanced well-being.


</p>
            <br />
            
          </div>
          <div className="w-1/3 flex flex-col  gap-2">
            <div className="w-full h- bg-[#FFD1DC] rounded lg p-5" style={{ animation: "slide-in-top 1s ease-out forwards" }}
              onLoad={() => setIsLoaded(true)}>
              <h3 className="font-bold text-3xl">
                  ML predictor to detect neurological problems 
              </h3>
              <br/>
              <p className="italic">
              Utilizing an advanced machine learning (ML) detector, it analyzes user inputs and symptoms to detect potential <strong>neurological problems</strong>. CareMate offers <strong>personalized therapy</strong> recommendations and suggests the best alternatives for managing neuroconditions. It also generates <strong>detailed reports</strong>, helping users track their progress and receive insights into their neurological health. 
              </p>
            </div>
            <div className="w-full h-1/2 bg-[#B3EBF2] rounded lg p-5 sm-p-3" style={{ animation: "slide-in-bottom 1s ease-out forwards" }}
              onLoad={() => setIsLoaded(true)}>
              <h3 className="font-bold text-3xl">
                Medical Chatbot 
              </h3>
              <br/>
              <p className="italic">
              CareMate has an advanced medical chatbot designed to help you find the best alternatives and solutions for neurological issues. Whether you’re seeking advice on conditions like epilepsy, migraines, sleep disorders, or any other neuro-related concerns, CareMate is here to assist.
              </p>
            </div>
          </div>
          <div className="w-1/3 h- bg-[#F0DA69] rounded lg p-5 "  style={{ animation: "slide-in-right 1s ease-out forwards" }}
              onLoad={() => setIsLoaded(true)}>
            <h3 className="font-bold text-3xl">
              Find nearest hospitals !
            </h3>
            <br/>
            <p className="italic">
              {" "}
              CareMate provides a convenient "Find Nearest Hospitals" feature that allows users to quickly locate hospitals closest to their current location. Whether it’s an emergency or routine care, CareMate uses GPS-based services to provide accurate and up-to-date information about nearby healthcare facilities. Users can view hospital details, including distance, contact information, and directions, making it easier to access medical services when needed the most.
            </p>
            <br></br>
           <p className="italic">The tool also calculates distances and offers step-by-step directions, ensuring easy navigation to the selected facility. With its user-friendly interface and continuously updated data, CareMate makes accessing medical services straightforward and efficient, providing essential support when it’s needed most.</p>
          </div>
        </div>
      </div>
      <br/>
            
            <Footer/>
        </div>

    );

}
export default Services ;