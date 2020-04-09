import React, { useState } from 'react';
import './auth.css';

interface IProps {

}

const Auth = (props: IProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <>
        <h4>Auth</h4>
        <form className="auth-form" onSubmit={(e) => { e.preventDefault(); console.info(email, password); }}>
            <label>
                <span className="caption">Email:</span>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <label>
                <span className="caption">Password:</span>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
      </>
    );
};

export default Auth;
