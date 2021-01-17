import React, { Component } from "react";
import { Row, Col, Menu, Tag, Space } from "antd"
import { DefaultTable } from "@react-mf/styleguide"
import { tableInfo, tableData } from "../constants/jsonData.js"

export default class Sidebar extends Component {
    render () {
        return (
            <DefaultTable columns={tableInfo} data={tableData}/>
        )
    }
}