package com.vinhit.ems.service;

import com.vinhit.ems.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeById(Long employeeId);
    List<EmployeeDto> findAllEmployee();
    EmployeeDto updateEmployee(Long emId,EmployeeDto updateEmployeee);

    void deleteEmployeee(Long id);
}
