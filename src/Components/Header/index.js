// import React from 'react'
// import { MailOutlined, BellFilled } from '@ant-design/icons';
// import { Badge, Image, Input, Space } from "antd";
// const { Search } = Input;

// const Header = () => {
//     return (
//         <div className='Header'>
//             <Image
//                 width={170} height={60}
//                 src={process.env.PUBLIC_URL + '/logonew.jpg'}
//             ></Image>
//             <div className='header-search-box'>
//                 <Search
//                     placeholder="Enter search keyword"
//                     enterButton
//                 />
//             </div>
//             <Space>
//                 <Badge count={10} dot>
//                     <MailOutlined style={{ fontSize: 24 }} />
//                 </Badge>
//                 <Badge count={20}>
//                     < BellFilled style={{ fontSize: 24 }} />
//                 </Badge>
//             </Space>
//         </div >
//     )
// }

// export default Header

// import React from 'react'
// import { MailOutlined, BellFilled } from '@ant-design/icons';
// import { Badge, Image, Input, Space, Row, Col } from "antd";
// const { Search } = Input;

// const Header = () => {
//     return (
//         <Row align="middle" justify="space-between" className='Header'>
//             <Col xs={24} sm={12} md={6} lg={3} xl={3} >
//                 <Image
//                     width={170} height={60}
//                     src={process.env.PUBLIC_URL + '/logonew.jpg'}
//                 ></Image>
//             </Col>
//             <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
//                 <div className='header-search-box'>
//                     <Search
//                         placeholder="Enter search keyword"
//                         enterButton
//                     />
//                 </div>
//             </Col>
//             <Col xs={24} sm={4} md={4} lg={4} xl={4} >
//                 <Space>
//                     <Badge count={10} dot>
//                         <MailOutlined style={{ fontSize: 24 }} />
//                     </Badge>
//                     <Badge count={20}>
//                         <BellFilled style={{ fontSize: 24 }} />
//                     </Badge>
//                 </Space>
//             </Col>
//         </Row>
//     )
// }

// export default Header;


import React from 'react';
import { MailOutlined, BellFilled } from '@ant-design/icons';
import { Badge, Image, Input, } from "antd";
import { Container, Row, Col } from 'react-bootstrap';
const { Search } = Input;

const Header = () => {
    return (
        <Container>
            <Row className='Header' style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <Col xs={6} sm={3} md={2}>
                    <Image
                        width={170} height={60}
                        src={process.env.PUBLIC_URL + '/logonew.jpg'}
                    />
                </Col>
                <Col xs={12} sm={6} md={8}>
                    <div className='header-search-box'>
                        <Search
                            placeholder="Enter search keyword"
                            enterButton
                        />
                    </div>
                </Col>
                <Col xs={6} sm={3} md={2} >
                    {/* <Space> */}
                    <Badge count={10} dot>
                        <MailOutlined style={{ fontSize: 24 }} />
                    </Badge>
                    <Badge count={20}>
                        <BellFilled style={{ fontSize: 24 }} />
                    </Badge>
                    {/* </Space> */}
                </Col>
            </Row>
        </Container >
    );
}

export default Header;
