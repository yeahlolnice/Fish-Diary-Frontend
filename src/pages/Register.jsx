import { Button, Form } from "react-bootstrap";

function SignUpPage(props) {


    const handleSignUp = (event) => {
        event.preventDefault();
        let formData = {
            email: event.target[0].value,
            password: event.target[1].value
        }
        fetch('http://localhost:5000/register', {
            "body": JSON.stringify(formData),
            "method": 'POST',
            "headers": {
                'Content-Type': 'application/json'
            },
            "credentials": 'include'
        }).then(data => console.log(data))
        

    }

    return (
        <div className="SignUpDiv">
            <Form onSubmit={handleSignUp}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="SignUpButton">
                    <Button variant="success" type="submit" id="SignUpBtn">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}
export default SignUpPage;