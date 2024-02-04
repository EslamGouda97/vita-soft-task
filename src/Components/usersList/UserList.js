"use client";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import moment from "moment";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserList, removeUser } from "@/_lib/store/Slices/userSlice";
import { deleteUser, fetchUserData } from "@/utils/api/api";

function UserListPage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users?.userList);
  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 8; // Number of items per page
  const offset = currentPage * PER_PAGE;
  const currentPageData = users?.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(users?.length / PER_PAGE);

  useEffect(() => {
    // Populate the Redux store with initial user list
    const initalUsersData = async () => {
      const usersData = await fetchUserData();
      dispatch(setUserList(usersData));
    };
    initalUsersData();
  }, [dispatch]);

  const handleDeleteUser = async (userId) => {
    try {
      // Delete user from API
      await deleteUser(userId);
      dispatch(removeUser(userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Profile Picture</th>
              <th className="px-4 py-2">Birthdate</th>
              <th className="px-4 py-2">Joining Date</th>
              <th className="px-4 py-2">Active Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {currentPageData?.map((user) => (
              <tr key={user.id} className="bg-gray-100">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">
                  <img
                    src={user.profile_picture}
                    alt="Profile"
                    className="h-10 w-10 rounded-full"
                  />
                </td>
                <td className="px-4 py-2">
                  {moment(user.birthdate).format("MM-DD-YYYY")}
                </td>
                <td className="px-4 py-2">
                  {moment(user.joining_date).format("MM-DD-YYYY")}
                </td>
                <td className="px-4 py-2">
                  {user.active_status ? "Active" : "Inactive"}
                </td>
                <td className="px-4 py-2 flex justify-center items-center gap-2">
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                    type="button"
                  >
                    Delete
                  </button>
                  <Link
                    href={`/update-user/${user.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< Previous "
          renderOnZeroPageCount={null}
          containerClassName="flex list-none rounded my-5"
          pageLinkClassName="py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          previousLinkClassName="py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-l"
          nextLinkClassName="py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r"
          activeLinkClassName="bg-gray-300"
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>
    </div>
  );
}

export default UserListPage;
