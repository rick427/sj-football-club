import React, {useState, useEffect} from 'react';
import {Spin, Table, Card, Row, Col} from 'antd';
import { Container } from './liga-styles';
import Fade from 'react-reveal/Fade';
import axios from 'axios';

const URL = 'http://api.football-data.org/v2/competitions/';
const token = process.env.REACT_APP_API_TOKEN;

const LIGA = () => {
    const [loading, setLoading] = useState(null);
    const [competition, setCompetition] = useState(null);

    useEffect(() => {
        getCompetition();
    },[]);

    const getCompetition = async () => {
        try {
            setLoading(true);
            const req = await axios({
                method: 'get',
                url: URL,
                headers: {
                  'X-Auth-Token': token
                }
            });
            const res = req.data.competitions;
            // const size = 10;
            // const items = res.slice(0 ,size); 
            setLoading(false);
            const filtered = res.map(comp =>  [{id: comp.code, name: comp.name}])           
            setCompetition(filtered);
        } catch (error) {
            console.log(error);
        }
    }
    console.log('COMPS', competition && competition)

    const columns = [
        {
            title: 'Team',
            dataIndex: '',
            key: 'name',
            render: text => <p>{text}</p>,
            width: 290
        },
        {
            title: 'Wins',
            dataIndex: 'name',
            key: 'wins',
            render: text => <p>{text}</p>,
            width: 290
        },
        {
            title: 'Loss',
            dataIndex: 'name',
            key: 'loss',
            render: text => <p>{text}</p>,
            width: 290
        },
        {
            title: 'Draw',
            dataIndex: 'name',
            key: 'draw',
            render: text => <p>{text}</p>,
            width: 290
        },
        {
            title: 'Total pts',
            dataIndex: 'name',
            key: 'pts',
            render: text => <p>{text}</p>,
            width: 290
        },
    ]

    return (
        <Fade left> 
            <Spin tip="Loading..." spinning={loading}>
                <Container>
                    <Row>
                        <Col lg={20}>
                            <Card>
                                <Table 
                                    columns={columns} 
                                    
                                />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Spin>
        </Fade>
    )
}

export default LIGA;
