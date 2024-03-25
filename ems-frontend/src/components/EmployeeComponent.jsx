import {useEffect, useState} from 'react'
import { createEmployee, getEmployee, updateEmployee} from '../service/EmployeeService'
import { useNavigate ,useParams} from 'react-router-dom'
const EmployeeComponent = () => {
    const {id}=useParams();
    const navigator= useNavigate();
    useEffect(()=>{
        if(id){
            getEmployee(id).then((response)=>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error=>{
                console.log(error)
            })
        }
    },[id])
    const [errors,setErrors]= useState(
        {
            firstName:'',
            lastName:'',
            email:''
        }
    )

    const [firstName,setFirstName]=useState('')
        const [lastName,setLastName]=useState('')
        const [email,setEmail]=useState('')

 function  saveOrupdateEmployee(e){
    e.preventDefault();
    if(validateForm()){
      const emp={firstName,lastName,email};
        console.log(emp);
        if(id){
            updateEmployee(id,emp).then((response)=>{
                console.log(response.data)
                navigator('/employees')
            }).catch(error=>{
                console.log(error)
            })
        }else{
     createEmployee(emp).then((response)=>{
      console.log(response.data);
     navigator('/employees');
      }).catch(error=>{
        console.log(error)
      })
        }}               
        }
       
function pageTitle(){
    if(id!=null){
        return <h2 className='text-center'>Update Employee</h2>
    }else{
            <h2 className='text-center'>Add Employee</h2>

    }
}

function validateForm(){
    let valid=true;
     const errorsCopy={... errors}
     if(firstName.trim()){
        errorsCopy.firstName='';
     }else{
        errorsCopy.firstName='First Name is required'
        valid=false;
     }
          if(lastName.trim()){
        errorsCopy.lastName='';
     }else{
        errorsCopy.lastName='Last Name is required'
        valid=false;
     }
          if(email.trim()){
        errorsCopy.email='';
     }else{
        errorsCopy.email='Email Name is required'
        valid=false;
     }
     setErrors(errorsCopy)
     return valid;
}

  return (
    <div className='container'>
        <div className='row'>
            <div className='card mt-5'>
                {  pageTitle() }
                <div className='card-body'>
                    <form >
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name:</label>
                            <input 
                                type="text" 
                                placeholder='Enter Emp FirstName' 
                                name='firstName' 
                                value={firstName} 
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} 
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                                                            {errors.firstName&& <div className='invalid-feedback'>{errors.firstName}</div>}

                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name:</label>
                                <input 
                                    type="text" 
                                    placeholder='Enter Emp last name' 
                                    name='lastName' 
                                    value={lastName} 
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} 
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                {errors.lastName&& <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input 
                                type="text" 
                                placeholder='Enter Emp email' 
                                name='email' 
                                value={email} 
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                          {errors.email&& <div className='invalid-feedback'>{errors.email}</div>}

                        </div>
                        <button className='btn btn-success' onClick={saveOrupdateEmployee}> Save Employee</button>
                    </form>

                </div>

            </div>

        </div>

    </div>
  )
}

export default EmployeeComponent