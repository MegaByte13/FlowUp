import {useEffect, useState} from 'react';

export function useControlLogic(){

    const loadEmployees=()=>{
        const savedEmployees=localStorage.getItem('employees');
        return savedEmployees ? JSON.parse(savedEmployees) : [];
    };

    const [employees, setEmployees]=useState(loadEmployees);
    const [isOpen, setIsOpen]=useState(false);
    const [editingEmployee, setEditingEmployee]=useState(null);

    useEffect(()=>{
        localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees]);

    const getStatus=(employee)=>{
        const today=new Date();
        const endContract=new Date(employee.endContract);

        if(endContract < today && employee.onBoard){
            return 'yellow'
        }
        if(endContract < today){
            return 'red';
        }
        
        return 'green';
    }

    const getDaysUntilEnd = (employee) => {
        const today = new Date();
        const endContract = new Date(employee.endContract);
        const diffTime = endContract - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 ? diffDays : 0;
    };

    const addEmployee=(newEmployee)=>{

        if(editingEmployee!==null){
            const updateEmployees=employees.map((emp, index)=>
                index===editingEmployee ? newEmployee : emp);
            setEmployees(updateEmployees);
            setEditingEmployee(null);
        }else{
            setEmployees([...employees, newEmployee])
        }
        setIsOpen(false);
    }

    const deleteEmployee=(index)=>{
        const updateEmployees=employees.filter((_, i) => i !==index);
        setEmployees(updateEmployees);
    }
    const editEmployee=(index)=>{
        setEditingEmployee(index);
        setIsOpen(true);
    }

    return{
        employees,
        isOpen,
        setIsOpen,
        addEmployee,
        deleteEmployee,
        editEmployee,
        editingEmployee,
        setEditingEmployee,
        getStatus,
        getDaysUntilEnd
    }
};

