import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#d12d34",
  "#289991",
  "#ff8042",
  "#0088FE",
  "#00C49F",
];

function PieCreator({ data, columns = 2 }) {
  let Angle = [0];
  function getInfo() {
    data.map((elem, i) => {
      Angle.push(elem.value * 3.6 + Angle[i]);
    });
  }
  const CustomLegend = (props) => {
    const { payload } = props;
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, auto)`,
          gridTemplateRows: "repeat(2, auto)",
          gap: "20px",
        }}
      >
        {payload.map((entry, index) => (
          <div key={`item-${index}`}>
            <div
              style={{
                display: "flex",
                gap: "8px",
                fontWeight: "600",
                fontSize: "16px",
                color: "rgba(54, 51, 82, 1)",
              }}
            >
              <div
                style={{
                  backgroundColor: entry.color,
                  width: "20px",
                  borderRadius: "50%",
                }}
              ></div>
              <p>{entry.value}</p>
            </div>
            <p
              style={{
                marginTop: "10px",
                marginLeft: "30px",
              }}
            >
              {entry.payload.value}%
            </p>
          </div>
        ))}
      </div>
    );
  };
  getInfo();
  function getOuterRadius(value) {
    const minValue = Math.min(...data.map((d) => d.value));
    const maxValue = Math.max(...data.map((d) => d.value));
    const minRadius = 80;
    const maxRadius = 140;

    const scale = (value - minValue) / (maxValue - minValue);
    return minRadius + scale * (maxRadius - minRadius);
  }

  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <ResponsiveContainer width="100%" height={600}>
      <PieChart>
        {data.map((entry, index) => (
          <Pie
            key={index}
            data={[entry]}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={
              activeIndex === index
                ? getOuterRadius(entry.value) + 20
                : getOuterRadius(entry.value)
            }
            scale={activeIndex === index ? 1.5 : 1}
            startAngle={Angle[index]}
            endAngle={Angle[index + 1]}
            labelLine={false}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            isAnimationActive={true}
          >
            <Cell
              fill={COLORS[index]}
              style={{
                transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
                cursor: activeIndex === index ? "pointer" : "",
                transformOrigin: "50% 50%",
                transition: "transform 0.3s ease",
              }}
            />
          </Pie>
        ))}
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend content={CustomLegend} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieCreator;
