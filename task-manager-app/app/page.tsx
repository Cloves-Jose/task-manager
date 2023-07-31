"use client"
import { Metadata } from "next";
import { Container } from "react-bootstrap";
import MenuSidebar from "../src/components/sidebar/sidebar";

export const metadata: Metadata = {
  title: 'Next.js'
}

export default function Page() {
  return (
    <Container style={{ display: "flex" }}>
      <MenuSidebar/>
      <div>Dashboard do cliente</div>
    </Container>
  )
}
