import React from "react";
import { Link } from "react-router-dom";

// This component contains ONLY the content for the main dashboard view
const DashboardContent = () => {
  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-yellow-500/20 transform hover:scale-105 transition-all duration-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Active Cases</p>
              <h3 className="text-3xl font-bold text-gray-200 mt-1">24</h3>
            </div>
            <div className="bg-yellow-500/10 p-3 rounded-full">
              <i className="fa-solid fa-briefcase text-2xl text-yellow-500"></i>
            </div>
          </div>
          <p className="text-green-500 text-sm mt-4 flex items-center">
            <i className="fa-solid fa-arrow-up mr-1"></i> 12% from last month
          </p>
        </div>
        {/* ... other stats cards ... */}
        <div className="bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-yellow-500/20 transform hover:scale-105 transition-all duration-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Pending Documents</p>
              <h3 className="text-3xl font-bold text-gray-200 mt-1">17</h3>
            </div>
            <div className="bg-yellow-500/10 p-3 rounded-full">
              <i className="fa-solid fa-file-signature text-2xl text-yellow-500"></i>
            </div>
          </div>
          <p className="text-red-500 text-sm mt-4 flex items-center">
            <i className="fa-solid fa-arrow-down mr-1"></i> 5% from last month
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
            <i className="fa-solid fa-arrow-up mr-1"></i> 8% from last month
          </p>
        </div>
        <div className="bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-yellow-500/20 transform hover:scale-105 transition-all duration-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Revenue</p>
              <h3 className="text-3xl font-bold text-gray-200 mt-1">$15,750</h3>
            </div>
            <div className="bg-yellow-500/10 p-3 rounded-full">
              <i className="fa-solid fa-dollar-sign text-2xl text-yellow-500"></i>
            </div>
          </div>
          <p className="text-green-500 text-sm mt-4 flex items-center">
            <i className="fa-solid fa-arrow-up mr-1"></i> 17% from last month
          </p>
        </div>
      </div>

      {/* Upcoming Appointments and Recent Cases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* ... Appointments Card ... */}
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
            {/* ... Appointment items ... */}
            <li className="py-4 transform hover:translate-x-2 transition-all duration-300">
              {/* ... */}
            </li>
            <li className="py-4 transform hover:translate-x-2 transition-all duration-300">
              {/* ... */}
            </li>
            <li className="py-4 transform hover:translate-x-2 transition-all duration-300">
              {/* ... */}
            </li>
          </ul>
        </div>
        {/* ... Recent Cases Card ... */}
        <div className="bg-neutral-800 rounded-xl shadow-lg p-6 transform hover:translate-y-[-4px] transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-300">Recent Cases</h2>
            <Link
              to="/lawyer/cases"
              className="text-yellow-500 hover:text-yellow-600 transition-all duration-300"
            >
              View All
            </Link>
          </div>
          <ul className="divide-y divide-neutral-700">
            {/* ... Case items ... */}
            <li className="py-4 transform hover:translate-x-2 transition-all duration-300">
              {/* ... */}
            </li>
            <li className="py-4 transform hover:translate-x-2 transition-all duration-300">
              {/* ... */}
            </li>
            <li className="py-4 transform hover:translate-x-2 transition-all duration-300">
              {/* ... */}
            </li>
          </ul>
        </div>
      </div>

      {/* Recent Documents and Activity Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ... Documents Card ... */}
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
            {/* ... Document items ... */}
            <li className="py-3 transform hover:translate-x-2 transition-all duration-300">
              {/* ... */}
            </li>
            <li className="py-3 transform hover:translate-x-2 transition-all duration-300">
              {/* ... */}
            </li>
            <li className="py-3 transform hover:translate-x-2 transition-all duration-300">
              {/* ... */}
            </li>
            <li className="py-3 transform hover:translate-x-2 transition-all duration-300">
              {/* ... */}
            </li>
          </ul>
        </div>
        {/* ... Activity Timeline Card ... */}
        <div className="bg-neutral-800 rounded-xl shadow-lg p-6 transform hover:translate-y-[-4px] transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-300">
              Activity Timeline
            </h2>
            <a
              href="#"
              className="text-yellow-500 hover:text-yellow-600 transition-all duration-300"
            >
              View All
            </a>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 h-full w-0.5 bg-neutral-700"></div>
            <ul className="space-y-6">
              {/* ... Timeline items ... */}
              <li className="relative pl-10 transform hover:translate-x-2 transition-all duration-300">
                {/* ... */}
              </li>
              <li className="relative pl-10 transform hover:translate-x-2 transition-all duration-300">
                {/* ... */}
              </li>
              <li className="relative pl-10 transform hover:translate-x-2 transition-all duration-300">
                {/* ... */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
