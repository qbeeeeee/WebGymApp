import React from "react";
import homeBackground1 from "./../assets/img/gymBackgroundHome.png";
import homeBackground2 from "./../assets/img/gymBackground1.png";
import tourGym from "./../assets/img/tourGym.jpg";
import groupGym from "./../assets/img/gymGroup.jpg";
import personalGym from "./../assets/img/gymPersonal.jpg";
import "./../assets/css/HomePage.css";
import "./../assets/css/Custom.css";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import NewsLetter from "../Components/NewsLetter";
import { useSelector } from "react-redux";

const Homepage = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const Section = ({ children, fade }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <section
        ref={ref}
        className={`${
          fade === "left"
            ? "hp-fade-in-left"
            : fade === "right"
            ? "hp-fade-in-right"
            : fade === "slow-right"
            ? "hp-fade-in-slow-right"
            : fade === "slower-right"
            ? "hp-fade-in-slower-right"
            : "hp-fade-in"
        }  ${inView ? "visible" : ""}`}
      >
        {children}
      </section>
    );
  };
  return (
    <div className="overflow-hidden">
      {/* First Image Background */}
      <div
        className="mt-[-80px] sm:mt-[-100px] min-h-[500px] sm:min-h-screen"
        style={{
          backgroundImage: `url(${homeBackground1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center justify-center flex-col min-h-[500px] sm:min-h-screen">
          <div className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold absolute top-[15%] left-[10%]">
            <Section fade={"right"}>Godstakis Gym</Section>
          </div>
          <div className="relative overflow-hidden ">
            <div className="absolute left-0 border-l-4 border-yellow-500 min-h-full z-20"></div>
            <Section fade={"slow-right"}>
              <div className="ml-5 flex gap-4 text-5xl sm:text-7xl lg:text-9xl font-bold italic tracking-tighter text-white">
                BE YOUR <div className="text-custom-yellow"> BEST</div>
              </div>
            </Section>
          </div>

          <Section fade={"slower-right"}>
            <div
              onClick={() => (currentUser ? null : navigate("/signin"))}
              className="flex z-40 items-center justify-center text-sm sm:text-lg lg:text-xl h-12 sm:h-16 w-36 sm:w-52 mt-24 font-semibold cursor-pointer bg-custom-yellow hover:bg-yellow-200 rounded-lg"
            >
              JOIN TODAY
            </div>
          </Section>
        </div>
      </div>

      {/* Small Images Background */}
      <div className="w-[100%] min-h-[450px] md:min-h-screen bg-neutral-900 gap-24 pt-14">
        <Section fade={"left"}>
          <div className="text-custom-yellow italic font-bold text-4xl sm:text-7xl lg:text-9xl flex items-center justify-center">
            WHAT WE OFFER
          </div>
          <div className="text-white text-sm sm:text-lg flex items-center justify-center mt-8">
            We're committed to bringing you the best workout experience.
          </div>
        </Section>
        <div className="flex items-center justify-center gap-4 mt-14 ml-3 sm:ml-0">
          <div
            className="flex items-center justify-center hp-scaleup-images"
            style={{
              backgroundImage: `url(${tourGym})`,
            }}
          >
            <Section fade={"left"}>
              <div className="text-white text-lg sm:text-2xl lg:text-3xl italic font-bold ml-3 sm:ml-0">
                TOUR OUR GYM
              </div>
            </Section>
          </div>
          <div
            className="flex items-center justify-center hp-scaleup-images"
            style={{
              backgroundImage: `url(${groupGym})`,
            }}
          >
            <Section fade={"left"}>
              <div className="text-white text-center text-lg sm:text-2xl lg:text-3xl italic font-bold max-w-[300px]">
                CHECK OUT OUR GROUP CLASSES
              </div>
            </Section>
          </div>
          <div
            className="flex items-center justify-center hp-scaleup-images mr-3 sm:mr-0"
            style={{
              backgroundImage: `url(${personalGym})`,
            }}
          >
            <Section fade={"left"}>
              <div className="text-white text-center text-lg sm:text-2xl lg:text-3xl italic font-bold max-w-[350px] mr-3 sm:mr-0">
                ASK ABOUT PERSONAL TRAINING
              </div>
            </Section>
          </div>
        </div>
      </div>

      {/* Second Image Background */}
      <div>
        <div
          className="w-[100%] min-h-[400px] md:min-h-[80vh]"
          style={{
            backgroundImage: `url(${homeBackground2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Section>
            <div className="pt-[7%] pl-[7%] mb-52 text-custom-yellow text-3xl sm:text-5xl lg:text-7xl max-w-[200px] sm:max-w-[500px] lg:max-w-[700px] font-bold italic">
              GET IN TOUCH TODAY
            </div>
          </Section>
          <NewsLetter homepage={true} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
