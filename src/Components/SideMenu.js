import React from "react";
import { AppstoreOutlined, ShopOutlined, ShoppingOutlined, UserOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const SideMenu = () => {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = React.useState("/");
    const [menuVisible, setMenuVisible] = React.useState(false);

    React.useEffect(() => {
        const pathname = location.pathname;
        setSelectedKeys(pathname);
    }, [location.pathname]);

    const navigate = useNavigate();

    const menu = (
        <Menu onClick={(item) => navigate(item.key)} selectedKeys={[selectedKeys]}>
            <Menu.Item key="/" icon={<AppstoreOutlined />}>
                DashBoard
            </Menu.Item>
            <Menu.Item key="/inventory" icon={<ShopOutlined />}>
                Inventory
            </Menu.Item>
            <Menu.Item key="/orders" icon={<ShoppingOutlined />}>
                Orders
            </Menu.Item>
            <Menu.Item key="/customers" icon={<UserOutlined />}>
                Customers
            </Menu.Item>
        </Menu>
    );

    const arrowIcon = menuVisible ? <UpOutlined /> : <DownOutlined />;

    return (
        <div className="SideMenu">
            <Dropdown overlay={menu} trigger={["click"]} placement="bottomLeft" visible={menuVisible} onVisibleChange={(visible) => setMenuVisible(visible)}>
                <div className='side_menu' style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                    <AppstoreOutlined style={{ marginRight: 4 }} />
                    Menu
                    {arrowIcon}
                </div>
            </Dropdown>
        </div>
    );
};

export default SideMenu;
