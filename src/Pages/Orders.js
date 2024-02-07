import { Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getOrders } from "../API";
import { Space } from "antd";

const Orders = () => {

    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        setLoading(true)
        getOrders().then(res => {
            setDataSource(res.products)
            setLoading(false);
        })
    }, [])

    return ( 
        <Space size={20} direction="vertical">
            <Typography.Title className="orders-text" level={4}> Orders</Typography.Title>
            <div className="horizontal-scroll-container">
            <Table
              loading={loading}
              columns={[
                
                {
                    title: "Title",
                    dataIndex: "title"
                },
                {
                    title: "Price",
                    dataIndex: "price",
                    render: (value) => <span>${value}</span>
                },
                {
                    title: "DiscountedPrice",
                    dataIndex: "discountedPrice",
                    render: (value) => <span>${value}</span>
                },
                {
                    title: "Quantity",
                    dataIndex: "quantity",
                    
                },
                {
                    title: "Total",
                    dataIndex: "total"
                },
                
            
              ]}
              dataSource={dataSource}
              pagination={{
                pageSize: 8
              }}
            ></Table>
            </div>  
        </Space>
     );
}
 
export default Orders;