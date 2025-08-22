import React from 'react'

// ✅ Dummy data goes at the top (outside the component)
const dummyData = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@email.com" },
  { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@email.com" },
  { id: 3, firstName: "Mike", lastName: "Johnson", email: "mike.johnson@email.com" },
]
// ✅ Component that displays the table

const ListEmployeeComponent = ({ employees }: { employees: typeof dummyData }) => {
  return (
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
  )
}
type Props = {
    
}

const ListEmployeeController = (props: Props) => {
  return (
    <div>
      <h2>List of Employees</h2>
      <ListEmployeeComponent employees={dummyData} />
    </div>
  )
}

export default ListEmployeeController