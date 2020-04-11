import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { actions } from "../reducer/actions";
import { IAppState } from "../models";

interface IProps {
  text?: string;
  fetchText(): void;
}

const Dashboard = (props: IProps) => {
    const { text, fetchText } = props;

    useEffect(() => {
      fetchText();
    }, [])

    return (
        <div>
            <span>Dashboard</span>
            <p>{text || '...'}</p>
        </div>
    );
};

export default connect((appState: IAppState) => ({
  text: appState.global.text,
}),{
  fetchText: actions.fetchText,
})(Dashboard);
