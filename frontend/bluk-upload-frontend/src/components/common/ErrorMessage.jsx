export const ErrorMessage = ({ message }) => (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="text-red-500">Error: {message}</div>
    </div>
  );