import React, { useEffect, useState } from "react";
import axios from "axios"; // make sure axios is installed: npm install axios

// ✅ Component that displays the table
const ListEmployeeComponent = ({ employees }: { employees: any[] }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header bg-primary">
          <h2>List of Employees</h2>
        </div>
        <div className="card-body">
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr style={{ background: "#f2f2f2" }}>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>First Name</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Last Name</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>{emp.id}</td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>{emp.firstName}</td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>{emp.lastName}</td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>{emp.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const ListEmployeeController = () => {
  const [employees, setEmployees] = useState<any[]>([]);

  useEffect(() => {
    // Replace with your backend API endpoint (Laravel, Express, etc.)
    axios
      .get("http://localhost:8080/api/employees") 
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []); // runs once on component mount

  return (
    <div>
      <ListEmployeeComponent employees={employees} />
    </div>
  );
};

export default ListEmployeeController;
