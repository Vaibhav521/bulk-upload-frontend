import { useState } from "react";
import { fetchStudents, uploadFile } from "../../services/api";

function UploadBtnModal() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(null);

    const handleSendFile = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const data = await uploadFile(file);
            setLoading(false);
            setIsOpen(false);
            window.location.reload(); 
        } catch (err) {
            console.error(err);
            setLoading(false);
            setError(err.message);
        }
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file.type !== 'text/csv') {
            setError('Only CSV files are allowed');
            setFile(null);
        } else {
            setError(null);
            setFile(file);
        }
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className="flex items-center rounded-md bg-[#6A64F1] py-2 px-4 text-white"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 mr-2">
                    <path d="M9.25 13.25a.75.75 0 0 0 1.5 0V4.636l2.955 3.129a.75.75 0 0 0 1.09-1.03l-4.25-4.5a.75.75 0 0 0-1.09 0l-4.25 4.5a.75.75 0 1 0 1.09 1.03L9.25 4.636v8.614Z" />
                    <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                </svg>
                Upload CSV
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-full max-w-[550px] bg-white p-6 rounded-md">
                        <button onClick={toggleModal} className="absolute top-2 right-2 text-gray-500">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12.414l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z"
                                    fill="currentColor" />
                            </svg>
                        </button>
                        <form className="space-y-4" onSubmit={handleSendFile}>
                            <div>
                                <label className="block text-base font-medium text-gray-700 pb-2">
                                    Upload File
                                </label>
                                <input type="file" name="file" id="file" className="sr-only" onChange={handleChange} />
                                <label htmlFor="file" className="flex items-center justify-center h-32 border-2 border-dashed rounded-md cursor-pointer">
                                    <span className="text-gray-600">Drop .csv files here or click to upload</span>
                                </label>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="truncate text-base font-medium text-gray-700">
                                    {file ? file.name : 'No file selected'}
                                </span>
                                {error && <span className="text-red-500">{error}</span>}
                            </div>
                            <div>
                                {loading ? (
                                    <button type="submit" className="w-full rounded-md bg-indigo-600 py-2 text-white" disabled>
                                        Sending...
                                    </button>
                                ) : (
                                    <button type="submit" className="w-full rounded-md bg-indigo-600 py-2 text-white" disabled={!file}>
                                        Send File
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default UploadBtnModal;
