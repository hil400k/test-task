import React from 'react';
import { connect } from "react-redux";
import { IAppState, IUser } from "../models";

interface IProps {
  user?: IUser
}

const Settings = (props: IProps) => {
    const { user } = props;

    return (
        <div>
            <span>Settings</span>
            <p>
              <span>User: </span>
              <span>{user && user.email}</span>
            </p>
        </div>
    );
};

export default connect((appState: IAppState) => ({
  user: appState.global.user,
}))(Settings);
