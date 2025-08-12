import { useState } from "react";
import { BoxCard, IconWrapper } from "./Boxes.style";

interface boxtype {
  name: string;
  icon: any;
  description?: string;
  points?: string[];
  buttonText: string;
}

interface BoxProps {
  box: boxtype;
}

const fallbackPoints = [
  "Educational Counselling",
  "Visa Guidance & Processing",
  "Travel & Ticketing Assistance",
  "Accommodation Arrangements",
  "IELTS / PTE Preparation",
  "Pre-Departure Orientation",
];

const Boxes = ({ box }: BoxProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const displayPoints =
    box.points && box.points.length > 0 ? box.points : fallbackPoints;

  return (
    <BoxCard>
      <IconWrapper>{box.icon}</IconWrapper>
      <h2
        style={{
          fontSize: "1.5rem",
          marginBottom: "10px",
          color: "#2c3e50",
          borderBottom: "2px solid #3498db",
          paddingBottom: "5px",
          textAlign: "center",
        }}
      >
        {box.name}
      </h2>
      {box.description && (
        <p style={{ textAlign: "center", color: "#555" }}>{box.description}</p>
      )}
      {showDetails && (
        <ul
          style={{
            marginTop: "10px",
            paddingLeft: "20px",
            listStyle: "none",
          }}
        >
          {displayPoints.map((point, idx) => (
            <li
              key={idx}
              style={{
                marginBottom: "8px",
                padding: "6px 10px",
                background: "#f9f9f9",
                borderRadius: "6px",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLLIElement).style.background = "#3498db";
                (e.target as HTMLLIElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLLIElement).style.background = "#f9f9f9";
                (e.target as HTMLLIElement).style.color = "#000";
              }}
            >
              {point}
            </li>
          ))}
        </ul>
      )}
      <button
        style={{
          marginTop: "10px",
          backgroundColor: showDetails ? "#95a5a6" : "#3498db",
          color: "white",
          border: "none",
          padding: "8px 14px",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "View Details"}
      </button>

      <br />
      <button
        style={{
          marginTop: "8px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "8px 14px",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#c0392b")
        }
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "red")}
      >
        {box.buttonText}
      </button>
    </BoxCard>
  );
};

export default Boxes;
