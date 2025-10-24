import React from "react";
import { Link } from "react-router-dom"; // Import Link for potential future use

// Sample data for cases
const sampleCases = [
  {
    id: "C001",
    client: "Thompson Industries",
    matter: "Contract Dispute vs. City Council",
    type: "Administrative Law",
    status: "Active",
    lastUpdated: "2025-10-23",
  },
  {
    id: "C002",
    client: "Michael Brown",
    matter: "Claim Denial Appeal vs. Apex Insurance Co.",
    type: "Insurance Claim",
    status: "Pending",
    lastUpdated: "2025-10-21",
  },
  {
    id: "C003",
    client: "Jennifer Wilson",
    matter: "Divorce and Asset Settlement",
    type: "Family Law",
    status: "In Progress",
    lastUpdated: "2025-10-24",
  },
  {
    id: "C004",
    client: "Robert Davis",
    matter: "New Business Incorporation",
    type: "Corporate Law",
    status: "Completed",
    lastUpdated: "2025-10-15",
  },
  {
    id: "C005",
    client: "Sarah Johnson",
    matter: "Child Custody Modification",
    type: "Family Law",
    status: "Active",
    lastUpdated: "2025-10-22",
  },
];

// Helper function to get status badge colors
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

const CasesPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-300">Manage Cases</h1>
        <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition-colors duration-200 flex items-center gap-2">
          <i className="fa-solid fa-plus text-sm"></i> Add New Case
        </button>
      </div>

      {/* Cases Table */}
      <div className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
        <table className="w-full text-left text-gray-400">
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
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Last Updated
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {sampleCases.map((caseItem) => (
              <tr
                key={caseItem.id}
                className="border-b border-neutral-700 hover:bg-neutral-700/50 transition-colors duration-150"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-300 whitespace-nowrap"
                >
                  {caseItem.id}
                </th>
                <td className="px-6 py-4">{caseItem.client}</td>
                <td className="px-6 py-4">{caseItem.matter}</td>
                <td className="px-6 py-4">{caseItem.type}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(
                      caseItem.status
                    )}`}
                  >
                    {caseItem.status}
                  </span>
                </td>
                <td className="px-6 py-4">{caseItem.lastUpdated}</td>
                <td className="px-6 py-4 text-right">
                  {/* Example actions - replace with actual links/buttons later */}
                  <a
                    href="#"
                    className="font-medium text-yellow-500 hover:text-yellow-600 mr-3"
                  >
                    View
                  </a>
                  <a
                    href="#"
                    className="font-medium text-blue-500 hover:text-blue-600"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CasesPage;
