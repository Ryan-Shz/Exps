import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class Detail extends React.Component {

    render() {
        return (
            <div>
                <h1>Detail Page</h1>
                Receive Props Match Params: id = {this.props.match.params.id}
            </div>
        );
    }
}

function mapState(state) {

};

export default connect(mapState, null)(withRouter(Detail));