import React, { useState } from "react";
import { createEmployee } from "../services/EmployeeService";
import type { Employee } from "../services/EmployeeService";

type Props = {};

const EmployeeComponent: React.FC<Props> = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // Simple validation
    const newErrors = {
      firstName: firstName ? "" : "First name is required",
      lastName: lastName ? "" : "Last name is required",
      email: email
        ? /\S+@\S+\.\S+/.test(email)
          ? ""
          : "Invalid email format"
        : "Email is required",
    };

    setErrors(newErrors);

    // If any error exists, stop submission
    if (Object.values(newErrors).some((err) => err !== "")) {
      return;
    }

    const newEmployee: Employee = { firstName, lastName, email };

    try {
      const response = await createEmployee(newEmployee);
      console.log("✅ Employee created:", response.data);

      // Clear form only if success
      setFirstName("");
      setLastName("");
      setEmail("");
    } catch (error) {
      console.error("❌ Error creating employee:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg rounded-3">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">Create Employee</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} noValidate>
            {/* First Name */}
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <div className="invalid-feedback">{errors.firstName}</div>
              )}
            </div>

            {/* Last Name */}
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && (
                <div className="invalid-feedback">{errors.lastName}</div>
              )}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
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
  );
};

export default EmployeeComponent;
