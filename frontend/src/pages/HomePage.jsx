import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product';
import { useEffect, useState } from 'react';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/api/v1/products")
         .then((resp) => resp.json())
         .then((data) => setProducts(data))
         .catch((err) => console.log("Error::", err.message));
    }, []);
    return(
    <>
        <h2>
            Latest Products
        </h2>
        <Row>
            {
                products.map(product => (
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                    <Product product={product}/>
                </Col>
                ))
            }
        </Row>
    </>
    )
}

export default HomePage;