import React from "react";
import { Link } from "react-router-dom";

// Sample data for appointments
const sampleAppointments = [
  {
    id: "A001",
    client: "Sarah Johnson",
    type: "Divorce Consultation",
    date: "2025-10-25", // Adjust date relative to "today" if needed
    time: "10:30 AM",
    status: "Upcoming",
  },
  {
    id: "A002",
    client: "Michael Smith",
    type: "Property Dispute",
    date: "2025-10-26",
    time: "2:00 PM",
    status: "Upcoming",
  },
  {
    id: "A003",
    client: "Robert Davis",
    type: "Corporate Law Strategy",
    date: "2025-10-28", // Simulating a future date
    time: "11:00 AM",
    status: "Upcoming",
  },
  {
    id: "A004",
    client: "Thompson Industries Rep.",
    type: "Case Update Meeting",
    date: "2025-10-24", // Simulating a past date
    time: "3:00 PM",
    status: "Completed",
  },
  {
    id: "A005",
    client: "Jennifer Wilson",
    type: "Settlement Discussion",
    date: "2025-10-23", // Simulating a past date
    time: "9:00 AM",
    status: "Completed",
  },
];

// Helper function to get status badge colors
const getStatusClass = (status) => {
  switch (status) {
    case "Upcoming":
      return "bg-blue-500/20 text-blue-500";
    case "Completed":
      return "bg-gray-500/20 text-gray-500";
    case "Cancelled":
      return "bg-red-500/20 text-red-500";
    default:
      return "bg-gray-500/20 text-gray-500";
  }
};

const AppointmentsPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-300">
          Manage Appointments
        </h1>
        <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition-colors duration-200 flex items-center gap-2">
          <i className="fa-solid fa-plus text-sm"></i> Add New Appointment
        </button>
      </div>

      {/* Appointments Table */}
      <div className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
        <table className="w-full text-left text-gray-400">
          <thead className="bg-neutral-700 text-xs text-gray-300 uppercase tracking-wider">
            <tr>
              <th scope="col" className="px-6 py-3">
                Appt ID
              </th>
              <th scope="col" className="px-6 py-3">
                Client
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {sampleAppointments.map((appt) => (
              <tr
                key={appt.id}
                className="border-b border-neutral-700 hover:bg-neutral-700/50 transition-colors duration-150"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-300 whitespace-nowrap"
                >
                  {appt.id}
                </th>
                <td className="px-6 py-4">{appt.client}</td>
                <td className="px-6 py-4">{appt.type}</td>
                <td className="px-6 py-4">{appt.date}</td>
                <td className="px-6 py-4">{appt.time}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(
                      appt.status
                    )}`}
                  >
                    {appt.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  {/* Example actions */}
                  <a
                    href="#"
                    className="font-medium text-yellow-500 hover:text-yellow-600 mr-3"
                  >
                    View
                  </a>
                  <a
                    href="#"
                    className="font-medium text-blue-500 hover:text-blue-600 mr-3"
                  >
                    Edit
                  </a>
                  {appt.status === "Upcoming" && (
                    <a
                      href="#"
                      className="font-medium text-red-500 hover:text-red-600"
                    >
                      Cancel
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentsPage;
