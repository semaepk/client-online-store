import React, { useContext } from 'react';
import { Context } from '../index'
import { observer } from "mobx-react-lite";
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {

    const { device } = useContext(Context)
    return (
        <Row md={6}>
            {device.brands.map(brand =>
                <Card
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className="p-2"
                    onClick={() => device.setSelectedBrand(brand)}
                    border = {brand.id === device.selectedBrand.id ? 'primary' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;