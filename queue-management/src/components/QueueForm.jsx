import { useState } from "react";

import { FaUserPlus } from "react-icons/fa6";
const QueueForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !service.trim()) return;
    onAdd({ name, service });
    setName("");
    setService("");
  };
  return (
    <div>
      <form className="queue-form">
        <h2>Add to queue</h2>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id=""
          placeholder="Customer Name"
        />
        <div className="form-group">
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select Service</option>
            <option value="consultation">Consultation</option>
            <option value="payment">payment</option>
            <option value="support">support</option>
          </select>
        </div>

        <button type="submit">
          <FaUserPlus />
          Add customers
        </button>
      </form>
    </div>
  );
};

export default QueueForm;
