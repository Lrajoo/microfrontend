import React, { Component } from "react";
import { Row, Col } from "antd"
import { NavbarOption } from "@react-mf/styleguide"
import { navbarComposerOptions } from "../constants/navbarOptions.js"

export default class Navbar extends Component {
    state = {
        current: 'applicationCatalog',
      };
    
      handleClick = e => {
        this.setState({ current: e.key });
      };

    render () {
        const { current } = this.state;
        return (
            <Row justify="center">
                <Col>
                    {window.location.pathname === '/composer' && 
                        navbarComposerOptions.map(option => {
                            return (<NavbarOption key={option} name={option}/>)
                        })
                    }
                    {window.location.pathname === '/harmonizer' && 
                        (
                            <>
                            </>
                        )
                    }
                    {window.location.pathname === '/analyzer' && 
                        (
                            <>
                            </>
                        )
                    }
                </Col>
          </Row>
        )
    }
}