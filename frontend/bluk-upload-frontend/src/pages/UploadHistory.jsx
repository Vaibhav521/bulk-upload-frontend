import { useState, useEffect } from "react";
import { fetchUploadHistory } from "../services/api";

function UploadHistory() {
    const [uploads, setUploads] = useState([]);

    const fetchData = async () => {
        const res = await fetchUploadHistory();
        setUploads(res);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Upload History</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {uploads.map((upload) => (
                    <li
                        key={upload._id}
                        className="border rounded-lg border-gray-300 p-6  transform hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        <div className="flex flex-col justify-between h-full">
                            <div className="space-y-4">
                                <p className="text-lg font-semibold text-gray-800">
                                    {new Date(upload.createdAt).toLocaleString()}
                                </p>
                                <span
                                    className={`inline-block px-2 py-1 text-sm font-semibold rounded-full ${upload.isSuccessful ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                                >
                                    {upload.isSuccessful ? "Success" : "Failed"}
                                </span>
                                <p className="text-sm text-gray-500">
                                    Documents: <span className="font-semibold">{upload.totalDocuments}</span>
                                </p>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UploadHistory;
