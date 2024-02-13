// import { Typography } from "antd";
// import React from 'react';
// import './Footer.css'; // Import CSS file for styling

// const Footer = () => {
//     return (
//         <div className='footer-container'>
//             <hr className='footer-line' /> {/* Line above the footer */}
//             <div className='Footer'>
//                 <Typography.Link href="tel:+123456789" style={{ color: 'grey' }}>+123456789</Typography.Link>
//                 <Typography.Link href="https://www.google.com" target="_blank" style={{ color: 'grey' }}>Privacy Policy</Typography.Link>
//                 <Typography.Link href="https://www.google.com" target="_blank" style={{ color: 'grey' }}>Terms of Use</Typography.Link>
//             </div>
//         </div>
//     );
// }

// export default Footer;

// import { Typography, Row, Col, Space } from "antd";
// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//     return (
//         <div className='footer-container'>
//             <hr className='footer-line' />
//             <Row justify="center" className='Footer'>
//                 <Col xs={24} sm={8}>
//                     <Typography.Link href="https://www.google.com" className='footer-link' style={{ color: 'grey' }}>Copyright © 2024 envato All rights reserved.</Typography.Link>
//                 </Col>
//                 <Col xs={24} sm={8}>
//                     <Typography.Link href="https://www.google.com" target="_blank" className='footer-link' style={{ color: 'grey' }}>Privacy Policy</Typography.Link>
//                 </Col>
//                 <Col xs={24} sm={8}>
//                     <Typography.Link href="https://www.google.com" target="_blank" className='footer-link' style={{ color: 'grey' }}>Terms of Use</Typography.Link>
//                 </Col>
//             </Row>
//         </div>
//     );
// }

// export default Footer;

import { Container, Row, Col } from 'react-bootstrap';
import { Typography } from 'antd';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
    return (
        <div className='footer-container'>
            <hr className='footer-line' /> {/* Line above the footer */}
            <Container>
                <Row className='Footer'>
                    {/* <Col xs={12} sm={4}>
                        <Typography.Link href="tel:+123456789" style={{ color: 'grey' }}>+123456789</Typography.Link>
                    </Col> */}
                    <Col xs={12} sm={4}>
                        <Typography.Link href="https://www.google.com" target="_blank" style={{ color: 'grey', }}>Privacy & Policy  | </Typography.Link>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Typography.Link href="https://www.google.com" target="_blank" style={{ color: 'grey', marginRight: 20, marginLeft: 12 }}>Terms of Use</Typography.Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;





