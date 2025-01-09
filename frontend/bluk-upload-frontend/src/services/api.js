export const fetchStudents = async (page, limit) => {
    const response = await fetch(`http://localhost:3000/upload?page=${page}&limit=${limit}`);
    if (!response.ok) {
        throw new Error('Failed to fetch students');
    }
    return response.json();
};

export const fetchStudentById = async (id) => {
    const response = await fetch(`http://localhost:3000/upload/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch student');
    }
    return response.json();
};



export const fetchUploadHistory = async () => {
    const response = await fetch(`http://localhost:3000/upload/history`);
    if (!response.ok) {
        throw new Error('Failed to fetch history');
    }
    return response.json();
};


export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to upload file');
    }

    return response.json();
};