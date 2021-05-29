import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import apis from '../../apis/Apis';

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            reset: () => apis.loginAuth('token')
        },
        dispatch,
    );

function LoginPage({ reset }) {

    useEffect(() => {
        document.title = 'Login';
    }, []);
    return (
        <div>
            <h1 onClick={reset}>
                login
            </h1>

        </div>
    )
}

export default connect(null, mapDispatchToProps)(LoginPage)
