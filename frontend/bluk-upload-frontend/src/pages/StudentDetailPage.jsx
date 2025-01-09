import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchStudentById } from '../services/api';

function StudentDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        const fetchStudent = async () => {
            const student = await fetchStudentById(id);
            setStudent(student);
        };
        fetchStudent();
    }, [id]);

    if (!student) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="text-xl">Loading...</span>
            </div>
        );
    }

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center justify-between border-b pb-4 mb-6">
                    <h1 className="text-4xl font-semibold text-gray-800">{student.name}</h1>
                    <p className="text-lg text-gray-600">{student.rollNumber}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-xl font-semibold text-gray-700">Age</p>
                        <p className="text-lg text-gray-600">{student.age}</p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-gray-700">Phone Number</p>
                        <p className="text-lg text-gray-600">{student.phoneNumber}</p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-gray-700">Address</p>
                        <p className="text-lg text-gray-600">{student.address}</p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-gray-700">Zipcode</p>
                        <p className="text-lg text-gray-600">{student.zipcode}</p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-gray-700">Father's Name</p>
                        <p className="text-lg text-gray-600">{student.fatherName}</p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-gray-700">Mother's Name</p>
                        <p className="text-lg text-gray-600">{student.motherName}</p>
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <button className="bg-[#6A64F1] text-white font-bold py-2 px-4 rounded" onClick={goBack}>
                        Back
                    </button>
                </div>

            </div>
        </div>
    );
}

export default StudentDetailPage;

