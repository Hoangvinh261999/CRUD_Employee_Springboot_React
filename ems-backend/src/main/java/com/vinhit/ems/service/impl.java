package com.vinhit.ems.service;

import com.vinhit.ems.dto.EmployeeDto;
import com.vinhit.ems.dto.EmployeeMapper;
import com.vinhit.ems.entity.Employee;
import com.vinhit.ems.exception.ResourcesNotFoundException;
import com.vinhit.ems.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class impl implements EmployeeService{
    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee= EmployeeMapper.mapToEmployee(employeeDto);
       Employee savedEmployee= employeeRepository.save(employee);
        return EmployeeMapper.emPloyeeDtoMapper(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
          Employee employee=  employeeRepository.findById(employeeId).orElseThrow(()->new ResourcesNotFoundException("Employee Not Exits with ID:"+employeeId));
        return EmployeeMapper.emPloyeeDtoMapper(employee);
    }

    @Override
    public List<EmployeeDto> findAllEmployee() {
        List<Employee> listEm=employeeRepository.findAll();
        return listEm.stream().map(employee->EmployeeMapper.emPloyeeDtoMapper(employee)).collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long emId, EmployeeDto updateEmployee) {
        Employee employee=employeeRepository.findById(emId).orElseThrow(
                ()->new ResourcesNotFoundException("Employee Not Exits with ID:"+emId));
        employee.setFirstName(updateEmployee.getFirstName());
        employee.setLastName(updateEmployee.getLastName());
        employee.setEmail(updateEmployee.getEmail());
        Employee emUpdated=employeeRepository.save(employee);
        return EmployeeMapper.emPloyeeDtoMapper(emUpdated);
    }

    @Override
    public void deleteEmployeee(Long id) {
        Employee employee=  employeeRepository.findById(id).orElseThrow(()->new ResourcesNotFoundException("Employee Not Exits with ID:"+id));
        employeeRepository.deleteById(id);
    }


}
