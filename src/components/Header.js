import React, { Component } from 'react';
import { Nav, NavItem, PageHeader } from 'react-bootstrap';
class Header extends Component {
    state = {
        classSuffix: ''
    }
    listenScrollEvent = e => {
        if (window.scrollY > 400) {
            this.setState({classSuffix: 'scrolled-nav'});
        } else {
            this.setState({classSuffix: ''})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <Nav className={this.state.classSuffix}>
                {/* <PageHeader className="App-title">
                    Confessions
                </PageHeader> */}
                <header className={`App-header-${this.state.classSuffix}`}>
                    <h1 className="App-title">Confessions</h1>
                </header>
            </Nav>
            
        );
    }
};

export default Header;