import { Link } from 'react-router-dom';
import { StudentList } from '../components/students';
import UploadBtnModal from '../components/upload/UploadBtnModal';
function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Student Upload</h1>
          <p className="text-gray-600">Upload and view student information</p>
        </header>
        <div className="flex justify-end p-2 gap-2">
          <Link to={'/uploads'} className="flex items-center rounded-md bg-[#6A64F1] py-2 px-4 text-white">
            Upload history
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 ml-2">
              <path d="M3 3.5A1.5 1.5 0 0 1 4.5 2h6.879a1.5 1.5 0 0 1 1.06.44l4.122 4.12A1.5 1.5 0 0 1 17 7.622V16.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-13Z" />
            </svg>

          </Link>
          <UploadBtnModal />
        </div>
        <StudentList />
      </div>
    </main>
  );
}

export default Home;