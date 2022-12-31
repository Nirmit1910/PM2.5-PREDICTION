import React from "react";
import './precautions.css'

const Precautions = () => {
  return (
    <div className="Precautions" id="precautions">
      <div className="heading">
        <h1>Precautions</h1>
      </div>
      <div className="paragraph">
        <p id="p1">
          Everyone needs to take steps to protect themselves when pollution
          levels are “hazardous” and above. Some people are at higher risk from
          PM2.5 exposure. People most at risk from particle pollution exposure
          include those with heart or lung disease (including asthma and chronic
          obstructive pulmonary disease-COPD), older adults, and children.
        </p>

        <p id="p2">
          Not sure if the heart disease category applies to you? People with
          heart disease includes all people with known coronary artery disease,
          ischemic heart disease, history of angina and/or heart attack, stent
          placement, by-pass operation, heart failure, ventricular arrhythmia,
          peripheral vascular disease, history of stroke, transient ischemic
          attack (TIA), or cerebrovascular disease. 
        </p>

        <p id="p3">
          Why are children more at risk? Children are more likely to be exposed
          to air pollution, because they often spend more time outdoors engaged
          in activity and play, and they breathe more air per pound of body
          weight than adults. They are more susceptible to the effects of air
          pollution, because their airways are still developing. In addition,
          children are more likely than adults to have asthma, which increases
          their risk.
        </p>

        <p id="p4">
          If you are in an at-risk group, if you have heart or lung disease, if
          you are an older adult, or if you have children, talk with your doctor
          in advance about when and whether you should leave the area or move to
          a location with better indoor air quality. When PM2.5 concentrations
          are high for a prolonged period of time, fine particles can build up
          indoors even though you may not be able to see them.
        </p>
      </div>
    </div>
  );
};

export default Precautions;
