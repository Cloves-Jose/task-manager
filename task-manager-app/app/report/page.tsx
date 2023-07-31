"use client"
import MenuSidebar from "../../src/components/sidebar/sidebar"
import { Container } from "react-bootstrap"

export default function Report() {
    return (
        <Container style={{ display: "flex" }}>
            <MenuSidebar/>
            <div>Relatórios</div>
        </Container>
    )
}