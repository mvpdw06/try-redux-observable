import React from 'react';
import { connect } from 'react-redux';

import { ping } from './action';

const App = ({ isPinging, ping }) => (
    <div>
        <h1>is pinging: {isPinging.toString()}</h1>
        <button onClick={ping}>Start PING</button>
    </div>
);

const mapStateToProps = (isPinging) => {
    return { isPinging };
}
const mapDispatchToProps = (dispatch) => ({
    viewRotate: () => dispatch(global.viewRotate()),
    viewChangeSize: (viewSize) => dispatch(global.viewChangeSize(viewSize)),
    themeChange: (theme) => dispatch(global.themeChange(theme)),
    scrollToPosition: (scrollTo) => dispatch(global.scrollTo(scrollTo)),
});

module.exports = connect(
    ({ isPinging }) => ({ isPinging }),
    { ping }
)(App);;