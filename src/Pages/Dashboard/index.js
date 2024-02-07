import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Space, Typography } from "antd";
import { useEffect } from "react";
import { getCustomers, getInventory, getOrders } from "../../API";
import { useDispatch, useSelector } from "react-redux";
import { setOrders, setInventory, setCustomers, setRevenue } from "../../Store/appSlice";
import DashboardCard from "./DashboardCard";
import RecentOrders from "./RecentOrders";
import DashboardChart from "./DashboardChart";
// import "./Dashboard.scss"; // Import SCSS file

const Dashboard = () => {
  const dispatch = useDispatch();
  const { orders, inventory, customers, revenue } = useSelector((state) => state.app);

  useEffect(() => {
    getOrders().then((res) => {
      dispatch(setOrders(res.total));
      dispatch(setRevenue(res.discountedTotal));
    });
    getInventory().then((res) => {
      dispatch(setInventory(res.total));
    });
    getCustomers().then((res) => {
      dispatch(setCustomers(res.total));
    });
  }, [dispatch]);

  return (
    <Space className="dashboard-container" size={20} direction="vertical">
      <Typography.Title className="dashboard-text" level={4}>Dashboard</Typography.Title>
      <Space className="dashboard-card-container" direction="horizontal">
        <DashboardCard
          icon={<ShoppingCartOutlined className="green-icon" />}
          title={"Orders"}
          value={orders}
        />
        <DashboardCard
          icon={<ShoppingOutlined className="blue-icon" />}
          title={"Inventory"}
          value={inventory}
        />
        <DashboardCard
          icon={<UserOutlined className="purple-icon" />}
          title={"Customers"}
          value={customers}
        />
        <DashboardCard
          icon={<DollarCircleOutlined className="red-icon" />}
          title={"Revenue"}
          value={revenue}
        />
      </Space>
      <Space className="dashboard-2">
        <RecentOrders />
        <DashboardChart />
      </Space>
    </Space>
  );
};

export default Dashboard;
