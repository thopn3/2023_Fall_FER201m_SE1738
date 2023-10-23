import axios from "axios";
import { useEffect, useState } from "react"
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductPost() {
    const [categories, setCategories] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [pName, setPName] = useState('');
    const [pPrice, setPPrice] = useState(0);
    const [categoryId, setCategoryId] = useState(1);
    const [supplierId, setSupplierId] = useState(1);
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get("http://localhost:9999/categories")
            .then(res => setCategories(res.data))
            .catch(err => console.log(err));

        axios.get("http://localhost:9999/suppliers")
            .then(res => setSuppliers(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        axios.post("http://localhost:9999/products",{
            name: pName,
            price: parseInt(pPrice),
            catId: parseInt(categoryId),
            supId: parseInt(supplierId)
        }).then(res => {
            if(res.status == 201)
                setMessage("Created success.");
        })
    }

    return (
        <div>
            <Link to={'/products'} className="btn btn-success">Back to Products list</Link>
            <h2>Create a new Product</h2>
            {
                message.length > 0 && <Alert variant="success">{message}</Alert>
            }
            <form onSubmit={e=>handleSubmit(e)}>
                <label>Id</label>
                <input disabled /> <br></br>
                <label>Name</label>
                <input onChange={e=>setPName(e.target.value)}/> <br></br>
                <label>Price</label>
                <input onChange={e=>setPPrice(e.target.value)}/> <br></br>
                <label>Category</label>
                <select onChange={e=>setCategoryId(e.target.value)}>
                    <option>-- select category --</option>
                    {
                        categories.map(({ id, name }) => (
                            <option key={id} value={id}>{name}</option>
                        ))
                    }
                </select> <br></br>
                <label>Supplier</label>
                <select onChange={e=>setSupplierId(e.target.value)}>
                    <option>-- select supplier --</option>
                    {
                        suppliers.map(({ id, name }) => (
                            <option key={id} value={id}>{name}</option>
                        ))
                    }
                </select> <br></br>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}