import React, { useState } from 'react';
import './auth.css';
import { connect } from "react-redux";
import { actions } from "../reducer/actions";

interface IProps {
    login(email: string, password: string): void;
}

const Auth = (props: IProps) => {
    const { login } = props;
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const submitted = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(email, password);
    };

    return (
      <>
        <h3>Login</h3>
        <form className="auth-form" onSubmit={submitted}>
            <label>
                <span className="caption">Email:</span>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <label>
                <span className="caption">Password:</span>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <input className="login" type="submit" value="Login" />
        </form>
      </>
    );
};

export default connect((appState: any) => ({

}),{
    login: actions.login
})(Auth);
