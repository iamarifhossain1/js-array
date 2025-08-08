const number = [1, 2, 3, 4, 5, 6];
const players = [{}, {}, {}];
const employees = [
    {Name: 'Arif Hossain', Designation: 'Content Writer', Salary: 20000},
    {Name: 'Atik Ahmed', Designation: 'Web Developer', Salary: 30000},
    {Name: 'Ahad Rahman', Designation: 'Graphics Designer', Salary: 25000},
    {Name: 'Atul Islam', Designation: 'Video Editor', Salary: 25000}
]

employees[0].Name = 'Sporsho Ahmed';

// console.log(employees[3].Designation);

// For of Loop

for (const employee of employees) {
    // console.log(employee.Name, employee.Designation);
}

for (const emp of employees) {
    person = emp;
    personInfo = "Name:" + ' ' + person.Name + ' ' + 'Salary:' + ' '+  person.Salary;
    console.log(personInfo);
    
}

// change the array value 

