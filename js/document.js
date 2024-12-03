function loadDocuments() {
    // Simulated documents data (would come from API in real application)
    const documents = [
        { id: 1, name: 'Contract_2024.pdf', type: 'contract', date: '2024-01-15' },
        { id: 2, name: 'Performance_Review.pdf', type: 'review', date: '2023-12-20' },
        { id: 3, name: 'ISO.Certification.pdf', type: 'certification', date: '2023-11-05' }
    ];

    const documentsContainer = document.getElementById('documentsList');
    documentsContainer.innerHTML = '';

    documents.forEach(doc => {
        const docElement = document.createElement('div');
        docElement.className = 'document-item';
        docElement.innerHTML = `
            <div class="doc-info">
                <span class="doc-name">${doc.name}</span>
                <span class="doc-type">${doc.type}</span>
                <span class="doc-date">${doc.date}</span>
            </div>
            <div class="doc-actions">
                <button onclick="viewDocument(${doc.id})">View</button>
                <button onclick="deleteDocument(${doc.id})">Delete</button>
            </div>
        `;
        documentsContainer.appendChild(docElement);
    });
}

function handleDocumentUpload(event) {
    event.preventDefault();
    const documentType = document.getElementById('documentType').value;
    const file = document.getElementById('documentFile').files[0];
    
    if (file) {
        // In a real application, this would be an API call to upload the file
        alert(`Document "${file.name}" of type "${documentType}" uploaded successfully!`);
        loadDocuments(); // Reload the documents list
    }
    return false;
}

function viewDocument(id) {
    // In a real application, this would download or display the document
    alert(`Viewing document ${id}`);
}

function deleteDocument(id) {
    if (confirm('Are you sure you want to delete this document?')) {
        // In a real application, this would be an API call to delete the document
        alert(`Document ${id} deleted successfully!`);
        loadDocuments(); // Reload the documents list
    }
} 