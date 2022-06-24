import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/CryptoApi';

const { Title } = Typography;

const Homepage = () => {
     
    // const { data, isFetching} = useGetCryptosQuery();

    // console.log(data)
  
    return (
        <>
        <Title level={2} className="heading"> Globle Crypto Stats</Title>
        <Row>
            <Col span={12}><Statistic title="Totls Cryptocurrencies" value="5" /></Col>
            <Col span={12}><Statistic title="Totls Exchanges" value="5" /></Col>
            <Col span={12}><Statistic title="Totls Market Capital" value="5" /></Col>
            <Col span={12}><Statistic title="Totls 24h Volume" value="5" /></Col>
            <Col span={12}><Statistic title="Totls Market" value="5" /></Col>
        </Row>
        </>
    )
}

export default Homepage
