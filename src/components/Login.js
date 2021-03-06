import React from 'react';
import { Container, Form, Button} from 'react-bootstrap';

const Login = (props) => {
    return(
        <Container>
            <h3>Login</h3>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={() => props.login()}>
                    Login
                </Button>
            </Form>
         </Container>   
    );
}

export default Login;