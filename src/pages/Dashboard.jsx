import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 2780 },
  { month: "May", sales: 1890 },
  { month: "Jun", sales: 2390 },
];

export default function Dashboard() {
  return (
    <>
      <h2 className="page-title">CONCEPS ANALYSIS</h2>

      <div className="cards-grid">
        <div className="card-box">
          <h3>Total Users</h3>
          <p>1245</p>
        </div>

        <div className="card-box">
          <h3>Revenue</h3>
          <p>$32,890</p>
        </div>

        <div className="card-box">
          <h3>Orders</h3>
          <p>78</p>
        </div>

        <div className="card-box">
          <h3>Products</h3>
          <p>342</p>
        </div>
      </div>

      <div style={{ marginTop: "40px", height: "300px" }}>
        <h3 style={{ marginBottom: "20px" }}>Monthly Sales</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}