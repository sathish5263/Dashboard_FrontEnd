import { useEffect, useState } from "react"
import { Card } from "antd"
import { getRevenue } from "../../API"
import { Bar } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const DashboardChart = () => {

    const [revenueData, setRevenueData] = useState({
        labels: [],
        datasets: []
    })

    useEffect(() => {
          getRevenue().then(res => {
              const labels = res.carts.map(cart => {
                return `User-${cart.userId}`
              })
              const data = res.carts.map(cart => {
                return cart.discountedTotal
              })

              const dataSource = {
                labels,
                datasets: [
                  {
                    label: 'Revenue',
                    data: data,
                    backgroundColor: 'rgba(255, 0, 0, 1)',
                  },
                ],
              };

              setRevenueData(dataSource)
          })
    },[])

     const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Order Revenue',
          },
        },
      };

    //  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    //   const data = 


    return (
      <div className="horizontal-scroll-container">
        <Card className="chart-style" style={{ width: 700, height: 350,}}>
        <Bar options={options} data={revenueData} />
       </Card>
      </div>
    
    )
}
 
export default DashboardChart;