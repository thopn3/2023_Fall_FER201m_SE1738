import { useEffect, useState } from "react"
import { Table } from 'react-bootstrap'
import axios from 'axios'
import { Link } from "react-router-dom";

export default function Product() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9999/categories")
            .then(res => {
                setCategories(res.data);
                axios.get("http://localhost:9999/products")
                    .then(res => setProducts(res.data))
                    .catch(err => console.log(err))
            })
    }, []);

    return (
        <div>
            <h2>List of Products</h2>
            <Link to={'/products/create'}>Create a new Product</Link>
            <hr></hr>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Price</th><th>Category</th><th>Supplier</th><th colSpan={2}></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(p => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                                <td>
                                    {
                                        categories.find(c => c.id == p.catId).name
                                    }
                                </td>
                                <td>{p.supId}</td>
                                <td>
                                    <Link to={'/products/edit/' + p.id}>Edit</Link>
                                </td>
                                <td>
                                    <Link to={'/products/delete/' + p.id}>Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}