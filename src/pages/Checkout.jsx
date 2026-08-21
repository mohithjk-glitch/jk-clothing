import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { placeOrder } from '../data/api.js';

const FIELDS = [
  { name: 'fullName', label: 'Full Name', full: true },
  { name: 'mobile', label: 'Mobile Number' },
  { name: 'email', label: 'Email' },
  { name: 'houseNo', label: 'House / Door No' },
  { name: 'street', label: 'Street' },
  { name: 'city', label: 'City' },
  { name: 'district', label: 'District' },
  { name: 'state', label: 'State' },
  { name: 'pincode', label: 'Pincode' },
];

function validate(form) {
  const errors = {};
  if (!form.fullName?.trim()) errors.fullName = 'Full name is required.';
  if (!/^[6-9]\d{9}$/.test(form.mobile || '')) errors.mobile = 'Enter a valid 10-digit mobile number.';
  if (!/^\S+@\S+\.\S+$/.test(form.email || '')) errors.email = 'Enter a valid email address.';
  if (!form.houseNo?.trim()) errors.houseNo = 'Required.';
  if (!form.street?.trim()) errors.street = 'Required.';
  if (!form.city?.trim()) errors.city = 'Required.';
  if (!form.district?.trim()) errors.district = 'Required.';
  if (!form.state?.trim()) errors.state = 'Required.';
  if (!/^\d{6}$/.test(form.pincode || '')) errors.pincode = 'Enter a valid 6-digit pincode.';
  return errors;
}

export default function Checkout() {
  const { lines, subtotal, discount, delivery, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => { document.title = 'Checkout — J&K'; }, []);

  useEffect(() => {
    if (lines.length === 0) navigate('/cart');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const firstField = document.querySelector('.field input.error');
      firstField?.focus();
      return;
    }

    setSubmitting(true);
    const orderPayload = {
      customer: form,
      items: lines,
      paymentMethod: 'Cash on Delivery',
      subtotal,
      discount,
      delivery,
      total,
    };

    try {
      const order = await placeOrder(orderPayload);
      clearCart();
      navigate('/order-confirmation', { state: { order } });
    } catch {
      setSubmitting(false);
    } finally {
      setSubmitting(false);
    }
  }

  if (lines.length === 0) return null;

  return (
    <div className="container section-tight">
      <div className="page-banner" style={{ paddingTop: 0 }}>
        <span className="eyebrow">Checkout</span>
        <h1>Delivery &amp; Payment</h1>
      </div>

      <form className="checkout-layout" style={{ marginTop: 40 }} onSubmit={onSubmit} noValidate>
        <div>
          <div className="checkout-section">
            <h3>Contact &amp; Delivery Address</h3>
            <div className="form-grid">
              {FIELDS.map((f) => (
                <div className={`field${f.full ? ' full' : ''}`} key={f.name}>
                  <label htmlFor={f.name}>{f.label}</label>
                  <input
                    id={f.name}
                    name={f.name}
                    value={form[f.name] || ''}
                    onChange={onChange}
                    className={errors[f.name] ? 'error' : ''}
                    autoComplete="on"
                  />
                  {errors[f.name] && <p className="field-error">{errors[f.name]}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="checkout-section">
            <h3>Payment Method</h3>
            <label className="payment-option selected">
              <input type="radio" name="payment" checked readOnly />
              <div>
                <div className="po-title">Cash on Delivery</div>
                <div className="po-sub">Pay when your order arrives.</div>
              </div>
            </label>
          </div>
        </div>

        <div className="summary-card">
          <h4>Order Summary</h4>
          <div className="mini-cart-list">
            {lines.map((l) => (
              <div className="mini-cart-row" key={l.key}>
                <img src={l.image} alt={l.name} />
                <div>
                  <div className="mcr-name">{l.name}</div>
                  <div className="mcr-meta">{l.size} · {l.color} · Qty {l.quantity}</div>
                </div>
                <span className="mcr-price">₹{(l.price * l.quantity).toLocaleString('en-IN')}</span>
              </div>
            ))}
          </div>
          <div className="summary-row" style={{ marginTop: 16 }}>
            <span>Subtotal</span>
            <span className="val">₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-row">
            <span>Discount</span>
            <span className="val">− ₹{discount.toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span className="val">{delivery === 0 ? 'Free' : `₹${delivery}`}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span className="val">₹{total.toLocaleString('en-IN')}</span>
          </div>
          <button className="btn btn-primary btn-block" type="submit" disabled={submitting}>
            {submitting ? 'Placing Order…' : 'Place Order'}
          </button>
          <Link to="/cart" className="btn btn-outline btn-block" style={{ marginTop: 12 }}>Back to Bag</Link>
        </div>
      </form>
    </div>
  );
}
