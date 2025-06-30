import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../features/cartSlice';
import { Table, Button, Container, Image } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Stripe publishable key
const stripePromise = loadStripe('pk_test_51ROaAvQaqij1TPIeWTsQJ5rCUY2f0VZknGha1ykmXStvoHbzxjSJ4eevyYjpjs7j9ICaD4p2Tk39u8sk1tqM5mhS00CyEzg8pk');

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    try {
      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItems }),
      });

      const session = await response.json();
      const result = await stripe.redirectToCheckout({ sessionId: session.id });
      if (result.error) console.error(result.error.message);
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2 className="mb-4 text-center text-md-start" style={{ fontFamily: 'Arial, sans-serif' }}>
            🛒 Your Cart
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-center">No items in cart.</p>
          ) : (
            <>
              <div style={{ overflowX: 'auto' }}>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <Image src={item.image} alt={item.name} width="60" height="60" rounded />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>₹{item.price}</td>
                        <td>
                          <div className="d-flex flex-column flex-sm-row align-items-center">
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => dispatch(decreaseQuantity(item.id))}
                              disabled={item.quantity <= 1}
                              className="me-sm-2 mb-1 mb-sm-0"
                            >
                              −
                            </Button>
                            <span>{item.quantity}</span>
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => dispatch(increaseQuantity(item.id))}
                              className="ms-sm-2 mt-1 mt-sm-0"
                            >
                              +
                            </Button>
                          </div>
                        </td>
                        <td><strong>₹{item.price * item.quantity}</strong></td>
                        <td>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            🗑 Remove
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>

              <div className="text-end text-center text-md-end me-md-3 mt-3">
                <h4><strong>Total Amount: ₹{totalAmount}</strong></h4>
                <Button variant="success" size="lg" className="mt-3" onClick={handleCheckout}>
                  Pay with Stripe
                </Button>
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
