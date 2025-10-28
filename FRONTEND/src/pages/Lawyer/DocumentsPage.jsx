import React, { useState, useEffect } from "react"; // Import hooks
import { Link } from "react-router-dom";

// Sample data (used in simulated fetch)
const sampleDocumentsData = [
  // ... (Keep the same sampleDocuments array data) ...
  {
    id: "D001",
    name: "Thompson_Case_Brief.pdf",
    caseId: "C001",
    client: "Thompson Industries",
    type: "PDF",
    uploaded: "2025-10-24",
    lastAccessed: "2025-10-24",
    icon: "fa-file-pdf",
    iconColor: "text-red-500",
  },
  {
    id: "D002",
    name: "Contract_Draft_v2.docx",
    caseId: "C003",
    client: "Jennifer Wilson",
    type: "Word Document",
    uploaded: "2025-10-22",
    lastAccessed: "2025-10-23",
    icon: "fa-file-word",
    iconColor: "text-blue-500",
  },
  {
    id: "D003",
    name: "Financial_Analysis.xlsx",
    caseId: "C004",
    client: "Robert Davis",
    type: "Excel Spreadsheet",
    uploaded: "2025-10-20",
    lastAccessed: "2025-10-21",
    icon: "fa-file-excel",
    iconColor: "text-green-500",
  },
  {
    id: "D004",
    name: "Meeting_Notes_Initial.txt",
    caseId: "C002",
    client: "Michael Brown",
    type: "Text File",
    uploaded: "2025-10-18",
    lastAccessed: "2025-10-19",
    icon: "fa-file-lines",
    iconColor: "text-gray-500",
  },
  {
    id: "D005",
    name: "Discovery_Request_SJ.pdf",
    caseId: "C005",
    client: "Sarah Johnson",
    type: "PDF",
    uploaded: "2025-10-15",
    lastAccessed: "2025-10-20",
    icon: "fa-file-pdf",
    iconColor: "text-red-500",
  },
];

const DocumentsPage = () => {
  // --- STATE ---
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // --- END STATE ---

  // --- EFFECT ---
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const fetchDocuments = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate 1 sec delay
        // Simulate error
        // if (Math.random() > 0.8) { throw new Error("Could not load documents."); }
        setDocuments(sampleDocumentsData);
      } catch (err) {
        setError(err.message);
        setDocuments([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDocuments();
  }, []);
  // --- END EFFECT ---

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-300">Manage Documents</h1>
        <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition-colors duration-200 flex items-center gap-2">
          <i className="fa-solid fa-upload text-sm"></i> Upload Document
        </button>
      </div>

      {/* Documents Table */}
      <div className="bg-neutral-800 rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-400">
          <thead className="bg-neutral-700 text-xs text-gray-300 uppercase tracking-wider">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Case ID
              </th>
              <th scope="col" className="px-6 py-3">
                Client
              </th>
              <th scope="col" className="px-6 py-3">
                Uploaded
              </th>
              <th scope="col" className="px-6 py-3">
                Last Accessed
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* --- CONDITIONAL RENDERING --- */}
            {isLoading ? (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-10 text-center text-gray-500"
                >
                  <i className="fa-solid fa-spinner fa-spin mr-2"></i> Loading
                  documents...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="6" className="px-6 py-10 text-center text-red-500">
                  <i className="fa-solid fa-exclamation-triangle mr-2"></i>{" "}
                  Error: {error}
                </td>
              </tr>
            ) : documents.length > 0 ? (
              documents.map((doc) => (
                <tr
                  key={doc.id}
                  className="border-b border-neutral-700 hover:bg-neutral-700/50 transition-colors duration-150 align-top"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-300 whitespace-nowrap flex items-center gap-3"
                  >
                    <i
                      className={`fa-solid ${doc.icon} ${doc.iconColor} text-lg w-4 text-center`}
                    ></i>{" "}
                    {/* Ensure icon width */}
                    {doc.name}
                  </th>
                  <td className="px-6 py-4">{doc.caseId}</td>
                  <td className="px-6 py-4">{doc.client}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {doc.uploaded}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {doc.lastAccessed}
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    <a
                      href="#"
                      className="font-medium text-yellow-500 hover:text-yellow-600 mr-4"
                    >
                      {" "}
                      <i className="fa-solid fa-eye"></i> View{" "}
                    </a>
                    <a
                      href="#"
                      className="font-medium text-blue-500 hover:text-blue-600 mr-4"
                    >
                      {" "}
                      <i className="fa-solid fa-download"></i> Download{" "}
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-500 hover:text-red-600"
                    >
                      {" "}
                      <i className="fa-solid fa-trash"></i> Delete{" "}
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-10 text-center text-gray-500"
                >
                  <i className="fa-solid fa-file-circle-xmark mr-2"></i> No
                  documents found.
                </td>
              </tr>
            )}
            {/* --- END CONDITIONAL RENDERING --- */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentsPage;
