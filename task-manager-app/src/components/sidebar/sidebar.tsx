"use client"

import { useState } from "react"
import { Button, Row, Col } from "react-bootstrap"
import { Sidebar, Menu, sidebarClasses } from "react-pro-sidebar"
import MenuIcon from '@mui/icons-material/Menu'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import TaskIcon from '@mui/icons-material/Task';
import HomeIcon from '@mui/icons-material/Home';
import MenuItemSidebar from "./menuItemSidebar"

export default function MenuSidebar(){
    
    const [collapsed, setCollapsed] = useState(false)
    
    return (
        <Sidebar 
            className="menu-item"
            style={{ height: "100vh", padding: "0px", margin: "0px" }} 
            collapsed={collapsed} 
            collapsedWidth="55px"
            rootStyles={{
                [`.${sidebarClasses.container}`]: {
                    backgroundColor: "#E5E4E2",
                    color: "#1976d2"
                }
            }}
            >
            <Menu>

                <Row style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#E5E4E2", borderBottom: "1px solid black" }}>
                    <Col style={{ display: "flex", justifyContent: "center" }}>
                        {/* <p style={collapsed == false ? {color: "#1976d2", paddingLeft: "30px"} : { width: "0px", height: "0px", transition: "width 3s, height 3s", color: "transparent" }}>Nome da sistema</p> */}
                    </Col>
                    <Col style={{ padding: "0px", margin: "0px", justifyContent: "flex-end" }}>
                        <Button style={{ backgroundColor: "#E5E4E2", padding: "15px", boxShadow: "0px -3px 10px rgb(0 0 0 / 0.2)" }} onClick={() => setCollapsed(!collapsed)}>
                            <MenuIcon fontSize="medium" color="primary"/>
                        </Button>
                    </Col>
                </Row>

                <MenuItemSidebar route="/" icon={<HomeIcon/>} title="Home"/>
                <MenuItemSidebar route="/sales" icon={<CurrencyExchangeIcon />} title="Vendas"/>
                <MenuItemSidebar route="/report" icon={<TaskIcon />} title="Relatórios"/>
            </Menu>
        </Sidebar>
    )
}
