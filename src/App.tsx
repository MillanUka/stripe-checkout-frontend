import React, { useState, useEffect } from "react";
import "./App.css";

function ProductDisplay() {
  return (
    <section>
      <div className="product">
        <form
          action="http://localhost:8001/create-checkout-session"
          method="POST"
        >
          <button type="submit">Checkout</button>
        </form>
      </div>
    </section>
  );
}

function Message({ message }: { message: string }) {
  return (
    <section>
      <p>{message}</p>
    </section>
  );
}

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order place! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage("Order canceled");
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}

export default App;
