import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#252b61] text-[#b3ebf2] shadow-md rounded lg:flex flex-col justify-between items-center p-12 ">
      <div className="flex flex-row space-x-20 justify-between w-full">
        <div className="flex flex-col space-y-12">
          <div className="flex flex-row space-x-8">
            <img src="/care-mate-logo.png" alt="Care-Mate Logo" className="h-12 w-12" />
            <span className="font-bold text-[#b3ebf2] text-2xl">Caremate</span>
          </div>
          <div className="flex flex-row space-x-8">
            <a href="/linkedin" className="text-[#B3ebF2] hover:text-[#b3ebf2] hover:underline">
              <i className="fa-brands fa-linkedin fa-2x"></i>
            </a>
            <a href="/instagram" className="text-[#B3ebF2] hover:text-[#b3ebf2] hover:underline">
              <i className="fa-brands fa-instagram fa-2x"></i>
            </a>
            <a href="/youtube" className="text-[#B3ebF2] hover:text-[#b3ebf2] hover:underline">
              <i className="fa-brands fa-youtube fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-12">
          <div className="flex flex-row space-x-8">
            <i className="fa-solid fa-location-dot fa-2x"></i>
            <div>
              <span className="text-lg">Address:<br/>
              <small className="text-md">Jaipur-Ajmer Express Highway, Dehmi Kalan, Near GVK Toll Plaza, Jaipur, Rajasthan 303007</small>
              </span>
            </div>
          </div>
          <div className="flex flex-row space-x-8">
            <i className="fa-solid fa-envelope fa-2x"></i>
            <div>
              <span className="text-lg">Have any questions?<br/></span>
              <small className="text-md">feel free to ask us: info@care-mate.com</small>
            </div>
          </div>
          <div className="flex flex-row space-x-8">
            <i className="fa-solid fa-magnifying-glass fa-2x"></i>
            <div>
              <span className="text-lg">Want to know more?<br/> </span>
              <small className="text-md">familiarize yourself with scientific publications, which we have selected from around the world, about the use and advantages of NIRS technology</small>
            </div>
          </div>
          <div className="flex flex-row space-x-8">
            <span className="text-lg">&copy; 2024. All rights reserved.</span>
          </div>
        </div>
        <div className="flex flex-col space-y-12">
          <span className="font-bold text-[#b3ebf2] text-2xl">CONNECT WITH US</span>
          <div className="flex flex-col gap-2">
            <input type="email" placeholder="Subscribe to our newsletter " className="placeholder-[#252b61] bg-[#a3dac2] py-3 px-10 rounded w-full"/>
                  <button className="bg-[#F0DA69] text-[#252b61] py-2 px-4 rounded w-full">Join</button>
          </div>
          <div>
            <small className="text-md">By entering your mail you accept our privacy policy</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;