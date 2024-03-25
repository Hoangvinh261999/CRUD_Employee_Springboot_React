import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

// Xuất hàm listEmployees
export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL);
};
export const createEmployee = (emp)=>axios.post(REST_API_BASE_URL,emp);
export const getEmployee = (employeeId)=>axios.get(REST_API_BASE_URL+ '/' +employeeId);
export const updateEmployee=(employeeId,emp)=>axios.put(REST_API_BASE_URL + '/'+ employeeId,emp);
export const deleteEmployee=(employeeId)=>axios.delete(REST_API_BASE_URL + '/'+ employeeId);

