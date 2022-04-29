import { PieChart, Pie, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    count: 95,
    item: "Food",
  },
  {
    count: 43.56,
    item: "Internet",
  },
  {
    count: 65.30,
    item: "Travel",
  },
  {
    count: 65.30,
    item: "Insurence",
  },
  
]

const PieChartView = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PieChartView