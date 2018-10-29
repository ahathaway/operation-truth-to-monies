import React, { Component } from 'react';
import ConfessionCard from './ConfessionCard';
import {Col } from 'react-bootstrap';

class ConfessionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            confessions: props.confessions
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ confessions: nextProps.confessions });  
    }

    render() {
        let confessions = this.state.confessions.map((c, i) => {
            return <ConfessionCard 
                key={i}
                id={c.id}
                title={c.title} 
                date={c.date} 
                approvals={c.approvals || 0} 
                disapprovals={c.disapprovals || 0}
                />
        });
        return (
            <Col md={12} className="confession-list">{confessions}</Col>
        );
    }
}

export default ConfessionList;