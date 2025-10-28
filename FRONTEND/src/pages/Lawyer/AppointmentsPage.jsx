import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { Link } from "react-router-dom";

// Sample data (will be used inside the simulated fetch)
const sampleAppointmentsData = [
  // ... (Keep the same sampleAppointments array data from the previous version) ...
  {
    id: "A001",
    client: "Sarah Johnson",
    type: "Divorce Consultation",
    date: "2025-10-25",
    time: "10:30 AM",
    status: "Upcoming",
    duration: "1 hour",
  },
  {
    id: "A002",
    client: "Michael Smith",
    type: "Property Dispute Strategy",
    date: "2025-10-26",
    time: "2:00 PM",
    status: "Upcoming",
    duration: "1.5 hours",
  },
  {
    id: "A003",
    client: "Robert Davis",
    type: "Corporate Law - Q3 Review",
    date: "2025-10-28",
    time: "11:00 AM",
    status: "Upcoming",
    duration: "1 hour",
  },
  {
    id: "A004",
    client: "Thompson Industries Rep.",
    type: "Case Update Meeting",
    date: "2025-10-24",
    time: "3:00 PM",
    status: "Completed",
    duration: "45 mins",
  },
  {
    id: "A005",
    client: "Jennifer Wilson",
    type: "Settlement Discussion Prep",
    date: "2025-10-23",
    time: "9:00 AM",
    status: "Completed",
    duration: "2 hours",
  },
  {
    id: "A006",
    client: "Apex Solutions Contact",
    type: "IP Filing Follow-up Call",
    date: "2025-10-27",
    time: "4:00 PM",
    status: "Upcoming",
    duration: "30 mins",
  },
];

// Helper functions (getStatusClass - keep this)
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
  // --- STATE VARIABLES ---
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // --- END STATE VARIABLES ---

  // --- DATA FETCHING EFFECT ---
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const fetchAppointments = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1200)); // Simulate 1.2 second delay

        // Simulate potential error
        // if (Math.random() > 0.8) {
        //   throw new Error("Failed to fetch appointments.");
        // }

        setAppointments(sampleAppointmentsData);
      } catch (err) {
        setError(err.message);
        setAppointments([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAppointments();
  }, []); // Run once on mount
  // --- END DATA FETCHING EFFECT ---

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
      <div className="bg-neutral-800 rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-400">
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
                Duration
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
                  colSpan="8"
                  className="px-6 py-10 text-center text-gray-500"
                >
                  <i className="fa-solid fa-spinner fa-spin mr-2"></i> Loading
                  appointments...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="8" className="px-6 py-10 text-center text-red-500">
                  <i className="fa-solid fa-exclamation-triangle mr-2"></i>{" "}
                  Error: {error}
                </td>
              </tr>
            ) : appointments.length > 0 ? (
              appointments.map((appt) => (
                <tr
                  key={appt.id}
                  className="border-b border-neutral-700 hover:bg-neutral-700/50 transition-colors duration-150 align-top"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-300 whitespace-nowrap"
                  >
                    {appt.id}
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">{appt.client}</td>
                  <td className="px-6 py-4 min-w-[200px]">{appt.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{appt.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{appt.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {appt.duration}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(
                        appt.status
                      )}`}
                    >
                      {appt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    <a
                      href="#"
                      className="font-medium text-yellow-500 hover:text-yellow-600 mr-4"
                    >
                      {" "}
                      <i className="fa-solid fa-eye"></i> View{" "}
                    </a>
                    {appt.status === "Upcoming" && (
                      <>
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
                          <i className="fa-solid fa-ban"></i> Cancel{" "}
                        </a>
                      </>
                    )}
                    {appt.status === "Completed" && (
                      <a
                        href="#"
                        className="font-medium text-gray-400 hover:text-gray-300"
                      >
                        {" "}
                        <i className="fa-solid fa-file-lines"></i> Notes{" "}
                      </a>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="px-6 py-10 text-center text-gray-500"
                >
                  <i className="fa-solid fa-calendar-xmark mr-2"></i> No
                  appointments found.
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

export default AppointmentsPage;
