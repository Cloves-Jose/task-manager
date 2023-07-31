"use client"
import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"

export default function ButtonDashboard(props: any){

    const [color, setColor] = useState("")

    useEffect(() => {
        setColor(props.color)
    }, [])

    return (
        <Container fluid style={{ backgroundColor: color, width: "18vw", height: "20vh", borderRadius: "15px", margin: "1vw", alignItems: "center", justifyContent: "center" }}>
            <Row style={{ padding: "1vw", display: "flex", alignItems: "center" }}>
                <Col>
                    <p style={{ fontSize: "0.8rem" }}>{props.title}</p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p style={{ fontSize: "2.1rem" }}>{props.value}</p>
                        <span style={{ paddingLeft: "1vw" }}>{props.icons}</span>
                    </div>
                    <div style={{ backgroundColor: "#f3f3f3", width: "4vw", borderRadius: "15px", justifyContent: "center", alignItems: "center", display: "flex", marginTop: "1vh" }}>
                        <p style={{ color: color, padding: "0.5vw", paddingLeft: "0.5vw" }}>{props.percent}%</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}