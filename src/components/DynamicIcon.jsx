import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faUtensils,
  faWifi,
  faCoffee,
  faSnowflake,
  faDumbbell,
  faUmbrellaBeach,
  faSwimmingPool,
  faParking,
  faSpa,
  faConciergeBell,
  faCar,
  faMoneyBillWave,
  faWheelchair,
  faBroom,
  faTshirt,
  faCocktail,
  faPaw,
  faSquareParking,
} from "@fortawesome/free-solid-svg-icons";

const DynamicIcon = ({ word }) => {
  const [isHovered, setIsHovered] = useState(false);

  const boardBaseMap = {
    desayuno: { icon: faUtensils },
    "solo habitacion": { icon: faBed },
  };

  const amenitiesMap = {
    14040: { icon: faWifi },
    10080: { icon: faSnowflake },
    13050: { icon: faUtensils },
    13530: { icon: faSwimmingPool },
    14260: { icon: faParking },
    10420: { icon: faUmbrellaBeach },
    10360: { icon: faCocktail },
    10630: { icon: faCar },
    11310: { icon: faConciergeBell },
    11410: { icon: faMoneyBillWave },
    14020: { icon: faWheelchair },
    11800: { icon: faSquareParking },
    11750: { icon: faDumbbell },
    12000: { icon: faSpa },
    12050: { icon: faBroom },
    11540: { icon: faTshirt },
    12810: { icon: faPaw },
    11890: { icon: faParking },
    12140: { icon: faTshirt },
  };

  const isNumber = !isNaN(Number(word));
  const item = isNumber ? amenitiesMap[Number(word)] : boardBaseMap[word.toLowerCase()];
  const icon = item ? item.icon : faCoffee;

  return (
    <div
      className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-100"
      style={{
        backgroundColor: isHovered ? "var(--accent)" : "#f3f4f6",
        boxShadow: isHovered ? "0 0 2px var(--accent)" : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FontAwesomeIcon
        icon={icon}
        size="lg"
        color={isHovered ? "#fff" : "#333"}
        style={{
          transition: "color 0.1s, transform 0.2s",
          transform: isHovered ? "scale(1.1)" : "scale(1)", 
        }}
      />
    </div>
  );
};

export default DynamicIcon;