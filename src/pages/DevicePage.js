import React from 'react';
import { Card, Col, Container, Image, Row, Button } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {

    const device = {id: 2, name: 'devices 2', rating:5, price: 100000}
    const description = []

    return (
        <Container className="mt-2">
            <Row className="d-flex justify-content-center align-items-center">
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex justify-content-center align-items-center">
                        <h2 style={{textAlign:'center'}}>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                    className="d-flex flex-column align-items-center justify-content-around"
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                       <h3>От: {device.price} руб.</h3>
                       <Button variant={"outline-dark"}>Добавить в корзину!</Button>     
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;