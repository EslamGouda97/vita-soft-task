import EditUser from "@/Components/editForm/EditUser";
import React from "react";

export const metadata = {
  title: "Update User",
};

export default function page({ params }) {
  return (
    <>
      <EditUser id={params.userId} />
    </>
  );
}
