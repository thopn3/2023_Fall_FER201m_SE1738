import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <Row style={{marginBottom: '30px'}}>
            <Col>
                <Row>
                    <Col>
                        <h1 style={{textAlign:'center', marginBottom:'20px'}}>Admin page</h1>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign:'left'}}>
                        <Link to={'/'}>Home</Link>
                    </Col>
                    <Col style={{textAlign:'right'}}>
                        <Link to={'/logout'}>Logout</Link>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}