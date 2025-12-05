import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

const App = () => {
  const [queue, setQueue] = useState([]);
  const addToQueue = (customers) => {
    setQueue([...queue, { ...customers, id: Date.now(), status: "waiting" }]);
  };
  const removeFromQueue = (id) => {
    setQueue(queue.filer((customer) => customer.id !== id));
  };
  const updateStatus = (id, newStatus) =>{
    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer
      )
    );
  }
  return (
    <div>
      <header>
        <h1>Queue Management</h1>
        <p>Manage your customers efficiently</p>
      </header>

      <main>
        <QueueForm onAdd={addToQueue} />
        <QueueDisplay
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </main>
    </div>
  );
};

export default App;
