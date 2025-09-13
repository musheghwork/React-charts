import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function DiagramCreator({ title, data, color }) {
  return (
    <ResponsiveContainer width="100%" minWidth={800} height={500}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          ticks={[1, 5, 10, 20, 30, 40, 50, 60]}
          tickFormatter={(value) => `${value}B`}
        />
        <Bar
          dataKey="value"
          fill={color}
          radius={[25, 25, 0, 0]}
          isAnimationActive={false}
          activeBar={false}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
export default DiagramCreator;
