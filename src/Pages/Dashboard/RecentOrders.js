import { useState, useEffect } from "react";
import { Table, Typography } from "antd";
import { getOrders } from "../../API";


const RecentOrders = () => {

    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
       setLoading(true);
       getOrders().then((res) => {
        setDataSource(res.products.splice(0,4));
        setLoading(false)
       }) 
    }, [])

    return (
        <div className="recent">
        <Typography.Text className="recent-text"> Recent Orders</Typography.Text>
        <Table className="table-recent"
          columns={[
            {
                title: "Title",
                dataIndex: "title",
            },
            {
                title: "Quantity",
                dataIndex: "quantity",
            },
            {
                title: "Price",
                dataIndex: "discountedPrice",
            },
          ]}
          loading={loading}
          dataSource={dataSource}
          pagination={false}
          size="large"
        ></Table>
        </div>
    )
}
 
export default RecentOrders;