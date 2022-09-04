import React, { FunctionComponent } from 'react';

type SpinnerProps = {
    loading: boolean;
}

export const Spinner: FunctionComponent<SpinnerProps> = ({ loading }) =>
    loading ? <div className="spinner"><div></div><div></div><div></div></div> : null
