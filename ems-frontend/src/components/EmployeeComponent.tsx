import React, { useState } from "react";
import { createEmployee } from "../services/EmployeeService";
import type { Employee } from "../services/EmployeeService";

type Props = {};

const EmployeeComponent: React.FC<Props> = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async () => {
    const newEmployee: Employee = { firstName, lastName, email };

    try {
      const response = await createEmployee(newEmployee);
      console.log("✅ Employee created:", response.data);
    } catch (error) {
      console.error("❌ Error creating employee:", error);
    }

    // Clear form
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-3">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Save Employee
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
