import React, { useState } from 'react';
import { Menu } from "antd";
import { AppstoreOutlined, HomeOutlined, ShoppingCartOutlined, UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className='SideMenu'
        >
            <div className="menu-toggle" onClick={toggleCollapsed}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
            <Menu
                mode="inline"
                inlineCollapsed={collapsed}
                onClick={(item) => {
                    navigate(item.key);

                }}
            >
                <Menu.Item key="/student-dashboard" icon={<HomeOutlined />} >
                    HomePage
                </Menu.Item>
                <Menu.Item key="/dashboard" icon={<AppstoreOutlined />} >
                    Dashboard
                </Menu.Item>
                <Menu.Item key="/course" icon={<ShoppingCartOutlined />} >
                    Courses
                </Menu.Item>
                {/* <Menu.Item key="/inventory" icon={<UserOutlined />} >
                    Inventory
                </Menu.Item> */}

            </Menu>
        </div >
    );
}

export default SideMenu;

// import React, { useState } from 'react';
// import { Menu, Row, Col } from "antd";
// import { AppstoreOutlined, HomeOutlined, ShoppingCartOutlined, UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';

// const SideMenu = () => {
//     const navigate = useNavigate();
//     const [collapsed, setCollapsed] = useState(false);

//     const toggleCollapsed = () => {
//         setCollapsed(!collapsed);
//     };

//     return (
//         <Row>
//             <Col xs={6} sm={8} md={collapsed ? 4 : 6} lg={collapsed ? 3 : 4} xl={collapsed ? 2 : 3}>
//                 <div className="menu-toggle" onClick={toggleCollapsed}>
//                     {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//                 </div>
//             </Col>
//             <Col xs={6} sm={8} md={collapsed ? 0 : 12} lg={collapsed ? 0 : 24} xl={collapsed ? 0 : 24}>
//                 <Menu
//                     mode="inline"
//                     inlineCollapsed={collapsed}
//                     onClick={(item) => {
//                         navigate(item.key);
//                     }}
//                 >
//                     <Menu.Item key="/" icon={<HomeOutlined />} >
//                         HomePage
//                     </Menu.Item>
//                     <Menu.Item key="/dashboard" icon={<AppstoreOutlined />} >
//                         Dashboard
//                     </Menu.Item>
//                     <Menu.Item key="/inventory" icon={<UserOutlined />} >
//                         Inventory
//                     </Menu.Item>
//                     <Menu.Item key="/orders" icon={<ShoppingCartOutlined />} >
//                         Orders
//                     </Menu.Item>
//                 </Menu>
//             </Col>

//         </Row >
//     );
// }

// export default SideMenu;




