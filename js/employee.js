function loadEmployees() {
    // This would typically be an API call to fetch employee data
    const employees = [
        { name: 'John Doe', department: 'HR', jobTitle: 'Manager' },
        { name: 'Jane Smith', department: 'IT', jobTitle: 'Developer' },
        { name: 'Sam Brown', department: 'Finance', jobTitle: 'Analyst' }
    ];

    const tableBody = document.getElementById('employeeTableBody');
    tableBody.innerHTML = '';

    employees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.jobTitle}</td>
            <td>
                <button onclick="viewEmployee('${employee.name}')">View</button>
                <button onclick="editEmployee('${employee.name}')">Edit</button>
                <button onclick="deleteEmployee('${employee.name}')">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function viewEmployee(name) {
    alert(`Viewing details for ${name}`);
    // Redirect to employee detail page or show modal
}

function editEmployee(name) {
    alert(`Editing details for ${name}`);
    // Redirect to employee edit page or show modal
}

function deleteEmployee(name) {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
        alert(`${name} has been deleted.`);
        // Perform delete operation
    }
} 