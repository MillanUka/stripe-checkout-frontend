import React, { useState, useEffect } from "react";
import "./App.css";
function ProductDisplay() {
  return (
    <section>
      <div>
        <form
          action={`${process.env.REACT_APP_BACKEND_BASE_URL}/create-checkout-session`}
          method="POST"
        >
          Pay me $10
          <br />
          <button type="submit">Checkout</button>
        </form>
      </div>
      ``
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

  return (
    <div className="App">
      {message ? <Message message={message} /> : <ProductDisplay />}
    </div>
  );
}

export default App;
