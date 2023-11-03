import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginfail, setLoginFail] = useState(false);

  let postdata = () => {
    setLoading(true);
    fetch('http://localhost:1337/api/justdials', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          Name: name,
          Email: email,
          Password: password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.id !== '') {
          console.log(data);
            setLoading(false);
            setLoginSuccess(true);
            let remove=document.querySelectorAll(".blur")             // remove class
            remove.forEach((element)=>{
              element.classList.remove("blur")
            })
          }
        })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Hide the spinner if an error occurs
        setLoginFail(true)
      });
  };

  return (
    <main className="d-flex justify-content-center align-items-center">
      <Form className="w-50">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          type="button"
          className="bg-primary"
          onClick={() => {
            postdata();
          }}
        >
          {loading ? (
            <span>Loading...</span>
          ) : (
            'Submit'
          )}
        </Button>
      {loginSuccess && (
        <Alert variant="success" className="mt-3">
          Login successful!
        </Alert>
      )}
      {loginfail && (
        <Alert variant="danger" className="mt-3">
          plese enter correct detail
        </Alert>
      )}
      </Form>
    </main>
  );
}

export default Login;
