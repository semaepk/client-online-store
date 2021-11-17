import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap'
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceApi';
import { Context } from "../../index";

const CreateDevice = observer(({ show, onHide }) => {

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    })

    const { device } = useContext(Context)

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title:'', description:'', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(infoProperty => infoProperty.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]:value} : i))
    }

    const selectFile = event => {
        setFile(event.target.file[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новое устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item 
                                onClick={() => device.setSelectedType(type)}
                                key={type.id}
                                >
                                {type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item 
                                onClick={() => device.setSelectedBrand(brand)}
                                key={brand.id}
                                >
                                {brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-2"
                        placeholder={"Введите название устройства"}
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-2"
                        placeholder={"Введите цену"}
                        type="number"
                    />
                    <Form.Control
                        className="mt-2"
                        type="file"
                        onCange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={'outline-dark'} 
                        onClick = {addInfo}    
                    >Добавить новое свойство</Button>
                    {
                        info.map(infoProperty => 
                            <Row>
                                <Col 
                                    md={4} 
                                    key={infoProperty.number}
                                    className="mt-2"
                                >
                                    <Form.Control
                                        value={infoProperty.title}
                                        onChange={(e) => changeInfo('info', e.target.value, infoProperty.number)} 
                                        placeholder="Введите название свойства"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control 
                                        value={infoProperty.description}
                                        onChange={(e) => changeInfo('description', e.target.value, infoProperty.number)}
                                        placeholder="Введите описание свойства"
                                    />
                                </Col>  
                                <Col md={4}>
                                    <Button 
                                        variant={'danger'}
                                        onClick={() =>  removeInfo(infoProperty.number)}
                                    >
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>
                            )
                    }

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'success'} onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;