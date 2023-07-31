import { Row } from "react-bootstrap"
import { MenuItem } from "react-pro-sidebar"
import Link from "next/link"

export default function MenuItemSidebar(props: any){
    return (
        <MenuItem component={<Link href={props.route}></Link>} style={{ padding: "15px" }}>
            <Row style={{ display: "flex" }}>
                {props.icon}
                <p style={{ paddingLeft: "30px" }}> {props.title} </p>
            </Row>
        </MenuItem>
    )
}