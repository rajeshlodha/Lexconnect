import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { Link } from "react-router-dom";

// Sample data (will be used inside the simulated fetch)
const sampleCasesData = [
  // ... (Keep the same sampleCases array data from the previous version) ...
  {
    id: "C001",
    client: "Thompson Industries",
    matter: "Contract Dispute vs. City Council",
    type: "Administrative Law",
    status: "Active",
    lastUpdated: "2025-10-23",
    priority: "High",
  },
  {
    id: "C002",
    client: "Michael Brown",
    matter: "Claim Denial Appeal vs. Apex Insurance Co.",
    type: "Insurance Claim",
    status: "Pending",
    lastUpdated: "2025-10-21",
    priority: "Medium",
  },
  {
    id: "C003",
    client: "Jennifer Wilson",
    matter: "Divorce and Asset Settlement",
    type: "Family Law",
    status: "In Progress",
    lastUpdated: "2025-10-24",
    priority: "High",
  },
  {
    id: "C004",
    client: "Robert Davis",
    matter: "New Business Incorporation Package",
    type: "Corporate Law",
    status: "Completed",
    lastUpdated: "2025-10-15",
    priority: "Low",
  },
  {
    id: "C005",
    client: "Sarah Johnson",
    matter: "Child Custody Modification Hearing",
    type: "Family Law",
    status: "Active",
    lastUpdated: "2025-10-22",
    priority: "Medium",
  },
  {
    id: "C006",
    client: "Apex Solutions",
    matter: "Intellectual Property Filing",
    type: "Corporate Law",
    status: "Pending",
    lastUpdated: "2025-10-20",
    priority: "Medium",
  },
];

// Helper functions (getStatusClass, getPriorityClass - implemented below)
const getStatusClass = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-500/20 text-green-500";
    case "Pending":
      return "bg-yellow-500/20 text-yellow-500";
    case "In Progress":
      return "bg-blue-500/20 text-blue-500";
    case "Completed":
      return "bg-gray-500/20 text-gray-500";
    default:
      return "bg-gray-500/20 text-gray-500";
  }
};
const getPriorityClass = (priority) => {
  switch (priority) {
    case "High":
      return "text-red-500";
    case "Medium":
      return "text-yellow-500";
    case "Low":
      return "text-gray-400";
    default:
      return "text-gray-400";
  }
};

const CasesPage = () => {
  // --- STATE VARIABLES ---
  const [cases, setCases] = useState([]); // Start with an empty array
  const [isLoading, setIsLoading] = useState(true); // Start in loading state
  const [error, setError] = useState(null); // Start with no error
  // --- END STATE VARIABLES ---

  // --- DATA FETCHING EFFECT ---
  useEffect(() => {
    setIsLoading(true); // Set loading true when fetch starts
    setError(null); // Clear previous errors

    // Simulate API call
    const fetchCases = async () => {
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5 second delay

        // Simulate potential error (uncomment to test error state)
        // if (Math.random() > 0.7) {
        //   throw new Error("Failed to fetch cases. Please try again later.");
        // }

        // Set the data on successful fetch
        setCases(sampleCasesData);
      } catch (err) {
        // Set error state if fetch fails
        setError(err.message);
        setCases([]); // Clear cases on error
      } finally {
        // Set loading false when fetch completes (success or error)
        setIsLoading(false);
      }
    };

    fetchCases(); // Call the fetch function
  }, []); // Empty dependency array means this runs once on component mount
  // --- END DATA FETCHING EFFECT ---

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-300">Manage Cases</h1>
        <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition-colors duration-200 flex items-center gap-2">
          <i className="fa-solid fa-plus text-sm"></i> Add New Case
        </button>
      </div>

      {/* Cases Table Container */}
      <div className="bg-neutral-800 rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-400">
          <thead className="bg-neutral-700 text-xs text-gray-300 uppercase tracking-wider">
            <tr>
              <th scope="col" className="px-6 py-3">
                Case ID
              </th>
              <th scope="col" className="px-6 py-3">
                Client
              </th>
              <th scope="col" className="px-6 py-3">
                Matter
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Priority
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Last Updated
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
                  colSpan="8"
                  className="px-6 py-10 text-center text-gray-500"
                >
                  <i className="fa-solid fa-spinner fa-spin mr-2"></i> Loading
                  cases...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="8" className="px-6 py-10 text-center text-red-500">
                  <i className="fa-solid fa-exclamation-triangle mr-2"></i>{" "}
                  Error: {error}
                </td>
              </tr>
            ) : cases.length > 0 ? (
              cases.map((caseItem) => (
                <tr
                  key={caseItem.id}
                  className="border-b border-neutral-700 hover:bg-neutral-700/50 transition-colors duration-150 align-top"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-300 whitespace-nowrap"
                  >
                    {caseItem.id}
                  </th>
                  <td className="px-6 py-4">{caseItem.client}</td>
                  <td className="px-6 py-4 min-w-[250px]">{caseItem.matter}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {caseItem.type}
                  </td>
                  <td
                    className={`px-6 py-4 text-center font-medium ${getPriorityClass(
                      caseItem.priority
                    )}`}
                  >
                    {caseItem.priority}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(
                        caseItem.status
                      )}`}
                    >
                      {caseItem.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {caseItem.lastUpdated}
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
                      <i className="fa-solid fa-pen"></i> Edit{" "}
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
              // No cases found (after loading and no error)
              <tr>
                <td
                  colSpan="8"
                  className="px-6 py-10 text-center text-gray-500"
                >
                  <i className="fa-solid fa-folder-open mr-2"></i> No cases
                  found.
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

export default CasesPage;
