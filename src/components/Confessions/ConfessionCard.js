import React, { Component } from 'react';
import '../../styles/ConfessionCard.css';
import { getTimeSinceDate, updateConfessionTest } from '../api';
import { Row, Col } from 'react-bootstrap';

const VoteButton = (props) => {
    return (
        <Col md={2} xs={2} className="vote-button">
            <Row>
                <button className={`vote-button-${props.type}`} onClick={() => props.submitVote(props.type)}>
                    <div>{props.type.toUpperCase()}</div>
                    {/* <div>{props.count || 0}</div> */}
                </button>
            </Row>
        </Col>
    );
}

class ConfessionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            approvals: this.props.approvals,
            disapprovals: this.props.disapprovals,
            vote: null
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ 
            approvals: nextProps.approvals, 
            disapprovals: nextProps.disapprovals,
        });  
    }

    submitVote = (vote) => {
        let approval_delta = 0,
            disapproval_delta = 0,
            vote_delta = null;
        if (vote === 'love') {
            if (this.state.vote === 'love') {
                approval_delta--;
            } else {
                if (this.state.vote === 'hate') {
                    disapproval_delta--;
                }
                approval_delta++;
                vote_delta = 'love';
            } 
        } else { // voted to 'hate'
            if (this.state.vote === 'hate') {
                disapproval_delta--;
            } else {
                if (this.state.vote === 'love') {
                    approval_delta--;
                }
                disapproval_delta++;
                vote_delta = 'hate';
            }
        }
        console.log()
        this.setState({
            approvals: this.state.approvals + approval_delta,
            disapprovals: this.state.disapprovals + disapproval_delta,
            vote: vote_delta
        }, () => {
            console.log({id: this.props.id, approvals: approval_delta, disapprovals: disapproval_delta});
            updateConfessionTest({id: this.props.id, approvals: this.state.approvals, disapprovals: this.state.disapprovals})
        });
            
        
    }

    render() {
        let voteTally = (this.state.approvals - this.state.disapprovals) || 0;
        console.log(voteTally + ' votes');
        return (
            <Row className="confession-card">
                
                <VoteButton type="love" count={this.state.approvals} submitVote={this.submitVote} />
                
                <Col md={8} xs={8} className="card-content">
                    
                    <div className="card-tally">{voteTally}</div>
                    
                    <div className="card-title">{this.props.title}</div>
                    
                    <div className="card-elapsed-time">{getTimeSinceDate(this.props.date)}</div>
                    
                </Col>
                
                <VoteButton type="hate" count={this.props.disapprovals} submitVote={this.submitVote} />

            </Row>
            // <div className="confession-card">
            //     <div className="card-title">{this.props.title}</div>
            //     <div className="card-date">{getTimeSinceDate(this.props.date)}</div>
            // </div>
            
        );
    }
}

export default ConfessionCard;