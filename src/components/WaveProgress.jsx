import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

const WaveProgress = ({ data, percentageChange, timePeriod }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Display percentage change */}
      <div className="text-red-500 text-sm font-semibold flex items-center">
        <span>+{percentageChange}%</span>
        <span className="ml-1">↑</span>
      </div>

      {/* Line chart */}
      <div style={{ width: "100px", height: "80px" }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#ff6b6b"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Time period */}
      <div className="text-sm text-gray-600 bg-red-100 px-2 py-1 rounded mt-2">
        +{percentageChange}% {timePeriod}
      </div>
    </div>
  );
};

export default WaveProgress;
