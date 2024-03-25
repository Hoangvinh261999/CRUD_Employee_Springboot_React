package com.vinhit.ems.controller;

import com.vinhit.ems.dto.EmployeeDto;
import com.vinhit.ems.entity.Employee;
import com.vinhit.ems.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    //Build app employee RestAPI
    @PostMapping
    public ResponseEntity<EmployeeDto>createEmployee(@RequestBody EmployeeDto employeeDto){
         EmployeeDto savedEmployee= employeeService.createEmployee(employeeDto);
         return  new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto>findEmployeeByid(@PathVariable Long id){
        EmployeeDto findEmployee= employeeService.getEmployeeById(id);
        return new ResponseEntity<>(findEmployee, HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity<List<EmployeeDto>>findAllEmployee(){
        List<EmployeeDto> findAll= employeeService.findAllEmployee();
        return  ResponseEntity.ok(findAll);
    }
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto>updateEmployee(@PathVariable Long id,
                                                     @RequestBody EmployeeDto employeeDto){
        EmployeeDto employee= employeeService.updateEmployee(id,employeeDto);
        return  ResponseEntity.ok(employee);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String>deleteEmployee(@PathVariable Long id){
      employeeService.deleteEmployeee(id);
        return  ResponseEntity.ok("Delete Succesfulled ");
    }
}
