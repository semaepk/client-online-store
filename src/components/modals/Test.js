import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'

const Test = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Добавить тип
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить новый тип</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control>
                            placeholder={"Введите название типа"}
                        </Form.Control>
                    </Form></Modal.Body>
                <Modal.Footer>
                    <Modal.Footer>
                        <Button variant={'outline-danger'} onClick={handleClose}>Закрыть</Button>
                        <Button variant={'outline-success'} onClick={handleClose}>Добавить</Button>
                    </Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Test;