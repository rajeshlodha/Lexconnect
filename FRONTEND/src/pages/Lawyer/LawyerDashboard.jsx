import React from "react";
import { Link } from "react-router-dom"; // <-- ADDED THIS IMPORT
import "./LawyerDashboard.css"; // <-- CHANGED THIS IMPORT

export const LawyerDashboard = () => {
  // <-- RENAMED COMPONENT
  return (
    <div id="webcrumbs">
      <div className="flex h-screen bg-neutral-900">
        {/* Sidebar */}
        <div className="w-64 bg-yellow-500 p-4 transition-all duration-300 hover:w-72">
          <div className="flex items-center justify-center mb-8">
            <i className="fa-solid fa-scale-balanced text-3xl text-black"></i>
            {/* --- BRANDING UPDATED --- */}
            <h1 className="ml-2 text-2xl font-bold text-black">Lex Connect</h1>
          </div>

          <nav>
            <ul className="space-y-2">
              {/* --- ROUTING UPDATED --- */}
              <li>
                <Link
                  to="/lawyer/dashboard"
                  className="flex items-center p-3 rounded-lg text-black hover:bg-yellow-600 hover:translate-x-2 transition-all duration-300"
                >
                  <i className="fa-solid fa-home w-6"></i>
                  <span className="ml-2 font-semibold">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/lawyer/cases"
                  className="flex items-center p-3 rounded-lg text-black hover:bg-yellow-600 hover:translate-x-2 transition-all duration-300"
                >
                  <i className="fa-solid fa-briefcase w-6"></i>
                  <span className="ml-2 font-semibold">Cases</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/lawyer/appointments"
                  className="flex items-center p-3 rounded-lg text-black hover:bg-yellow-600 hover:translate-x-2 transition-all duration-300"
                >
                  <i className="fa-solid fa-calendar-days w-6"></i>
                  <span className="ml-2 font-semibold">Appointments</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/lawyer/documents"
                  className="flex items-center p-3 rounded-lg text-black hover:bg-yellow-600 hover:translate-x-2 transition-all duration-300"
                >
                  <i className="fa-solid fa-file-contract w-6"></i>
                  <span className="ml-2 font-semibold">Documents</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/lawyer/messages"
                  className="flex items-center p-3 rounded-lg text-black hover:bg-yellow-600 hover:translate-x-2 transition-all duration-300"
                >
                  <i className="fa-solid fa-comments w-6"></i>
                  <span className="ml-2 font-semibold">Messages</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/lawyer/billing"
                  className="flex items-center p-3 rounded-lg text-black hover:bg-yellow-600 hover:translate-x-2 transition-all duration-300"
                >
                  <i className="fa-solid fa-money-bill-wave w-6"></i>
                  <span className="ml-2 font-semibold">Billing</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/lawyer/settings"
                  className="flex items-center p-3 rounded-lg text-black hover:bg-yellow-600 hover:translate-x-2 transition-all duration-300"
                >
                  <i className="fa-solid fa-gear w-6"></i>
                  <span className="ml-2 font-semibold">Settings</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="absolute bottom-4">
            <Link
              to="/login" // <-- UPDATED to /login
              className="flex items-center p-3 rounded-lg text-black hover:bg-yellow-600 hover:translate-x-2 transition-all duration-300"
            >
              <i className="fa-solid fa-right-from-bracket w-6"></i>
              <span className="ml-2 font-semibold">Logout</span>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navigation */}
          <header className="bg-neutral-800 p-4 shadow-md flex justify-between items-center">
            <div className="flex items-center">
              <button className="text-gray-300 hover:text-yellow-500 transform hover:scale-110 transition-all duration-300">
                <i className="fa-solid fa-bars text-xl"></i>
              </button>
              <h2 className="ml-4 text-xl font-semibold text-gray-300">
                Lawyer Dashboard
              </h2>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-neutral-700 text-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                />
                <i className="fa-solid fa-search absolute left-3 top-2.5 text-gray-500"></i>
              </div>

              <button className="relative p-2 text-gray-300 rounded-full hover:bg-neutral-700 hover:text-yellow-500 transform hover:rotate-12 transition-all duration-300">
                <i className="fa-solid fa-bell text-xl"></i>
                <span className="absolute top-0 right-0 h-4 w-4 bg-yellow-500 rounded-full text-xs flex items-center justify-center text-black font-bold">
                  3
                </span>
              </button>

              <details className="relative">
                <summary className="flex items-center space-x-3 cursor-pointer focus:outline-none">
                  <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
                    JD
                  </div>
                  <span className="text-gray-300">John Doe</span>
                  <i className="fa-solid fa-chevron-down text-gray-500 text-sm transition-transform duration-300 group-open:rotate-180"></i>
                </summary>

                <div className="absolute right-0 mt-2 w-48 bg-neutral-800 rounded-lg shadow-lg py-2 z-10 border border-neutral-700">
                  {/* --- ROUTING UPDATED --- */}
                  <Link
                    to="/profile" // <-- UPDATED to existing /profile page
                    className="block px-4 py-2 text-gray-300 hover:bg-neutral-700 hover:text-yellow-500 transition-all duration-300"
                  >
                    <i className="fa-solid fa-user mr-2"></i>Profile
                  </Link>
                  <Link
                    to="/lawyer/settings"
                    className="block px-4 py-2 text-gray-300 hover:bg-neutral-700 hover:text-yellow-500 transition-all duration-300"
                  >
                    <i className="fa-solid fa-gear mr-2"></i>Settings
                  </Link>
                  <Link
                    to="/login" // <-- UPDATED to /login
                    className="block px-4 py-2 text-gray-300 hover:bg-neutral-700 hover:text-yellow-500 transition-all duration-300"
                  >
                    <i className="fa-solid fa-right-from-bracket mr-2"></i>
                    Logout
                  </Link>
                </div>
              </details>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="flex-1 overflow-y-auto p-6 bg-neutral-900">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {/* Stats Cards */}
              <div className="bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-yellow-500/20 transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400 text-sm">Active Cases</p>
                    <h3 className="text-3xl font-bold text-gray-200 mt-1">
                      24
                    </h3>
                  </div>
                  <div className="bg-yellow-500/10 p-3 rounded-full">
                    <i className="fa-solid fa-briefcase text-2xl text-yellow-500"></i>
                  </div>
                </div>
                <p className="text-green-500 text-sm mt-4 flex items-center">
                  <i className="fa-solid fa-arrow-up mr-1"></i> 12% from last
                  month
                </p>
              </div>

              <div className="bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-yellow-500/20 transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400 text-sm">Pending Documents</p>
                    <h3 className="text-3xl font-bold text-gray-200 mt-1">
                      17
                    </h3>
                  </div>
                  <div className="bg-yellow-500/10 p-3 rounded-full">
                    <i className="fa-solid fa-file-signature text-2xl text-yellow-500"></i>
                  </div>
                </div>
                <p className="text-red-500 text-sm mt-4 flex items-center">
                  <i className="fa-solid fa-arrow-down mr-1"></i> 5% from last
                  month
                </p>
              </div>

              <div className="bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-yellow-500/20 transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400 text-sm">Appointments</p>
                    <h3 className="text-3xl font-bold text-gray-200 mt-1">8</h3>
                  </div>
                  <div className="bg-yellow-500/10 p-3 rounded-full">
                    <i className="fa-solid fa-calendar-check text-2xl text-yellow-500"></i>
                  </div>
                </div>
                <p className="text-green-500 text-sm mt-4 flex items-center">
                  <i className="fa-solid fa-arrow-up mr-1"></i> 8% from last
                  month
                </p>
              </div>

              <div className="bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-yellow-500/20 transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400 text-sm">Revenue</p>
                    <h3 className="text-3xl font-bold text-gray-200 mt-1">
                      $15,750
                    </h3>
                  </div>
                  <div className="bg-yellow-500/10 p-3 rounded-full">
                    <i className="fa-solid fa-dollar-sign text-2xl text-yellow-500"></i>
                  </div>
                </div>
                <p className="text-green-500 text-sm mt-4 flex items-center">
                  <i className="fa-solid fa-arrow-up mr-1"></i> 17% from last
                  month
                </p>
              </div>
            </div>

            {/* Upcoming Appointments and Recent Cases */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-neutral-800 rounded-xl shadow-lg p-6 transform hover:translate-y-[-4px] transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-300">
                    Upcoming Appointments
                  </h2>
                  <Link
                    to="/lawyer/appointments"
                    className="text-yellow-500 hover:text-yellow-600 transition-all duration-300"
                  >
                    View All
                  </Link>
                </div>

                <ul className="divide-y divide-neutral-700">
                  <li className="py-4 transform hover:translate-x-2 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="bg-neutral-700 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                        <i className="fa-solid fa-user text-yellow-500"></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-300 font-medium">
                          Sarah Johnson
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Divorce Consultation
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-300">Today</p>
                        <p className="text-gray-500 text-sm">10:30 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="py-4 transform hover:translate-x-2 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="bg-neutral-700 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                        <i className="fa-solid fa-user text-yellow-500"></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-300 font-medium">
                          Michael Smith
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Property Dispute
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-300">Tomorrow</p>
                        <p className="text-gray-500 text-sm">2:00 PM</p>
                      </div>
                    </div>
                  </li>
                  <li className="py-4 transform hover:translate-x-2 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="bg-neutral-700 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                        <i className="fa-solid fa-user text-yellow-500"></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-300 font-medium">
                          Robert Davis
                        </h3>
                        <p className="text-gray-500 text-sm">Corporate Law</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-300">Jan 15</p>
                        <p className="text-gray-500 text-sm">11:00 AM</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-800 rounded-xl shadow-lg p-6 transform hover:translate-y-[-4px] transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-300">
                    Recent Cases
                  </h2>
                  <Link
                    to="/lawyer/cases"
                    className="text-yellow-500 hover:text-yellow-600 transition-all duration-300"
                  >
                    View All
                  </Link>
                </div>

                <ul className="divide-y divide-neutral-700">
                  <li className="py-4 transform hover:translate-x-2 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="rounded-lg bg-yellow-500/10 p-2 mr-3">
                        <i className="fa-solid fa-gavel text-yellow-500"></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-300 font-medium">
                          Thompson vs. City Council
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Administrative Law
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-500">
                          Active
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="py-4 transform hover:translate-x-2 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="rounded-lg bg-yellow-500/10 p-2 mr-3">
                        <i className="fa-solid fa-gavel text-yellow-500"></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-300 font-medium">
                          Brown vs. Insurance Co.
                        </h3>
                        <p className="text-gray-500 text-sm">Insurance Claim</p>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-500">
                          Pending
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="py-4 transform hover:translate-x-2 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="rounded-lg bg-yellow-500/10 p-2 mr-3">
                        <i className="fa-solid fa-gavel text-yellow-500"></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-300 font-medium">
                          Wilson Divorce Settlement
                        </h3>
                        <p className="text-gray-500 text-sm">Family Law</p>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-500">
                          In Progress
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Recent Documents and Activity Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-800 rounded-xl shadow-lg p-6 transform hover:translate-y-[-4px] transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-300">
                    Recent Documents
                  </h2>
                  <Link
                    to="/lawyer/documents"
                    className="text-yellow-500 hover:text-yellow-600 transition-all duration-300"
                  >
                    View All
                  </Link>
                </div>

                <ul className="divide-y divide-neutral-700">
                  <li className="py-3 transform hover:translate-x-2 transition-all duration-300">
                    <a href="#" className="flex items-center">
                      <div className="rounded-lg p-2 mr-3">
                        <i className="fa-solid fa-file-pdf text-2xl text-red-500"></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-300 font-medium">
                          Thompson_Case_Brief.pdf
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Updated 2 hours ago
                        </p>
                      </div>
                      <i className="fa-solid fa-download text-gray-500 hover:text-yellow-500 transform hover:scale-110 transition-all duration-300"></i>
                    </a>
                  </li>
                  <li className="py-3 transform hover:translate-x-2 transition-all duration-300">
                    <a href="#" className="flex items-center">
                      <div className="rounded-lg p-2 mr-3">
                        <i className="fa-solid fa-file-word text-2xl text-blue-500"></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-300 font-medium">
                          Contract_Draft_v2.docx
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Updated yesterday
                        </p>
                      </div>
                      <i className="fa-solid fa-download text-gray-500 hover:text-yellow-500 transform hover:scale-110 transition-all duration-300"></i>
                    </a>
                  </li>
                  <li className="py-3 transform hover:translate-x-2 transition-all duration-300">
                    <a href="#" className="flex items-center">
                      <div className="rounded-lg p-2 mr-3">
                        <i className="fa-solid fa-file-excel text-2xl text-green-500"></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-300 font-medium">
                          Financial_Analysis.xlsx
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Updated 3 days ago
                        </p>
                      </div>
                      <i className="fa-solid fa-download text-gray-500 hover:text-yellow-500 transform hover:scale-110 transition-all duration-300"></i>
                    </a>
                  </li>
                  <li className="py-3 transform hover:translate-x-2 transition-all duration-300">
                    <a href="#" className="flex items-center">
                      <div className="rounded-lg p-2 mr-3">
                        <i className="fa-solid fa-file-lines text-2xl text-gray-500"></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-300 font-medium">
                          Meeting_Notes.txt
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Updated 5 days ago
                        </p>
                      </div>
                      <i className="fa-solid fa-download text-gray-500 hover:text-yellow-500 transform hover:scale-110 transition-all duration-300"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-800 rounded-xl shadow-lg p-6 transform hover:translate-y-[-4px] transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-300">
                    Activity Timeline
                  </h2>
                  <Link
                    to="#"
                    className="text-yellow-500 hover:text-yellow-600 transition-all duration-300"
                  >
                    View All
                  </Link>
                </div>

                <div className="relative">
                  <div className="absolute left-5 top-0 h-full w-0.5 bg-neutral-700"></div>
                  <ul className="space-y-6">
                    <li className="relative pl-10 transform hover:translate-x-2 transition-all duration-300">
                      <span className="absolute left-0 top-1 h-10 w-10 flex items-center justify-center z-10 bg-yellow-500 rounded-full text-black">
                        <i className="fa-solid fa-file-signature"></i>
                      </span>
                      <div className="bg-neutral-700 rounded-lg p-3">
                        <h3 className="text-gray-300 font-medium">
                          Document Signed
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Contract for Wilson case was signed by all parties
                        </p>
                        <p className="text-yellow-600 text-xs mt-2">
                          Today at 9:32 AM
                        </p>
                      </div>
                    </li>
                    <li className="relative pl-10 transform hover:translate-x-2 transition-all duration-300">
                      <span className="absolute left-0 top-1 h-10 w-10 flex items-center justify-center z-10 bg-neutral-600 rounded-full text-yellow-500">
                        <i className="fa-solid fa-gavel"></i>
                      </span>
                      <div className="bg-neutral-700 rounded-lg p-3">
                        <h3 className="text-gray-300 font-medium">
                          Court Hearing Scheduled
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Thompson vs. City Council set for Feb 15
                        </p>
                        <p className="text-yellow-600 text-xs mt-2">
                          Yesterday at 4:15 PM
                        </p>
                      </div>
                    </li>
                    <li className="relative pl-10 transform hover:translate-x-2 transition-all duration-300">
                      <span className="absolute left-0 top-1 h-10 w-10 flex items-center justify-center z-10 bg-neutral-600 rounded-full text-yellow-500">
                        <i className="fa-solid fa-file-circle-plus"></i>
                      </span>
                      <div className="bg-neutral-700 rounded-lg p-3">
                        <h3 className="text-gray-300 font-medium">
                          New Case Added
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Brown vs. Insurance Co. case was added to your
                          workload
                        </p>
                        <p className="text-yellow-600 text-xs mt-2">
                          Jan 10 at 11:24 AM
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Quick Action Button */}
        <button className="fixed bottom-6 right-6 w-16 h-16 bg-yellow-500 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 hover:rotate-12 transition-all duration-300">
          <i className="fa-solid fa-plus text-2xl text-black"></i>
        </button>
      </div>
    </div>
  );
};

export default LawyerDashboard;
