import { Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Product() {
    return (
        <Row>
            <Col>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <h3>Product Management</h3>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <input type='text' placeholder="Enter product name to search ..."
                            style={{ width: '50%', lineHeight: '30px' }} />
                    </Col>
                </Row>
                <Row>
                    <Col style={{ textAlign: 'right' }}>
                        <Link to='/product/create'>Create a new Product</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}