import React, { Component } from "react";
import { Row, Col, Menu } from "antd"
import { Link } from "@reach/router"
import { Icon } from "@react-mf/styleguide"
import {composerOptions, composerSubOptions, harmonizerOptions, harmonizerSubOptions, analyzerOptions, analyzerSubOptions } from "../constants/sidebarOptions.js"
const { SubMenu } = Menu

export default class Sidebar extends Component {  
    render () {
        return (
            <Row justify="center">
                <Col>
                    <img src="https://www.steerwise.com/img/logo/whiteLogoBg.png" style={{padding: '10px 30px'}}/>
                    <hr style={{margin: '10px 0'}}></hr>
                    <Link className="nav-link" to="/composer">                
                        <Icon src={window.location.pathname === "/composer" ? "https://api.iconify.design/ant-design:build-twotone.svg?color=purple" : "https://api.iconify.design/ant-design:build-twotone.svg?color=%23FFFFFF"} padding="10px 30px" height="50px"/>
                    </Link>
                    <Link className="nav-link" to="/harmonizer">
                        <Icon src={window.location.pathname === "/harmonizer" ? "https://api.iconify.design/ant-design:sync-outlined.svg?color=purple" : "https://api.iconify.design/ant-design:sync-outlined.svg?color=%23FFFFFF"} padding="10px 30px" height="50px"/> 
                    </Link>
                    <Link className="nav-link" to="/analyzer">
                        <Icon src={window.location.pathname === "/analyzer" ? "https://api.iconify.design/ant-design:file-sync-outlined.svg?color=purple" : "https://api.iconify.design/ant-design:file-sync-outlined.svg?color=%23FFFFFF"} padding="10px 30px" height="50px"/>
                    </Link>
                    {window.location.pathname === '/composer' &&
                        (
                        
                        <Menu
                                onClick={() => {}}
                                defaultSelectedKeys={['1']}
                                mode="inline"
                            >
                            {composerOptions.map((option, index) => {
                                return (
                                    <SubMenu
                                    key={index}
                                    title={<span>{option}</span>}
                                    style={{padding: '15px 0'}}
                                    >
                                        {composerSubOptions[option] && composerSubOptions[option].map((subOption, index) => {
                                             return (<Menu.Item key={index} style={{padding: '5px 0'}}>{subOption}</Menu.Item>)
                                        })}
                                    </SubMenu>
                                )
                            })}
                            </Menu>
                        )   
                    }
                    {window.location.pathname === '/harmonizer' &&
                        (
                            <Menu
                            onClick={() => {}}
                            defaultSelectedKeys={['1']}
                            mode="inline"
                        >
                        {harmonizerOptions.map((option, index) => {
                            return (
                                <SubMenu
                                key={index}
                                title={<span>{option}</span>}
                                style={{padding: '15px 0'}}
                                >
                                    {harmonizerSubOptions[option] && harmonizerSubOptions[option].map((subOption, index) => {
                                         return (<Menu.Item key={index} style={{padding: '5px 0'}}>{subOption}</Menu.Item>)
                                    })}
                                </SubMenu>
                            )
                        })}
                        </Menu>
                        )   
                    }
                    {window.location.pathname === '/analyzer' &&
                       (
                        <Menu
                                onClick={() => {}}
                                defaultSelectedKeys={['1']}
                                mode="inline"
                            >
                                               {analyzerOptions.map((option, index) => {
                            return (
                                <SubMenu
                                key={index}
                                title={<span>{option}</span>}
                                style={{padding: '15px 0'}}
                                >
                                    {analyzerSubOptions[option] && analyzerSubOptions[option].map((subOption, index) => {
                                         return (<Menu.Item key={index} style={{padding: '5px 0'}}>{subOption}</Menu.Item>)
                                    })}
                                </SubMenu>
                            )
                        })}
                            </Menu>
                        )   
                    }
                </Col>
          </Row>
        )
    }
}