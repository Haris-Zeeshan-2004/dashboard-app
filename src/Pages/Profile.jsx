import React, { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    bio: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      setProfile(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4">Profile Page</h2>
      <p>
        <strong>Name:</strong> {profile.fullName}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      <p>
        <strong>Bio:</strong> {profile.bio}
      </p>
    </div>
  );
};

export default Profile;
