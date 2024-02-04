"use client";
import { notFound, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { updateUser, fetchUserById } from "@/utils/api/api";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSelector } from "react-redux";

const EditUser = (props) => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    name: "",
    profile_picture: "",
    birthdate: "",
    active_status: false,
  });
  const router = useRouter();
  const id = props.id;
  const usersList = useSelector((state) => state.users?.userList);
  useEffect(() => {
    const user = usersList.find((user) => user.id === parseInt(id));
    if (user && usersList) {
      setUser(user);
    } else {
      notFound();
    }
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Access the user list from Redux store
      const usersList = useSelector((state) => state.users?.userList);
      // Check if the user exists
      const userExists = usersList.some((user) => user.id === id);
      if (userExists) {
        await updateUser(id, user);
        router.push("/users");
      } else {
        setError("This user is not found.");
      }
    } catch (err) {
      setError("Failed to update the user. Please try again.");
      // console.error(err); // Log the error for debugging purposes
    }
  };
  return (
    <div className="max-w-4xl mx-auto my-auto px-4 py-8 border border-2-gray">
      <h2 className="text-2xl font-bold mb-6">Update User</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mt-1">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <div className="mt-1 border rounded-lg">
            <CKEditor
              editor={ClassicEditor}
              data={user.name}
              onChange={(event, editor) => {
                const data = editor.getData();
                setUser((prev) => ({ ...prev, name: data }));
              }}
              config={{
                toolbar: [
                  "heading",
                  "|",
                  "bold",
                  "italic",
                  "link",
                  "bulletedList",
                  "numberedList",
                  "blockQuote",
                ],
                placeholder: "Enter the user name...",
              }}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Profile Picture
          </label>
          <input
            type="text"
            value={user.profile_picture}
            onChange={(e) =>
              setUser({ ...user, profile_picture: e.target.value })
            }
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            placeholder="Profile image URL"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Birthdate
          </label>
          <input
            type="date"
            value={user.birthdate}
            onChange={(e) => setUser({ ...user, birthdate: e.target.value })}
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Active Status
          </label>
          <select
            value={user.active_status ? "Active" : "Inactive"}
            onChange={(e) =>
              setUser({ ...user, active_status: e.target.value === "Active" })
            }
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Update
        </button>
        {error && (
          <div className="mb-4 text-sm font-medium text-red-600">{error}</div>
        )}{" "}
      </form>
    </div>
  );
};

export default EditUser;
