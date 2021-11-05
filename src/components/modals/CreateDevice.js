import React, { useContext, useState } from 'react';
import { Modal, Button, Form, Dropdown, Row } from 'react-bootstrap'
import { Context } from "../../index";

const CreateDevice = ({ show, onHide }) => {

    const { device } = useContext(Context)
    const [info, setInfo] = useState([])
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
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        // value={value}
                        // onChange={e => setValue(e.target.value)}
                        className="mt-2"
                        placeholder={"Введите название устройства"}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder={"Введите цену"}
                        type="number"
                    />
                    <Form.Control
                        className="mt-2"
                        type="file"
                    />
                    <hr/>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;