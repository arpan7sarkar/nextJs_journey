import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";

const App = () => {
  const [queue, setQueue] = useState([]);
  const addToQueue = (customers) => {
    setQueue([...queue, { ...customers, id: Date.now(), status: "waiting" }]);
  };
  const removeFromQueue = (id) => {};
  const updateStatus = (id, newStatus) => {};
  return (
    <div>
      <header>
        <h1>Queue Management</h1>
        <p>Manage your customers efficiently</p>
      </header>

      <main>
        <QueueForm onAdd={addToQueue} />
        <h1>Queue display</h1>
      </main>
    </div>
  );
};

export default App;
