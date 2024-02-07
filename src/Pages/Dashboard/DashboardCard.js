import { Space, Card, Statistic } from "antd";

const DashboardCard = ({title, value, icon}) => {
    return (  
       <div className="dashboard_card">
        <Card style={{ padding: 30,}}>
           <Space>
               {icon}
               <Statistic title={title} value={value} />
           </Space>
           
       </Card>
       </div>
    )
}
 
export default DashboardCard;