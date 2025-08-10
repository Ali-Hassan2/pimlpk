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

const Boxes = ({ box }: BoxProps) => {
  const [showDetails, setShowDetails] = useState(false);

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

      {box.description && <p>{box.description}</p>}

      {showDetails && box.points && (
        <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
          {box.points.map((point, idx) => (
            <li key={idx} style={{ marginBottom: "5px" }}>
              {point}
            </li>
          ))}
        </ul>
      )}

      <button
        style={{
          marginTop: "10px",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          padding: "8px 14px",
          borderRadius: "5px",
          cursor: "pointer",
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
        }}
      >
        {box.buttonText}
      </button>
    </BoxCard>
  );
};

export default Boxes;
