import React from 'react';
import { Col } from 'react-bootstrap';

const SidebarButton = (props) => {
    return (
        <button className="sidebar-button" onClick={() => props.onClick(props.type)}>{props.type}</button>
    );
};

const Sidebar = (props) => {
    let buttons = ['home', 'top'].map((title, i) => {
        return <SidebarButton key={i} type={title} onClick={props.filter} />
    });
    return (
        <Col className="sidebar" md={1}>
            { buttons }
            {/* <div>Hot</div> */}
        </Col>
    );
};

export default Sidebar;