import axios from "axios";


// ✅ export type so other files can use it
export type Employee = {
  firstName: string;
  lastName: string;
  email: string;
};

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const listEmployees = () => {
  return axios.get<Employee[]>(REST_API_BASE_URL);
};

export const createEmployee = (employee: Employee) => {
  return axios.post<Employee>(REST_API_BASE_URL, employee);
};