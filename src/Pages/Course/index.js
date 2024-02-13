import { Typography, Card, Table } from 'antd';
import React, { useState, useEffect } from 'react';
import { EyeOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CourseModel from '../Model/CourseModel.json';

const Orders = () => {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [course, setCourse] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setLoading(true)
        setDataSource(CourseModel.courseModel.map(course => ({
            key: course.id,
            id: course.id,
            name: course.name,
        })));
        setLoading(false);
    }, [])


    const showModal = async (record) => {
        setSelectedStudent(record);
        setModalVisible(true);

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${record.id}`);
            setCourse(response.data);
        } catch (error) {
            console.error('Error fetching student details:', error);
        }
    };

    const closeModal = () => {
        setModalVisible(false);
        setCourse(null);
    };

    return (
        <Card style={{ width: 400, height: 500, boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", marginTop: 20 }}>
            <Typography.Title level={3} style={{ textAlign: "center", margin: 20 }}>Available Courses</Typography.Title>
            <div style={{ height: 400, overflowY: 'auto' }}>
                <Table
                    style={{ fontSize: '20px', width: '500px' }}
                    columns={[
                        { title: 'Name', dataIndex: 'name' },
                        {
                            title: 'Details',
                            dataIndex: 'url',
                            render: (text, record) => (
                                <Link to="/inventory"> {/* Navigate to Inventory page */}
                                    <EyeOutlined style={{ fontSize: '20px' }} onClick={() => showModal(record)} />
                                </Link>
                            )
                            // < a onClick={() => showModal(record)}><EyeOutlined style={{ fontSize: '20px' }} /></a>
                        }
                    ]}
                    loading={loading}
                    dataSource={dataSource}
                    pagination={false}
                />
            </div>
        </Card >
    );
}

export default Orders;




