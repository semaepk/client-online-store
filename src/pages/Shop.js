import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Context } from '../index';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceApi';
import Pages from '../components/Pages';

const Shop = observer(() => {

    const {device} = useContext(Context)

    let limitItem = 10

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, device.page, limitItem).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    })

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, limitItem).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;