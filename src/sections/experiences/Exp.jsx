import React from "react";
import experienceData from "./data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./exp.css";
const Exp = ({ theme }) => {
  return (
    <section id="Exp" className={`${theme}`}>
      <h2>Experiences</h2>
      <div className="container exp-container">
        <VerticalTimeline lineColor="hsl(270 , 5% , 94%)">
          {experienceData.map((item, index) => (
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light_theme"
                    ? "#f3f4f6"
                    : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  `${theme}` === "light__theme"
                    ? "0.6rem solid rgba(203, 206, 209, 0.9)"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.data}
              icon={item.icon}
              iconStyle={{
                color: "white",
                background: "hsl(270,89%,41%)",
                fontSize: "1.5rem",
              }}
            >
              <div className="content">
                <h4 className={`{theme} title`}>{item.title}</h4>
                <p className="location">{item.location}</p>
                <p className="description">{item.description}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Exp;
