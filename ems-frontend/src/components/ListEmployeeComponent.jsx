import {useEffect, useState} from "react"
import { deleteEmployee, listEmployees } from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";
function ListEmployeeComponent() {
    const [employees, setEmployees] = useState([]);
    const navigator= useNavigate();
    useEffect(() => {
            getAllEmployee();
    }, []);

    function getAllEmployee(){
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        });
    }


    function addNewEmPloyee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)

    }
        function removeEmployee(id){
        // navigator(`/edit-employee/${id}`)
        console.log(id);
        deleteEmployee(id).then((response)=>{
                    getAllEmployee();
        }).catch(error =>{
            console.log(error);
        })

    }

  return (
     <div className="container">
                <h1>List employee</h1>
    <table className="table table-success table-striped">
                 <thead>
                        <tr>
                            <th>Em ID</th>
                            <th>Em First Name</th>
                            <th>Em LastName</th>
                            <th>Em Email</th>
                            <th>Actions</th>
                        </tr>

                 </thead>
                 <tbody>
                        {
                            employees.map(employee=>
                                <tr key={employee.id}>
                                 <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td><button className="btn btn-primary" onClick={()=>updateEmployee(employee.id)}>Update</button>
                                <button className="btn btn-danger mx-2" onClick={()=>removeEmployee(employee.id)}>Delete</button>
                                
                                </td>
                            

                             </tr>
                                )
                            

                        }

                 </tbody>
    </table>
    <button type="button" className="btn btn-info" onClick={addNewEmPloyee}>Add Employee</button>

        </div>
  )
}

export default ListEmployeeComponent