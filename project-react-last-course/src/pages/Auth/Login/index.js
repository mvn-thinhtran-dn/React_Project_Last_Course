import React, {useState} from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const [form, setForm] = useState({email: '', password: ''});
  const auth = useAuth();
  
  const handleOnchange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setForm({...form, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.login(form.email, form.password).then(e => {
      console.log(e);
    });
  }

  return (
    <div className="container">
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input name="email" type="text" placeholder="Email" onChange={handleOnchange} />
        </div>
        <div className="form-control">
          <input name="password" type="password" placeholder="Password" onChange={handleOnchange} />
        </div>
        <div className="form-action">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
