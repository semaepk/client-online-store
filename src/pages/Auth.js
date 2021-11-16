import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Container, Form, Button, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { NavLink, useLocation, useHistory} from 'react-router-dom';
import { Context } from '../index';
import { login, registration } from '../http/userApi';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

const Auth = observer(() => {

    const {user} = useContext(Context)

    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {

        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password) 
            }
            user.setUser(user)
            user.setIsAuth(true) 
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
        
    }
    
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column ">
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш email..."
                        value = {email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш пароль..."
                        value = {password}
                        onChange={event => setPassword(event.target.value)}
                        type="password"
                    />
                     <Row className="d-flex justify-content-between mt-2 pl-3 pr-3">
                            {isLogin ? <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                               Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                            }
                        <Button
                            variant={"success"}
                            onClick={click}
                            className="mt-2"
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;