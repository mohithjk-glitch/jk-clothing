import { useEffect } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { CheckIcon } from '../components/Icons.jsx';

export default function OrderConfirmation() {
  const { state } = useLocation();
  const order = state?.order;

  useEffect(() => { document.title = 'Order Confirmed — J&K'; }, []);

  if (!order) return <Navigate to="/shop" replace />;

  const address = order.customer;
  const fullAddress = `${address.houseNo}, ${address.street}, ${address.city}, ${address.district}, ${address.state} - ${address.pincode}`;

  return (
    <div className="container section confirm-wrap">
      <div className="confirm-check"><CheckIcon /></div>
      <h1>Order Confirmed!</h1>
      <p className="confirm-sub">Thank you for shopping with J&amp;K.</p>

      <div className="confirm-card">
        <div className="confirm-row">
          <span>Order ID</span>
          <span className="val">{order.id}</span>
        </div>
        <div className="confirm-row">
          <span>Customer Name</span>
          <span className="val">{address.fullName}</span>
        </div>
        <div className="confirm-row">
          <span>Ordered Products</span>
          <span className="val">
            {order.items.map((l) => `${l.name} (${l.size}) × ${l.quantity}`).join(', ')}
          </span>
        </div>
        <div className="confirm-row">
          <span>Total Amount</span>
          <span className="val">₹{order.total.toLocaleString('en-IN')}</span>
        </div>
        <div className="confirm-row">
          <span>Delivery Address</span>
          <span className="val">{fullAddress}</span>
        </div>
        <div className="confirm-row">
          <span>Payment Method</span>
          <span className="val">{order.paymentMethod}</span>
        </div>
      </div>

      <div className="confirm-actions">
        <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
        <a
          href="https://wa.me/919994012589?text=Hi%20J%26K%2C%20I%27d%20like%20to%20ask%20about%20my%20order."
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline"
        >
          Contact J&amp;K
        </a>
      </div>
    </div>
  );
}
