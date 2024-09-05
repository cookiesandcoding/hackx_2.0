import { Link } from "react-router-dom";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "../../index.css";
import ImageSlider from "../../components/ImageSlider";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="">
      <Header />
      <div className="w-full bg-[#252b61] min-h-[200px] flex flex-col items-center justify-center text-center p-5 ">
        <p className="text-[#b3ebf2] font-extrabold text-8xl ">Caremate</p>

        <br></br>
        <div className="">
          <button className=" w-full h-14 text-xl  px-4 py-2 bg-[#f0da69] font-bold text-[#252b61] rounded-lg">
            Explore EEG Model
          </button>
        </div>
      </div>

      <div className=" flex flex-row items-center gap-20 p-10 ">
        <div
          className="flex flex-col justify-between p-5 w-1/2 h-full  shadow-lg bg-[#A3DAC2] rounded-xl "
          style={{ animation: "slide-in-right 1s ease-out forwards" }}
          onLoad={() => setIsLoaded(true)}
        >
          <Link to="/b ">
            <p className="text-[#252B61] text-3xl font-bold ">
              What does Caremate do ?
            </p>
          </Link>
          <br />
          <p className="text-[#252b61] text-lg italic">
            Dive into the intricate world of brainwave analysis with our EEG
            model. By clicking this button, you'll access a detailed view of how
            our model interprets and visualizes electrical activity in the
            brain.
          </p>
          <br />
          <button className=" w-full h-14 text-xl  px-4 py-2 bg-[#f0da69] font-bold text-[#252b61] rounded-lg">
            Know More
          </button>
        </div>
        <div className="w-1/2">
          <p className="text-3xl italic font-bold text-[#252b61]" style={{ animation: "slide-in-left 1s ease-out forwards" }}
          onLoad={() => setIsLoaded(true)}>
            "The brain is the most complex organ, and EEG helps us unravel its
            mysteries one wave at a time."
          </p>
          <br></br>
        </div>
      </div>

      <div className="mt-8 px-4 md:px-8 ">
  <h1 className="text-[#252B61] text-3xl font-bold mb-4">
    What does our model do?
  </h1>
  
  <div className="flex flex-col md:flex-row justify-center items-start md:items-center p-8 rounded-lg shadow-md bg-[#f0da69]  ">
    <div className="space-y-6 ">
      <p className="text-xl md:text-2xl text-[#252b61] font-semibold">
        Analyze EEG Data: Determines the nature of the EEG response.
      </p>
      <p className="text-xl md:text-2xl text-[#252b61] font-semibold">
        Classify Data: Categorizes the result as Positive, Negative, or Neutral
      </p>
      <p className="text-xl md:text-2xl text-[#252b61] font-semibold">
        Attention Levels:
      </p>
      <div className="space-y-4">
        <p className="text-lg md:text-xl text-[#252b61] font-semibold">
          Positive Result: High Attention
        </p>
        <p className="text-lg md:text-xl text-[#252b61]">
          A positive result typically corresponds to high cognitive or emotional engagement, suggesting that the subject is highly attentive or responsive.
        </p>
        <p className="text-lg md:text-xl text-[#252b61] font-semibold">
          Negative Result: Low Attention
        </p>
        <p className="text-lg md:text-xl text-[#252b61]">
          A negative result indicates lower levels of engagement or attention, meaning the subject may be less focused or less responsive.
        </p>
        <p className="text-lg md:text-xl text-[#252b61] font-semibold">
          Neutral Result: Baseline Attention
        </p>
        <p className="text-lg md:text-xl text-[#252b61]">
          A neutral result signifies that the subject's attention or engagement level is neither particularly high nor low, serving as a baseline measurement.
        </p>
      </div>
    </div>
  </div>
</div>

      <br/>
      <div>
      <h1 className="text-[#252B61] text-3xl font-bold pl-[25px]">
          Our Model Results 
        </h1>
        
        <br/>
        <ImageSlider/>

      </div>

      <br />
      <div className="mt-8">
        <h1 className="text-[#252B61] text-3xl font-bold pl-[25px]">
          Our top features 
        </h1>
        <h5 className="text-[#5b5b7e] text-xl font-bold pl-[25px]">
          Capabilities of our model 
        </h5>
        <div className="flex flex-row gap-2 p-[25px]">
          <div className="w-1/2 h-auto bg-[#F0da69] rounded-lg p-8 text-[#252B61]">
            <h3 className="text-[#252B61] text-3xl font-bold text-center">
            Therapy & Report generation 
            </h3>
            <br />
            <h5 className="text-[#252B61] font-bold text-center">Instantly analyses your problems and generates a report </h5>
            <br />
            <p className="text-[#252B61] italic">
            Therapy & Report Generation involves using insights from initial assessments to guide therapy. While the therapy itself does not utilize EEG signals, it relies on responses to prompts to tailor interventions and set goals. After each session, detailed reports are generated to summarize progress, highlight key findings, and provide personalized recommendations. These reports help track improvements, adjust therapy plans as needed, and ensure effective and informed therapeutic outcomes.
            </p>
            <br></br>
            <Link
              to=""
              target="_blank"
            >
              <button className="w-auto  h-  p-2 bg-[#252b61] text-[#b3ebf2] rounded lg ">
                {" "}
                Read More{" "}
              </button>
            </Link>
          </div>
          <div className="w-1/2 h-auto bg-[#b3ebf2] rounded-lg p-8 text-[#252B61]">
            <h3 className="text-[#252B61] font-bold  text-3xl text-center">
               Medical Chatbot and ML Predictor 
            </h3>
            <br />
            <h5 className="text-[#252B61] font-bold text-center ">
              Instantly analyses your prompts and give best results 
            </h5>
            <br />
            <p className="text-[#252B61] italic">
            ML Predictor & Medical Chatbot use advanced algorithms to address neurological issues and related health concerns. The ML Predictor analyzes data to forecast potential neurological issues, providing early insights for proactive management. Meanwhile, the Medical Chatbot offers personalized recommendations and alternative solutions for problems like sleep disorders. It engages with users to understand their symptoms and suggests effective treatments or lifestyle changes, ensuring tailored support and enhancing overall well-being.
            
            </p>
            <br />
            <div className="flex flex-row gap-10 ">
            <Link
              to="https://www.webmd.com/parenting/baby/news/20240823/most-baby-foods-on-the-market-arent-healthy"
              target="_blank"
            >
              
              <button className="w-auto  h- p-2 bg-[#252b61] text-[#b3ebf2] rounded lg ">
                {" "}
                Medical Chatbot {" "}
              </button>
              </Link>
              <button className="w-auto  h- p-2 bg-[#252b61] text-[#b3ebf2] rounded lg ">
                {" "}
                Therapy Chatbot {" "}
              </button>

          
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
