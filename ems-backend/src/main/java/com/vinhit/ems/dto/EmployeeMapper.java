package com.vinhit.ems.dto;

import com.vinhit.ems.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto emPloyeeDtoMapper(Employee employee){
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()

        );

    }
    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),

                employeeDto.getLastName(),
                employeeDto.getEmail()
        );

    }
}
