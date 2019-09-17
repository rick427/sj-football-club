import React, {useState, useEffect} from 'react';
import {Spin, Table, Card} from 'antd';
import Fade from 'react-reveal/Fade';
import { Container } from './liga-styles';

const LIGA = () => {
    const [loading, setLoading] = useState(true);
    const [competition, setCompetition] = useState(null);

    useEffect(() => {
        const asyncLoader = () => (
            setTimeout(() => {
                setLoading(false);
            },1500)
        )
        asyncLoader();
    },[]);

    const columns = [
        {
            title: 'Order Code:',
            dataIndex: 'name',
            key: 'name',
            render: text => <p>{text}</p>,
            width: 290
        },
    ]

    return (
        <Fade bottom> 
            <Spin tip="Loading..." spinning={loading}>
                <Container>
                  <Card>
                      <Table columns={columns} dataSource={competition} scroll={{x:1300}}/>
                  </Card>
                </Container>
            </Spin>
        </Fade>
    )
}

export default LIGA;
