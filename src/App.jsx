import { FaLinkedin, FaGlobe, FaEnvelope } from 'react-icons/fa'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center font-inter">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Business Card Website</h1>
        <p className="text-gray-600">Project structure setup complete!</p>
        <div className="mt-4 text-sm text-gray-500">
          <p>✅ React with Vite initialized</p>
          <p>✅ Tailwind CSS configured</p>
          <p>✅ React Icons installed</p>
          <p>✅ Google Fonts (Inter) integrated</p>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <FaLinkedin className="text-blue-600 text-2xl" />
          <FaGlobe className="text-gray-600 text-2xl" />
          <FaEnvelope className="text-gray-600 text-2xl" />
        </div>
      </div>
    </div>
  )
}

export default App