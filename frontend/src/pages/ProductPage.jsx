import React, { useEffect, useState } from "react";
import { Col, Row, Image, ListGroup, Button, Form } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { useGetProductByIdQuery } from "../slices/productSlice";

const ProductPage = () => {
  // const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   axios
  //     .get("/api/v1/products/" + id)
  //     .then((resp) => setProduct(resp.data))
  //     .catch((err) => console.log("ERROR::", err.message));
  // }, []);
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
  };
  return (
    <>
      {isLoading ? (
        <h6>Loading...</h6>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={product.image} fluid />
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Price: {product.price}</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} text={product.numReviews} />
              </ListGroup.Item>
              <ListGroup.Item>
                <span>{product.description}</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Control
                  as="select"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1}>{x + 1}</option>
                  ))}
                </Form.Control>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  variant="secondary"
                  disabled={product.countInStock === 0}
                  onClick={() =>
                    addToCartHandler({ ...product, qty: Number(qty) })
                  }
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductPage;
