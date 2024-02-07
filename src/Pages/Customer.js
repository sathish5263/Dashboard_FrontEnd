import { Avatar, Rate, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, } from "../API";
import { Space } from "antd";

const Customers = () => {

    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        setLoading(true)
        getCustomers().then(res => {
            setDataSource(res.users)
            setLoading(false);
        })
    }, [])

    return ( 
        <Space size={20} direction="vertical">
            <Typography.Title className="customers-text" level={4}> Customers</Typography.Title>
            <div className="horizontal-scroll-container">
            <Table
              loading={loading}
              columns={[
                {
                    title: "Avatar",
                    dataIndex: "image",
                    render: (link) => {
                      return <Avatar src={link}/>
                    }
                },
                {
                    title: "FirstName",
                    dataIndex: "firstName"
                },
                {
                    title: "LastName",
                    dataIndex: "lastName",
                    //render: (value) => <span>${value}</span>
                },
                {
                    title: "Email",
                    dataIndex: "email",
                    render: (rating) => {
                        return <Rate value={rating} allowHalf disabled />
                    }
                },
                
                {
                    title: "Phone",
                    dataIndex: "phone"
                },
                {
                    title: "Address",
                    dataIndex: "address",
                    render: (address) => {
                        return <span>{address.address}, {address.city}</span>
                    }
                },
                
              ]}
              dataSource={dataSource}
              pagination={{
                pageSize: 7
              }}
            ></Table>
            </div>
            
        </Space>
     );
}
 
export default Customers;