import React from "react";

// Placeholder component for Settings
const SettingsPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-300">Settings</h1>
        {/* No button needed for settings typically */}
      </div>

      <div className="bg-neutral-800 rounded-xl p-6 shadow-lg">
        <p className="text-gray-400">
          Account settings, notification preferences, etc., will go here...
        </p>
        {/* We can build out settings options later */}
      </div>
    </div>
  );
};

export default SettingsPage;
