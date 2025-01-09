import { Link } from "react-router-dom";

export const StudentRow = ({ student, index}) => (
  <tr className="bg-white transition-all duration-500 hover:bg-gray-50" >
    <td className="p-5 text-sm font-medium text-gray-900">{index + 1}</td>
    <td className="p-5 text-sm font-medium text-gray-900">{student.rollNumber}</td>
    <td className="px-5 py-3">
      <div className="w-48 flex items-center gap-3">
        <div>
          <p className="text-sm text-gray-900">{student.name}</p>
          <p className="text-xs leading-5 text-gray-400">{student.email}</p>
        </div>
      </div>
    </td>
    <td className="p-5 text-sm font-medium text-gray-900">{student.age}</td>
    <td className="p-5 text-sm font-medium text-gray-900">{student.phoneNumber}</td>
    <td className="p-5 text-sm font-medium text-gray-900">{student.address}</td>
    <td className="p-5 text-sm font-medium text-gray-900">{student.zipcode}</td>
    <td className="p-5">
      <Link to={`/student/${student._id}`}>View</Link>
    </td>
  </tr>
);

