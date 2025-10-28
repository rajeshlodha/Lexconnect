import React, { useState, useEffect } from "react"; // Import hooks
import { Link } from "react-router-dom";

// Sample data (used in simulated fetch)
const sampleInvoicesData = [
  // ... (Keep the same sampleInvoices array data) ...
  {
    id: "INV-001",
    caseId: "C001",
    client: "Thompson Industries",
    amount: "$2,500.00",
    dueDate: "2025-11-15",
    status: "Sent",
  },
  {
    id: "INV-002",
    caseId: "C003",
    client: "Jennifer Wilson",
    amount: "$1,850.50",
    dueDate: "2025-11-01",
    status: "Paid",
  },
  {
    id: "INV-003",
    caseId: "C002",
    client: "Michael Brown",
    amount: "$975.00",
    dueDate: "2025-10-20",
    status: "Overdue",
  },
  {
    id: "INV-004",
    caseId: "C004",
    client: "Robert Davis",
    amount: "$500.00",
    dueDate: "2025-10-01",
    status: "Paid",
  },
];

// Helper for status colors
const getStatusClass = (status) => {
  switch (status) {
    case "Paid":
      return "bg-green-500/20 text-green-500";
    case "Sent":
      return "bg-blue-500/20 text-blue-500";
    case "Overdue":
      return "bg-red-500/20 text-red-500";
    case "Draft":
      return "bg-gray-500/20 text-gray-500";
    default:
      return "bg-gray-500/20 text-gray-500";
  }
};

const BillingPage = () => {
  // --- STATE ---
  const [invoices, setInvoices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // --- END STATE ---

  // --- EFFECT ---
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const fetchInvoices = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate 0.8 sec delay
        // Simulate error
        // if (Math.random() > 0.8) { throw new Error("Could not load invoices."); }
        setInvoices(sampleInvoicesData);
      } catch (err) {
        setError(err.message);
        setInvoices([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInvoices();
  }, []);
  // --- END EFFECT ---

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-300">Billing & Invoices</h1>
        <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition-colors duration-200 flex items-center gap-2">
          <i className="fa-solid fa-file-invoice-dollar text-sm"></i> Create
          Invoice
        </button>
      </div>

      {/* Billing Summary Cards (These don't need a loading state, could derive from data later) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-neutral-800 rounded-xl p-6 shadow-lg">
          <p className="text-gray-400 text-sm">Outstanding Amount</p>
          <h3 className="text-2xl font-bold text-red-500 mt-1">$975.00</h3>{" "}
          {/* Example static value */}
        </div>
        <div className="bg-neutral-800 rounded-xl p-6 shadow-lg">
          <p className="text-gray-400 text-sm">Paid (Last 30 Days)</p>
          <h3 className="text-2xl font-bold text-green-500 mt-1">
            $2,350.50
          </h3>{" "}
          {/* Example static value */}
        </div>
        <div className="bg-neutral-800 rounded-xl p-6 shadow-lg">
          <p className="text-gray-400 text-sm">Upcoming Due</p>
          <h3 className="text-2xl font-bold text-blue-500 mt-1">
            $2,500.00
          </h3>{" "}
          {/* Example static value */}
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-neutral-800 rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-400">
          <thead className="bg-neutral-700 text-xs text-gray-300 uppercase tracking-wider">
            <tr>
              <th scope="col" className="px-6 py-3">
                Invoice ID
              </th>
              <th scope="col" className="px-6 py-3">
                Case ID
              </th>
              <th scope="col" className="px-6 py-3">
                Client
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Due Date
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Status
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
                  colSpan="7"
                  className="px-6 py-10 text-center text-gray-500"
                >
                  <i className="fa-solid fa-spinner fa-spin mr-2"></i> Loading
                  invoices...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="7" className="px-6 py-10 text-center text-red-500">
                  <i className="fa-solid fa-exclamation-triangle mr-2"></i>{" "}
                  Error: {error}
                </td>
              </tr>
            ) : invoices.length > 0 ? (
              invoices.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="border-b border-neutral-700 hover:bg-neutral-700/50 transition-colors duration-150 align-top"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-300 whitespace-nowrap"
                  >
                    {invoice.id}
                  </th>
                  <td className="px-6 py-4">{invoice.caseId}</td>
                  <td className="px-6 py-4">{invoice.client}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {invoice.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {invoice.dueDate}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(
                        invoice.status
                      )}`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    <a
                      href="#"
                      className="font-medium text-yellow-500 hover:text-yellow-600 mr-4"
                    >
                      <i className="fa-solid fa-eye"></i> View
                    </a>
                    {invoice.status === "Sent" && (
                      <a
                        href="#"
                        className="font-medium text-blue-500 hover:text-blue-600 mr-4"
                      >
                        <i className="fa-solid fa-paper-plane"></i> Resend
                      </a>
                    )}
                    {invoice.status === "Overdue" && (
                      <a
                        href="#"
                        className="font-medium text-red-500 hover:text-red-600 mr-4"
                      >
                        <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                        Reminder
                      </a>
                    )}
                    {invoice.status !== "Paid" && (
                      <a
                        href="#"
                        className="font-medium text-green-500 hover:text-green-600"
                      >
                        <i className="fa-solid fa-check"></i> Mark Paid
                      </a>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-10 text-center text-gray-500"
                >
                  <i className="fa-solid fa-file-invoice mr-2"></i> No invoices
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

export default BillingPage;
