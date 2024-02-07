import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Image, Typography, Space, Badge, Drawer, List } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../API";
// import "./AppHeader.scss"; // Import SCSS file

const AppHeader = () => {
  const [comments, setComments] = useState([]);
  const [order, setOrder] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrder(res.products);
    });
  }, []);

  return (
    <div className="AppHeader">
      <Image
        width={50}
        style={{ borderRadius: '50%' }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHIDi5lb0rDwWvcJw46mZSyhC1HHoPTc_3A&usqp=CAU"
      ></Image>
      <Typography.Title>DASHBOARD</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={order.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotificationOpen(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="Commemts"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        />
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationOpen}
        onClose={() => {
          setNotificationOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={order}
          renderItem={(item) => {
            return <List.Item>{item.title}</List.Item>;
          }}
        />
      </Drawer>
    </div>
  );
};

export default AppHeader;
