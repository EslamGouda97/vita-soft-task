// Function to fetch users data
export async function fetchUserData() {
  try {
    const response = await fetch(
      "https://tasks.vitasoftsolutions.com/userdata"
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Function to create user data
export async function createUser(userData) {
  try {
    const response = await fetch(
      "https://tasks.vitasoftsolutions.com/userdata",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    const data = await response.json();
    return data; // Assuming the response contains the created user data
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
}

// Function to update an existing user
export async function updateUser(userId, userData) {
  try {
    const response = await fetch(
      `https://tasks.vitasoftsolutions.com/userdata/${userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to update user");
    }
    const data = await response.json();
    return data; // Assuming the response contains the updated user data
  } catch (error) {
    throw new Error(`Error updating user: ${error.message}`);
  }
}

// Function to delete a user
export async function deleteUser(userId) {
  try {
    const response = await fetch(
      `https://tasks.vitasoftsolutions.com/userdata/${userId}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
}
