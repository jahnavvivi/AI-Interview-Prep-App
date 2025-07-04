import { useNavigate } from "react-router-dom";
import hero_image from "../assets/hero-image.png";
import { App_Features } from "../utils/data";
import { useState } from "react";
import { LuSparkles } from "react-icons/lu";
import Login from "./Auth/Login";
import Modal from "../components/Modal";
import SignUp from "./Auth/SignUp";

const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    // console.log("CTA clicked");
    setCurrentPage("signup");
    setOpenAuthModel(true);
  };

  return (
    <>
      <div className="w-full min-h-full bg-gradient-to-b from-violet-100  to-[#FCFBFC]">
        <div className="w-[500px] h-[500px] bg-indigo-200/50 blur-[65px] absolute top-0 left-0"></div>

        <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
          {/* Header */}
          <header className="flex justify-between items-center mb-16">
            <div className="text-xl font-bold text-indigo-900">
              Interview Prep AI
            </div>
            <button
              className="bg-linear-to-r from-indigo-700 to-violet-500 text-white text-sm font-semibold px-7 py-2.5 rounded-full hover:bg-indigo-950 hover:text-white border border-violet-100 transition-colors cursor-pointer"
              onClick={() => setOpenAuthModel(true)}
            >
              Login / SignUp
            </button>
          </header>

          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <div className="flex items-center justify-left mb-2">
                <div className="flex items-center gap-2 text-[13px] text-violet-600 font-semibold bg-violet-200 px-3 py-1 rounded-full border border-violet-300">
                  <LuSparkles size={20} color="#875CF5" /> AI Powered
                </div>
              </div>

              <h1 className="text-5xl text-violet-950 font-medium mb-6 leading-tight">
                Ace Interviews With <br />
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#4338CA_0%,_#8B5CF6_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                  AI Powered
                </span>{" "}
                Learning
              </h1>
            </div>

            <div className="w-full md:w-1/2">
              <p className="text-[17px] text-gray-900 mr-0 md:mr-20 mb-6">
                Get role-specific questions, expand answers when you need them,
                dive deeper into concepts, organize everything your way. From
                Preparaation to Mastery - your Ultimate Interview ToolKit is
                here.
              </p>

              <button
                className="bg-indigo-950 text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-violet-200 hover:text-violet-900 border border-violet-50 hover:border-violet-400 transition-colors cursor-pointer"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-full relative z-10">
        <div>
          <section className="flex items-center justify-center -mt-36">
            <img
              src={hero_image}
              alt="Hero Image"
              className="w-[80vw] rounded-lg"
            />
          </section>
        </div>

        <div className="w-full min-h-full bg-violet-50">
          <div className="container mx-auto px-4 pt-10 pb-20">
            <section className="mt-5">
              <h2 className="text-2xl font-medium text-center mb-12">
                Features That Make You Shine
              </h2>

              <div className="flex flex-col items-center gap-8">
                {/*first three cards*/}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  {App_Features.slice(0, 3).map((feature) => (
                    <div
                      className="bg-[#faf8ff] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-violet-200 transition border border-violet-200 text-indigo-900"
                      key={feature.id}
                    >
                      <h3 className="text-base font-semibold mb-3">
                        {feature.title}
                      </h3>

                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/*remaining cards*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {App_Features.slice(3).map((feature) => (
                    <div
                      className="bg-[#faf8ff] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-violet-200 transition border border-violet-200 text-indigo-900"
                      key={feature.id}
                    >
                      <h3 className="text-base font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="text-sm bg-gray-50 text-secondary text-center p-5 mt-5">
          Made with.... @Jahnavi Sharma
        </div>
      </div>

      <Modal
        isOpen={openAuthModel}
        onClose={() => {
          setOpenAuthModel(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
