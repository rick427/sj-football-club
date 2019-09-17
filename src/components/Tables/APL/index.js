import React, {useState, useEffect} from 'react';
import {Spin, Table, Card, Row, Col} from 'antd';
import {Container} from './apl-styles';
import Fade from 'react-reveal/Fade';
import axios from 'axios';

const URL = 'https://api.football-data.org/v2/competitions/SPL/matches';
const token = process.env.REACT_APP_API_TOKEN;

const APL = () => {
    const [loading, setLoading] = useState(null);
    const [matches, setMatches] = useState(null);

    useEffect(() => {
        //getMatches();
      }, [])
  
      const getMatches = async () => {
          try {
              setLoading(true);
              const req = await axios({
                  url: URL,
                  method: 'get',
                  headers: {
                      'X-AUTH-TOKEN': token
                  }
              })
              setLoading(false);
              const res = req.data.matches;
              const size = 50;
              const filtered = res.slice(0, size);
              setMatches(filtered);
          } catch (error) {
              console.log(error);
          }
      }
  
      //console.log('MATCHES', matches && matches);
      
  
      const columns = [
          {
              title: 'Home Team',
              dataIndex: 'homeTeam',
              key: 'homeTeam',
              render: homeTeam => <p>{homeTeam.name}</p>,
              width: 290
          },
          {
              title: 'Away Team',
              dataIndex: 'awayTeam',
              key: 'awayTeam',
              render: awayTeam => <p>{awayTeam.name}</p>,
              width: 290
          },
          {
              title: 'Winner',
              dataIndex: 'score',
              key: 'score',
              align: 'center',
              render: score => <p>{score.winner}</p>,
              width: 100
          },
          {
              title: 'Results',
              dataIndex: 'score',
              key: 'results',
              align: 'center',
              render: score => <p>{score.fullTime.homeTeam} - {score.fullTime.awayTeam} </p>,
              width: 100
          },
          {
              title: 'Referees',
              dataIndex: 'referees',
              key: 'referees',
              align: 'center',
              render: refs => refs[0].name ? <p>{refs[0].name}</p> : <h2 style={{color: 'red'}}>-</h2>,
              width: 290
          },
          {
              title: 'Start Date',
              dataIndex: 'season',
              key: 'season',
              render: season => <p>{season.startDate}</p>,
              width: 290
          },
          {
              title: 'Stage',
              dataIndex: 'stage',
              key: 'stage',
              fixed: 'right',
              render: stage => <p>{stage}</p>,
              width: 200
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
                                      dataSource={matches}
                                      pagination={
                                      {
                                          defaultCurrent: 1,
                                          defaultPageSize: 5,
                                          showSizeChanger: true,
                                          pageSizeOptions: [5, 10, 20]
                                      }} 
                                  />
                              </Card>
                          </Col>
                      </Row>
                  </Container>
              </Spin>
          </Fade>
  
      )
}

export default APL;
