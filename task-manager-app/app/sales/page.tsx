"use client"
import MenuSidebar from "../../src/components/sidebar/sidebar"
import { Container } from "react-bootstrap"

export default function Sales() {
    return (
        <Container className="nopadding" style={{ display: "flex" }}>
            <MenuSidebar/>
            <div>Página de vendas</div>
        </Container>
    )
}