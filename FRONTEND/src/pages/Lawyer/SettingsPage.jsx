import React, { useState, useEffect } from "react"; // Import hooks

const SettingsPage = () => {
  // --- STATE (Included for consistency, but not heavily used for current placeholders) ---
  const [settingsData, setSettingsData] = useState(null); // Could hold fetched settings later
  const [isLoading, setIsLoading] = useState(false); // Default to false as content is static
  const [error, setError] = useState(null);
  // --- END STATE ---

  // --- EFFECT (Example structure, but doesn't fetch main content) ---
  useEffect(() => {
    // If you needed to fetch initial settings values (e.g., notification preferences),
    // you would do it here. For now, we'll just log a message.
    console.log("SettingsPage mounted. Fetch initial settings if needed.");

    // Example of setting mock data after a delay if needed:
    // setIsLoading(true);
    // const fetchSettings = async () => {
    //   try {
    //     await new Promise(resolve => setTimeout(resolve, 500));
    //     setSettingsData({ notificationsEnabled: true /* ... other settings */ });
    //   } catch (err) { setError("Failed to load settings."); }
    //   finally { setIsLoading(false); }
    // };
    // fetchSettings();
  }, []);
  // --- END EFFECT ---

  // Placeholder save function
  const handleSavePreferences = () => {
    alert("Notification preferences saved! (Simulation)");
    // In real app, send updated preferences to backend API
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-300">Settings</h1>
      </div>

      {/* --- CONDITIONAL RENDERING (Minimal for this page structure) --- */}
      {error && (
        <div className="mb-6 p-4 text-center text-red-500 bg-red-500/10 border border-red-500/30 rounded-lg">
          <i className="fa-solid fa-exclamation-triangle mr-2"></i> Error:{" "}
          {error}
        </div>
      )}

      {/* Grid for settings cards */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
          isLoading ? "opacity-50" : ""
        }`}
      >
        {" "}
        {/* Optional opacity during load */}
        {/* Profile Settings Card (Static content for now) */}
        <div className="bg-neutral-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b border-neutral-700 pb-2">
            Profile Information
          </h2>
          <div className="space-y-4 text-sm">
            {/* Replace with dynamic data if fetched */}
            <div className="flex justify-between">
              <span className="text-gray-400">Name:</span>
              <span className="text-gray-300">John Doe</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Email:</span>
              <span className="text-gray-300">j.doe@lexconnect.law</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Role:</span>
              <span className="text-gray-300">Senior Partner</span>
            </div>
            <div className="text-right mt-4">
              <button className="text-yellow-500 hover:text-yellow-600 text-sm font-medium">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        {/* Security Settings Card (Static content for now) */}
        <div className="bg-neutral-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b border-neutral-700 pb-2">
            Security
          </h2>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Change Password</span>
              <button className="text-yellow-500 hover:text-yellow-600 text-sm font-medium">
                Update
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Two-Factor Authentication</span>
              <span className="px-2 py-0.5 rounded text-xs bg-red-500/20 text-red-500">
                Disabled
              </span>
            </div>
            <div className="text-right mt-4">
              <button className="text-yellow-500 hover:text-yellow-600 text-sm font-medium">
                Manage Security
              </button>
            </div>
          </div>
        </div>
        {/* Notification Settings Card (Static structure, could use fetched values later) */}
        <div className="bg-neutral-800 rounded-xl p-6 shadow-lg md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-200 mb-4 border-b border-neutral-700 pb-2">
            Notifications
          </h2>
          <div className="space-y-3 text-sm">
            {/* Checkbox state would ideally come from fetched settingsData */}
            <div className="flex items-center justify-between">
              <label
                htmlFor="noti-new-message"
                className="text-gray-400 cursor-pointer"
              >
                New message received
              </label>
              <input
                type="checkbox"
                id="noti-new-message"
                className="form-checkbox h-4 w-4 text-yellow-500 bg-neutral-700 border-neutral-600 rounded focus:ring-yellow-500"
                defaultChecked
              />
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="noti-appt-reminder"
                className="text-gray-400 cursor-pointer"
              >
                Appointment reminders
              </label>
              <input
                type="checkbox"
                id="noti-appt-reminder"
                className="form-checkbox h-4 w-4 text-yellow-500 bg-neutral-700 border-neutral-600 rounded focus:ring-yellow-500"
                defaultChecked
              />
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="noti-case-update"
                className="text-gray-400 cursor-pointer"
              >
                Case status updates
              </label>
              <input
                type="checkbox"
                id="noti-case-update"
                className="form-checkbox h-4 w-4 text-yellow-500 bg-neutral-700 border-neutral-600 rounded focus:ring-yellow-500"
              />
            </div>
            <div className="text-right mt-4">
              <button
                onClick={handleSavePreferences}
                className="px-3 py-1 bg-yellow-500 text-black text-xs font-semibold rounded hover:bg-yellow-600 transition-colors duration-200"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* --- END CONDITIONAL RENDERING --- */}
    </div>
  );
};

// Reminder about Tailwind Forms plugin if you use it for checkboxes
// npm install -D @tailwindcss/forms
// add require('@tailwindcss/forms') to tailwind.config.js plugins.

export default SettingsPage;
