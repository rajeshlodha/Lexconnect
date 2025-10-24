import React from "react";

// Placeholder component for Billing
const BillingPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-300">Billing & Invoices</h1>
        <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition-colors duration-200 flex items-center gap-2">
          <i className="fa-solid fa-file-invoice-dollar text-sm"></i> Create
          Invoice
        </button>
      </div>

      <div className="bg-neutral-800 rounded-xl p-6 shadow-lg">
        <p className="text-gray-400">
          Billing details, invoices, and payment history will go here...
        </p>
        {/* We can build out billing features later */}
      </div>
    </div>
  );
};

export default BillingPage;
