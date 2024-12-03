function initializeCharts() {
    createAttendanceChart();
    createDepartmentChart();
    createLeaveChart();
}

function createAttendanceChart() {
    const ctx = document.getElementById('attendanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Present',
                data: [95, 92, 88, 94, 90, 85],
                borderColor: '#4f46e5',
                tension: 0.4
            }, {
                label: 'Absent',
                data: [5, 8, 12, 6, 10, 15],
                borderColor: '#ef4444',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Monthly Attendance Trends'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function createDepartmentChart() {
    const ctx = document.getElementById('departmentChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['IT', 'HR', 'Finance', 'Marketing', 'Operations'],
            datasets: [{
                data: [30, 15, 20, 25, 10],
                backgroundColor: [
                    '#4f46e5',
                    '#06b6d4',
                    '#10b981',
                    '#f59e0b',
                    '#ef4444'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                },
                title: {
                    display: true,
                    text: 'Employee Distribution by Department'
                }
            }
        }
    });
}

function createLeaveChart() {
    const ctx = document.getElementById('leaveChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Annual', 'Sick', 'Personal', 'Maternity', 'Other'],
            datasets: [{
                label: 'Leave Days Taken',
                data: [120, 80, 40, 60, 20],
                backgroundColor: [
                    '#4f46e5',
                    '#06b6d4',
                    '#10b981',
                    '#f59e0b',
                    '#ef4444'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Leave Distribution by Type'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Function to generate reports based on filters
function generateReport() {
    const reportType = document.getElementById('reportType').value;
    const month = document.getElementById('reportMonth').value;
    const department = document.getElementById('departmentFilter').value;
    
    // Update charts based on filters
    updateChartsData(reportType, month, department);
}

// Function to update charts with new data
function updateChartsData(reportType, month, department) {
    // In a real application, this would fetch data from an API
    // For now, we'll just simulate data updates
    console.log(`Generating ${reportType} report for ${month} in ${department}`);
}

// Export functions
function exportToPDF() {
    // Implement PDF export functionality
    alert('Exporting to PDF...');
}

function exportToExcel() {
    // Implement Excel export functionality
    alert('Exporting to Excel...');
} 