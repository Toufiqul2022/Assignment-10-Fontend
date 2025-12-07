import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [update, setUpdate] = useState(false);

  if (!user) {
    return <p className="text-center text-xl mt-10">Please login first.</p>;
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    updateProfile(auth.currentUser, { displayName: name, photoURL: photoUrl })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoUrl });
        setUpdate(false);
      })
      .catch(console.log);
  };

  return (
    <div className="flex flex-col items-center py-5">
      <div className="avatar">
        <div className="w-36 rounded-full">
          <img src={user?.photoURL} alt="profile" />
        </div>
      </div>

      <p className="text-xl font-semibold">{user?.displayName}</p>
      <p className="text-lg text-gray-500">{user?.email}</p>

      <button onClick={() => setUpdate(!update)} className="btn mt-3">
        Update Profile
      </button>

      {update && (
        <form onSubmit={handleUpdate} className="card-body max-w-sm w-full">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            className="input"
          />

          <label className="label mt-2">PhotoURL</label>
          <input
            type="text"
            name="photoUrl"
            defaultValue={user?.photoURL}
            className="input"
          />

          <button className="btn btn-neutral mt-4" type="submit">
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
};

export default MyProfile;
