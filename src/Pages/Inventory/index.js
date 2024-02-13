// import { Typography, Space, Table, Card } from 'antd'
// import React, { useState, useEffect } from 'react'
// import CourseModel from '../../Pages/Model/CourseModel.json';

// const Inventory = () => {
//     const [loading, setLoading] = useState(false)
//     const [dataSource, setDataSource] = useState([])

//     useEffect(() => {
//         setLoading(true)
//         setDataSource(CourseModel.courseModel.map(course => ({
//             key: course.id,
//             id: course.id,
//             name: course.name,
//             instructor: course.instructor,
//             description: course.description,
//             enrollmentStatus: course.enrollmentStatus,
//             duration: course.duration,
//             location: course.location,
//             syllabus: course.syllabus
//         })));
//         setLoading(false);
//     }, [])

//     return (
//         <Card style={{ width: 1000, height: 600, boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", marginTop: 20 }}>
//             <Space size={20} direction='vertical'>
//                 <Typography.Title level={4} style={{ marginTop: 30, fontWeight: "bold", textAlign: "center" }}>Course Details</Typography.Title>
//                 <Table
//                     columns={[
//                         {
//                             title: "Id",
//                             dataIndex: "id"
//                         },
//                         {
//                             title: "Name",
//                             dataIndex: "name",
//                         },
//                         {
//                             title: "Instructor",
//                             dataIndex: "instructor"
//                         },
//                         {
//                             title: "Description",
//                             dataIndex: "description",
//                         },
//                         {
//                             title: "Enrollment Status",
//                             dataIndex: "enrollmentStatus",

//                         },

//                         {
//                             title: "Duration",
//                             dataIndex: "duration"
//                         },
//                         {
//                             title: "Location",
//                             dataIndex: "location"
//                         },
//                         {
//                             title: "Syllabus",
//                             dataIndex: "syllabus"
//                         },

//                     ]}
//                     dataSource={dataSource}
//                     pagination={{
//                         pageSize: 4,
//                     }}
//                 >
//                 </Table>
//             </Space >
//         </Card>
//     )
// }

// export default Inventory

import { Typography, Space, Table, Card } from 'antd';
import React, { useState, useEffect } from 'react';
import CourseModel from '../../Pages/Model/CourseModel.json';

const Inventory = () => {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        setLoading(true);
        setDataSource(CourseModel.courseModel.map(course => ({
            key: course.id,
            id: course.id,
            name: course.name,
            instructor: course.instructor,
            description: course.description,
            enrollmentStatus: course.enrollmentStatus,
            duration: course.duration,
            location: course.location,
            syllabus: course.syllabus // Include the syllabus data
        })));
        setLoading(false);
    }, []);

    return (
        <Card style={{ width: 1300, height: 600, boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", marginTop: 20 }}>
            <Space size={20} direction='vertical'>
                <Typography.Title level={4} style={{ marginTop: 30, fontWeight: "bold", textAlign: "center" }}>Course Details</Typography.Title>
                <Table
                    columns={[
                        {
                            title: "Id",
                            dataIndex: "id"
                        },
                        {
                            title: "Name",
                            dataIndex: "name",
                        },
                        {
                            title: "Instructor",
                            dataIndex: "instructor"
                        },
                        {
                            title: "Description",
                            dataIndex: "description",
                        },
                        {
                            title: "Enrollment Status",
                            dataIndex: "enrollmentStatus",
                        },
                        {
                            title: "Duration",
                            dataIndex: "duration"
                        },
                        {
                            title: "Location",
                            dataIndex: "location"
                        },
                        {
                            title: "Syllabus",
                            dataIndex: "syllabus",
                            render: syllabus => (
                                <ul>
                                    {syllabus.map(item => (
                                        <li key={item.week}>
                                            <strong>Week {item.week}: </strong> {item.topic} - {item.content}
                                        </li>
                                    ))}
                                </ul>
                            )
                        },
                    ]}
                    dataSource={dataSource}
                    loading={loading}
                    pagination={{
                        pageSize: 2,
                    }}
                />
            </Space >
        </Card>
    )
}

export default Inventory;
