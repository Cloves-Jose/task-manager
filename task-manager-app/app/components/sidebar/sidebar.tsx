"use client"

import { useState } from "react"
import { Button, Row, Col } from "react-bootstrap"
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from "react-pro-sidebar"
import MenuIcon from '@mui/icons-material/Menu'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import TaskIcon from '@mui/icons-material/Task';
import Link from "next/link"

export default function MenuSidebar(){
    
    const [collapsed, setCollapsed] = useState(false)
    
    return (
        <Sidebar 
            style={{ height: "100vh", padding: "0px", margin: "0px" }} 
            collapsed={collapsed} 
            collapsedWidth="55px"
            rootStyles={{
                [`.${sidebarClasses.container}`]: {
                    backgroundColor: "#f3f3f3",
                    color: "#1976d2"
                }
            }}
            >
            <Menu
                menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                        if (level === 0)
                            return {
                                color: disabled ? '#1976d2' : '#1976d2',
                                backgroundColor: active ? 'red' : undefined
                            }
                    },
                }}
            >
                <Row style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#f3f3f3", borderBottom: "1px solid black" }}>
                    <Col style={{ display: "flex", justifyContent: "center" }}>
                        {/* <p style={collapsed == false ? {color: "#1976d2", paddingLeft: "30px"} : { width: "0px", height: "0px", transition: "width 3s, height 3s", color: "transparent" }}>Nome da sistema</p> */}
                    </Col>
                    <Col style={{ padding: "0px", margin: "0px", justifyContent: "flex-end" }}>
                        <Button style={{ backgroundColor: "#f3f3f3", padding: "15px", boxShadow: "0px -3px 10px rgb(0 0 0 / 0.2)" }} onClick={() => setCollapsed(!collapsed)}>
                            <MenuIcon fontSize="medium" color="primary"/>
                        </Button>
                    </Col>
                </Row>
                <MenuItem 
                    component={<Link href="/dashboard"></Link>}
                    style={{ padding: "15px" }}
                >
                    <Row style={{ display: "flex" }}>
                        <CurrencyExchangeIcon />
                        <p style={{ paddingLeft: "30px" }}> Gráficos </p>
                    </Row>
                </MenuItem>
                <MenuItem
                    component={<Link href="/report"></Link>}
                    style={{ padding: "15px" }}
                > 
                    <Row style={{ display: "flex" }}>
                        <TaskIcon />
                        <p style={{ paddingLeft: "30px" }}> Relatórios </p>
                    </Row>
                </MenuItem>
            </Menu>
        </Sidebar>
    )
}
