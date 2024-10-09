import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfilePage = () => {
  // Define state variables for the input fields
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("shanu@example.com"); // Hardcoded email for fetching
  const [isEditing, setIsEditing] = useState(false); // Toggle between edit/view mode

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data by hardcoded email
        const response = await axios.get(`http://localhost:3001/selectuserbyemail`, {
          params: { email: email } // Sending email as a query parameter
        });
        
        // Set user data to state variables
        setUsername(response.data.username);
        setDob(response.data.dob);
        setMobile(response.data.number);
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Error fetching user data.");
      }
    };

    fetchUserData(); // Call the function to fetch data
  }, [email]); // Runs when the component mounts

  

  const handleSave = () => {
    // Handle save logic here
    console.log("Profile Saved", { username, dob, mobile, email });
    setIsEditing(false); // Switch back to view mode
    alert("Profile saved successfully!");
  };

  const handleEdit = () => {
    setIsEditing(true); // Switch to edit mode
  };

  const handleCancel = () => {
    setIsEditing(false); // Cancel edit mode, return to view mode
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg overflow-hidden">
        {/* Profile Cover Image */}
        <div className="bg-cover bg-center h-40 bg-pink-500"></div>

        <div className="p-6">
          {/* Profile Image */}
          <div className="flex justify-center -mt-16">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-white"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
          </div>

          {/* User Information */}
          <div className="text-center mt-4">
            <h2 className="text-2xl font-semibold text-gray-800">{username || 'Loading...'}</h2>
          </div>

          {/* Conditional rendering for View/Edit Mode */}
          <div className="mt-6">
            {!isEditing ? (
              <>
                {/* View Mode */}
                <div className="mb-4">
                  <p><strong>Username:</strong> {username}</p>
                </div>
                <div className="mb-4">
                  <p><strong>Email:</strong> {email}</p> {/* Display email */}
                </div>
                <div className="mb-4">
                  <p><strong>Date of Birth:</strong> {dob}</p>
                </div>
                <div className="mb-4">
                  <p><strong>Mobile Number:</strong> {mobile}</p>
                </div>

                {/* Edit Button */}
                <button
                  onClick={handleEdit}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Edit
                </button>
              </>
            ) : (
              <>
                {/* Edit Mode */}
                <div className="mb-4">
                  <label className="block text-gray-700">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 px-4 py-2 border rounded-lg w-full text-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 px-4 py-2 border rounded-lg w-full text-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="mt-1 px-4 py-2 border rounded-lg w-full text-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Mobile Number</label>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="mt-1 px-4 py-2 border rounded-lg w-full text-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Save and Cancel Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={handleSave}
                    className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Social Links */}
          <div className="mt-6 flex justify-center gap-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Twitter
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              LinkedIn
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
