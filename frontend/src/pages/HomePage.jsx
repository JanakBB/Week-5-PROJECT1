import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product';
import products from '../data';

const HomePage = () => {
    return(
    <>
        <h2>
            Latest Products
        </h2>
        <Row>
            {
                products.map(product => (
                <Col sm={12} md={6} lg={4} xl={3} >
                    <Product product={product}/>
                </Col>
                ))
            }
        </Row>
    </>
    )
}

export default HomePage;