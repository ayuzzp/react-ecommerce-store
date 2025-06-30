import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import products from '../data/db.json'; 
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleBuy = (product) => {
    const alreadyInCart = cartItems.find((item) => item.id === product.id);

    if (alreadyInCart) {
      toast.warn(`${product.name} is already in your cart!`, {
        position: "top-right",
        autoClose: 1000,
      });
    } else {
      dispatch(addToCart(product));
      toast.success(`${product.name} added to cart!`, {
        position: "top-right",
        autoClose: 1000,
      });
    }
  };

  return (
    <>
     <div className="container mt-4">
  <div className="row" >
    {products.Products.map((product) => (
      <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <Card style={{ height: "100%" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text><strong>Price:</strong> ₹{product.price}</Card.Text>
            <Button variant="primary" onClick={() => handleBuy(product)}>Buy Now</Button>
          </Card.Body>
        </Card>
      </div>
    ))}
  </div>
</div>

      <ToastContainer />
    </>
  );
};

export default Cards;
