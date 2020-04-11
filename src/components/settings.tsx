import React from 'react';
import { connect } from "react-redux";

interface IProps {
  user: {[key: string]: any}
}

const Settings = (props: IProps) => {
    const { user } = props;

    return (
        <div>
            <span>Settings</span>
            <p>
              <span>User: </span>
              <span>{user.email}</span>
            </p>
        </div>
    );
};

export default connect((appState: any) => ({
  user: appState.global.user,
}))(Settings);
