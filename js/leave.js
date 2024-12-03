function loadLeaveRequests() {
    // Simulated leave requests data (would come from API in real application)
    const requests = [
        { id: 1, type: 'annual', startDate: '2024-03-01', endDate: '2024-03-05', status: 'pending' },
        { id: 2, type: 'sick', startDate: '2024-02-15', endDate: '2024-02-16', status: 'approved' },
        { id: 3, type: 'personal', startDate: '2024-02-10', endDate: '2024-02-10', status: 'rejected' }
    ];

    const requestsList = document.getElementById('leaveRequestsList');
    requestsList.innerHTML = '';

    requests.forEach(request => {
        const requestElement = document.createElement('div');
        requestElement.className = `leave-request-item ${request.status}`;
        requestElement.innerHTML = `
            <div class="request-info">
                <span class="request-type">${request.type}</span>
                <span class="request-dates">${request.startDate} to ${request.endDate}</span>
                <span class="request-status">${request.status}</span>
            </div>
            ${request.status === 'pending' ? `
                <div class="request-actions">
                    <button onclick="cancelRequest(${request.id})">Cancel</button>
                </div>
            ` : ''}
        `;
        requestsList.appendChild(requestElement);
    });
}

function submitLeaveRequest(event) {
    event.preventDefault();
    
    const leaveType = document.getElementById('leaveType').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const reason = document.getElementById('reason').value;

    // Validate dates
    if (new Date(startDate) > new Date(endDate)) {
        alert('End date must be after start date');
        return false;
    }

    // In a real application, this would be an API call
    alert('Leave request submitted successfully!');
    
    // Reset form and reload requests
    event.target.reset();
    loadLeaveRequests();
    return false;
}

function cancelRequest(id) {
    if (confirm('Are you sure you want to cancel this leave request?')) {
        // In a real application, this would be an API call
        alert(`Leave request ${id} cancelled successfully!`);
        loadLeaveRequests();
    }
} 