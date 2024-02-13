import { DollarCircleOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons';
// import { Container, Row, Col } from 'react-bootstrap';
import { Typography, Space, Card, Statistic, Table, Modal, Spin, Row, Col, } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getRevenue, getStudentDetails } from '../../API';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const { Title: AntdTitle, Text } = Typography;


const Dashboard = () => {
    return (
        <>
            <Typography.Title level={2} style={{ textAlign: "center", margin: 30 }}>Student Dashboard</Typography.Title >
            <Row gutter={[16, 16]} justify="start">
                <Space >
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                        <DashboardCard icon={<UserOutlined style={{ color: "green", backgroundColor: "rgba(0,255,0,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />} title={"Students"} value={217435} />
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                        <DashboardCard icon={<UserOutlined style={{ color: "purple", backgroundColor: "rgba(0,255,255,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />} title={"Employees"} value={6345} />
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                        <DashboardCard icon={<UserOutlined style={{ color: "red", backgroundColor: "rgba(255,0,0,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />} title={"Management"} value={4145} />
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                        <DashboardCard icon={<DollarCircleOutlined style={{ color: "blue", backgroundColor: "rgba(0,0,255,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />} title={"Income"} value={2876845} />
                    </Col>
                </Space>
            </Row>

            <Row gutter={[16, 16]} justify="start">
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                    <RecentOrders />
                </Col>
                <Col xs={20} sm={12} md={16} lg={18} xl={18}>
                    <DashboardChart />
                </Col>
            </Row >


        </>

    );
}

function DashboardCard({ title, value, icon }) {
    return (
        <Card style={{ width: 300, height: 130, boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", marginRight: 10 }}>
            <Space direction='horizontal'>
                {icon}
                <Statistic title={<span style={{ fontSize: 16, fontWeight: 'bold', color: 'black', paddingBottom: 5 }}>{title}</span>} value={value} />
            </Space>
        </Card>
    );
}

function RecentOrders() {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [studentDetails, setStudentDetails] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setLoading(true);
        getStudentDetails().then(res => {
            setDataSource(res.map((student, index) => ({
                key: index,
                name: student.name,
                id: student.id
            })));
            setLoading(false);
        }).catch(error => {
            console.error('Error fetching student data:', error);
            setLoading(false);
        });
    }, []);

    const showModal = async (record) => {
        setSelectedStudent(record);
        setModalVisible(true);

        try {

            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${record.id}`);
            setStudentDetails(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching student details:', error);
        }
    };

    const closeModal = () => {
        setModalVisible(false);
        setStudentDetails(null);
    };

    return (
        <>
            <Card style={{ width: 400, height: 500, boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", marginTop: 20 }}>
                <AntdTitle level={3} style={{ textAlign: "center", margin: 20 }}>Student Details</AntdTitle >
                <Table
                    style={{ fontSize: '20px', width: '500px' }}
                    columns={[
                        { title: 'Name', dataIndex: 'name' },
                        {
                            title: 'Details',
                            dataIndex: 'url',
                            render: (text, record) => <a onClick={() => showModal(record)}><EyeOutlined style={{ fontSize: '20px' }} /></a>
                        }

                    ]}
                    loading={loading}
                    dataSource={dataSource}
                    pagination={{ total: 10, pageSize: 5 }}
                />
                <StudentDetailsModal student={studentDetails} visible={modalVisible} onClose={closeModal} />
            </Card >
        </>
    );
}

function StudentDetailsModal({ student, visible, onClose }) {
    if (!visible || !student) return null;

    return (

        <Modal
            title={<AntdTitle level={3}>{student.name}</AntdTitle>}
            visible={visible}
            onCancel={onClose}
            footer={null}
        >
            <Spin spinning={!student}>
                <div style={{ textAlign: 'center' }}>
                    <AntdTitle level={4}>Details</AntdTitle>
                    <Text strong>ID: </Text><Text>{student.id}</Text><br />
                    <Text strong>Name: </Text><Text>{student.name}</Text><br />
                    {/* <Text strong>Username: </Text><Text>{student.username}</Text><br /> */}
                    <Text strong>Email: </Text><Text>{student.email}</Text><br />
                    <Text strong>Phone: </Text><Text>{student.phone}</Text><br />
                    <Text strong>Address: </Text><br />
                    <Text>{`${student.address.street}, ${student.address.suite}, ${student.address.city}, ${student.address.zipcode}`}</Text><br />

                </div>
            </Spin>
        </Modal>
    );
}

function DashboardChart() {

    const [revenueData, setRevenueData] = useState({
        labels: [],
        datasets: []
    })

    useEffect(() => {
        getRevenue()
            .then(res => {
                // console.log(res.carts);
                const labels = res.carts.map(cart => `User-${cart.userId}`);
                const data = res.carts.map(cart => cart.discountedTotal);
                const dataSource = {
                    labels,
                    datasets: [
                        {
                            label: 'Revenue',
                            data,
                            backgroundColor: 'rgba(255, 0, 0, 1)',
                        }
                    ],
                };
                setRevenueData(dataSource);
            })
            .catch(error => {
                console.error('Error fetching revenue data:', error);
            });
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Order Revenue',
            },
        },
    };

    return (
        <Card style={{ width: 800, height: 500, boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", marginRight: 10, marginLeft: 140, marginTop: 22 }}>
            < Bar options={options} data={revenueData} />
        </Card >
    )

}

export default Dashboard;