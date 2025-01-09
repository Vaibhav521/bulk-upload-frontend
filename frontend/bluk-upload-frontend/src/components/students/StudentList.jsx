import { useState, useEffect } from 'react';
import { StudentTable } from './StudentTable';
import { Loading } from '../common/Loading';
import { ErrorMessage } from '../common/ErrorMessage';
import { fetchStudents } from '../../services/api';
import { PaginationControls } from '../common/PaginationControls';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    totalPages: 0,
    currentPage: 1,
    limit: 10,
  });

  useEffect(() => {
    const getStudents = async () => {
      try {
        setLoading(true);
        const res = await fetchStudents(pagination.currentPage, pagination.limit);
        setStudents(res.data);
        setPagination((prev) => ({
          ...prev,
          totalPages: res.total,
        }));
      } catch (err) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    getStudents();
  }, [pagination.currentPage]);

  const pageDataChange = (pageNumber) => {
    setPagination((prev) => ({
      ...prev,
      currentPage: pageNumber,
    }));
  };


  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      {students.length > 0 ? (
        <>
          <StudentTable students={students} />
          <PaginationControls
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={pageDataChange}
          />
        </>
      ) : (
        <div className="flex justify-center items-center h-64">
          <h1 className="text-4xl font-semibold text-gray-500">No Students</h1>
        </div>
      )}

    </div>
  );
};

export default StudentList;

