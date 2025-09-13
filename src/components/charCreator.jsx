import {
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  AreaChart,
} from "recharts";

function CharCreator({ chart, nameOne, nameTwo }) {
  return (
    <>
      <ResponsiveContainer width="100%" minWidth={600} height={500}>
        <AreaChart data={chart} margin={{ right: 30, left: -20, bottom: 5 }}>
          <defs>
            <linearGradient id="shadowOne" x1="0" y1="0" x2="0" y2="1">
              <stop offset="20%" stopColor="rgba(209, 45, 52, 0.8)" />
              <stop offset="100%" stopColor="rgba(209, 45, 52, 0)" />
            </linearGradient>
            <linearGradient id="shadowTwo" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(40, 153, 145, 0.4)" />
              <stop offset="100%" stopColor="rgba(40, 153, 145, 0)" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mounth" />
          <YAxis
            tickFormatter={(value) => `${value}B`}
            ticks={[1, 5, 10, 20, 30, 40, 50, 60]}
          />
          <Tooltip formatter={(value) => `${value}B`} />
          <Area
            name=" "
            stroke="none"
            type="monotone"
            dataKey={Object.keys(chart[0])[1]}
            fill="url(#shadowOne)"
          />
          <Area
            name=" "
            stroke="none"
            type="monotone"
            dataKey={Object.keys(chart[0])[2]}
            fill="url(#shadowTwo)"
          />
          <Line
            type="monotone"
            dataKey={Object.keys(chart[0])[1]}
            stroke="rgba(209, 45, 52, 1)"
            strokeWidth={3}
            name={nameOne}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />

          <Line
            type="monotone"
            dataKey={Object.keys(chart[0])[2]}
            stroke="rgba(40, 153, 145, 1)"
            strokeWidth={3}
            name={nameTwo}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

export default CharCreator;
