"use client"
import { Metadata } from "next";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MenuSidebar from "../src/components/sidebar/sidebar";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import ButtonDashboard from "@/src/components/buttonDashboard/buttonDashboard";

export const metadata: Metadata = {
  title: 'Next.js'
}

export default function Page() {
  return (
    <Container fluid style={{ display: "flex", backgroundColor: "#f3f3f3" }}>
      <MenuSidebar/>
      <Row style={{ paddingTop: "10px", display: "flex", justifyContent: "center", height: "25vh" }}>
        <Col>
          <ButtonDashboard title="Receira do mês atual" value="15200" percent="12,5" color="#ffb800" icons={<MonetizationOnIcon fontSize="large"/>}/>
        </Col>
        <Col>
          <ButtonDashboard title="Ganho de hoje" value="15200" percent="12,5" color="#3a86fa" icons={<CalendarMonthIcon fontSize="large"/>}/>
        </Col>
        <Col>
          <ButtonDashboard title="Despesas de hoje" value="15200" percent="12,5" color="#f95232" icons={<PointOfSaleIcon fontSize="large"/>}/>
        </Col>
        <Col>
          <ButtonDashboard title="Produtos vendidos" value="15200" percent="12,5" color="#2c9851" icons={<DataThresholdingIcon fontSize="large"/>}/>
        </Col>
      </Row>
    </Container>
  )
}
