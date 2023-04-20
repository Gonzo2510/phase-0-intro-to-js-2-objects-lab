// Write your solution in this file!

const employee = {
    name: "Jacob Gonzales",
    streetAddress: "2228 Blake St, Ste 100, · Denver, CO 80205" 
};
  

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return{
        ...employee,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] =  value
    
    return employee;
}

function  deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee};
    delete newObj[key]; 
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;
}



