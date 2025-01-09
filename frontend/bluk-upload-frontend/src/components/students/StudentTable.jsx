import { TableHeaders } from './TableHeaders';
import { StudentRow } from './StudentRow';

export const StudentTable = ({ students }) => (
  <div className="overflow-hidden border rounded-lg border-gray-300">
    <table className="min-w-full">
      <thead>
        <TableHeaders />
      </thead>
      <tbody className="divide-y divide-gray-300">
        {students.map((student, index) => (
          <StudentRow
            key={student._id}
            student={student}
            index={index}
          />
        ))}
      </tbody>
    </table>
  </div>
);
