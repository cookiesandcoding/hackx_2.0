import React from "react";
import Header from "../../components/Header";

function Team() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <div className="flex flex-wrap justify-center items-center h-screen">
                {/* Team Member 1 */}
                <div className="w-1/4 p-4 md:w-1/2 lg:w-1/4 xl:w-1/4">
                    <div className="rounded-full overflow-hidden hover:scale-105 transition duration-500 ease-in-out relative">
                        <img
                            src="team/Neil.jpeg"
                            alt="Neil"
                            className="w-full h-full object-cover rounded-full"
                        /> 
                        <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition duration-500 ease-in-out bg-gray-500 bg-opacity-50 flex flex-col justify-center items-center">
                            <p className="text-center text-white mt-4">
                                ML and AI expert
                            </p>
                            <div className="flex justify-center mt-2">
                                <a
                                    href="https://www.linkedin.com/in/neil-gupta-97a0242a1/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white hover:text-blue-600 transition duration-500 ease-in-out mr-4"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/agnate4115"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white hover:text-blue-600 transition duration-500 ease-in-out"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team Member 2 */}
                <div className="w-1/4 p-4 md:w-1/2 lg:w-1/4 xl:w-1/4">
                    <div className="rounded-full overflow-hidden hover:scale-105 transition duration-500 ease-in-out relative">
                        <img
                            src="team/Raghav.png"
                            alt="Raghav"
                            className="w-full h-full object-cover rounded-full"
                        />
                        <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition duration-500 ease-in-out bg-gray-500 bg-opacity-50 flex flex-col justify-center items-center">
                            <p className="text-center text-white mt-4">Front-end Developer</p>
                            <div className="flex justify-center mt-2">
                                <a
                                    href="https://www.linkedin.com/in/raghav-katta-11674a223/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white hover:text-blue-600 transition duration-500 ease-in-out mr-4"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/raghavxkatta"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white hover:text-blue-600 transition duration-500 ease-in-out"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team Member 3 */}
                <div className="w-1/4 p-4 md:w-1/2 lg:w-1/4 xl:w-1/4">
                    <div className="rounded-full overflow-hidden hover:scale-105 transition duration-500 ease-in-out relative">
                        <img
                            src="team/Kanishka.jpeg"
                            alt="Kanishka"
                            className="w-full h-full object-cover rounded-full"
                        />
                        <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition duration-500 ease-in-out bg-gray-500 bg-opacity-50 flex flex-col justify-center items-center">
                            <p className="text-center text-white mt-4">Front-end Developer</p>
                            <div className="flex justify-center mt-2">
                                <a
                                    href="https://www.linkedin.com/in/kanishka-bhatia-198294312/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white hover:text-blue-600 transition duration-500 ease-in-out mr-4"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/cookiesandcoding"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white hover:text-blue-600 transition duration-500 ease-in-out"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team Member 4 */}
                <div className="w-1/4 p-4 md:w-1/2 lg:w-1/4 xl:w-1/4">
                    <div className="rounded-full overflow-hidden hover:scale-105 transition duration-500 ease-in-out relative">
                        <img
                            src="/team/Krishnav.jpeg"
                            alt="Krishnav"
                            className="w-full h-full object-cover rounded-full"
                        />
                        <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition duration-500 ease-in-out bg-gray-500 bg-opacity-50 flex flex-col justify-center items-center">
                            <p className="text-center text-white mt-4">Front-end Developer</p>
                            <div className="flex justify-center mt-2">
                                <a
                                    href="https://www.linkedin.com/in/krishnav-kanoi-3ba53a217/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white hover:text-blue-600 transition duration-500 ease-in-out mr-4"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/krishnav1237"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white hover:text-blue-600 transition duration-500 ease-in-out"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
);
}

export default Team;
