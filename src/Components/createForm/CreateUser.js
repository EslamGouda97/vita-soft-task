"use client";
import { useState } from "react";
import Dropzone from "react-dropzone";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

const AddUserPage = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [birthdate, setBirthdate] = useState(new Date());
  const [activeStatus, setActiveStatus] = useState(false);
  const [description, setDescription] = useState("");
  const router = useRouter();

  const [formattedBirthdate, setFormattedBirthdate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  const handleDateChange = (date) => {
    setBirthdate(date);
    setFormattedBirthdate(format(date, "yyyy-MM-dd"));
  };
  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setProfilePicture({
        ...file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        name,
        profilePicture,
        formattedBirthdate,
        activeStatus,
        description,
      };
      await createUser(userData);
      router.push("/users");
    } catch (err) {
      setError("Failed to update the user. Please try again.");
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-lg mx-auto mt-10 my-9"
    >
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter the user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Profile Picture
        </label>
        <div className="p-4">
          <Dropzone onDrop={handleDrop} multiple={false} accept="image/*">
            {({ getRootProps, getInputProps }) => (
              <section className="dropzone flex justify-center items-center border-2 border-dashed border-gray-300 rounded-md p-4 h-64 w-full">
                <div {...getRootProps()} className="text-center">
                  <input {...getInputProps()} />
                  {!profilePicture && (
                    <p>
                      drop a profile picture here, or click to select a file
                    </p>
                  )}
                  {profilePicture && (
                    <div>
                      <img
                        src={profilePicture.preview}
                        alt="Profile preview"
                        className="mx-auto h-32 w-32 object-cover rounded-full"
                      />
                    </div>
                  )}
                </div>
              </section>
            )}
          </Dropzone>
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Birthdate
        </label>
        <DatePicker
          selected={birthdate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Active Status
        </label>
        <input
          type="checkbox"
          checked={activeStatus}
          onChange={(e) => setActiveStatus(e.target.checked)}
          className="leading-tight"
        />
        <span className="text-sm"> Active</span>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <CKEditor
          editor={ClassicEditor}
          data={description}
          onChange={(event, editor) => {
            const data = editor.getData();
            setDescription(data);
          }}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "|",
              "bulletedList",
              "numberedList",
              "|",
              "undo",
              "redo",
            ],
          }}
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add User
      </button>
      {error && (
        <div className="mb-4 text-sm font-medium text-red-600">{error}</div>
      )}{" "}
    </form>
  );
};

export default AddUserPage;
