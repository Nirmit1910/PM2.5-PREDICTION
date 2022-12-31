import React from "react";
import "./home.css";
import pic1 from "../../assets/pic1.jpg";

const Home = () => {
  const array = [
    {
      ques: "What is PM2.5?",
      ans: "The term fine particles, or particulate matter 2.5 (PM2.5), refers to tiny particles or droplets in the air that are two and one half microns or less in width. Like inches, meters and miles, a micron is a unit of measurement for distance. There are about 25,000 microns in an inch. The widths of the larger particles in the PM2.5 size range would be about thirty times smaller than that of a human hair. The smaller particles are so small that several thousand of them could fit on the period at the end of this sentence.",
    },
    {
      ques: "How can PM2.5 affect my health?",
      ans: "Particles in the PM2.5 size range are able to travel deeply into the respiratory tract, reaching the lungs. Exposure to fine particles can cause short-term health effects such as eye, nose, throat and lung irritation, coughing, sneezing, runny nose and shortness of breath. Exposure to fine particles can also affect lung function and worsen medical conditions such as asthma and heart disease. Scientific studies have linked increases in daily PM2.5 exposure with increased respiratory and cardiovascular hospital admissions, emergency department visits and deaths. Studies also suggest that long term exposure to fine particulate matter may be associated with increased rates of chronic bronchitis, reduced lung function and increased mortality from lung cancer and heart disease. People with breathing and heart problems, children and the elderly may be particularly sensitive to PM2.5.",
    },
    {
      ques: "Where does PM2.5 come from?",
      ans: "There are outdoor and indoor sources of fine particles. Outside, fine particles primarily come from car, truck, bus and off-road vehicle (e.g., construction equipment, snowmobile, locomotive) exhausts, other operations that involve the burning of fuels such as wood, heating oil or coal and natural sources such as forest and grass fires. Fine particles also form from the reaction of gases or droplets in the atmosphere from sources such as power plants. These chemical reactions can occur miles from the original source of the emissions. In New York State, some of the fine particles measured in the air are carried by wind from out-of-state sources. Because fine particles can be carried long distances from their source, events such as wildfires or volcanic eruptions can raise fine particle concentrations hundreds of miles from the event.",
    },
  ];

  return (
    <div className="gradient__bg PM2__Home" id="home">
      <div className="PM2__Home-p"  >
        {array.map(({ ques, ans }) => (
          <div className="PM2__Home-ques-ans">
            <h1>{ques}</h1>
            <p>{ans}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
