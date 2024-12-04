import axios from "axios";

const userapi = "https://jsonplaceholder.typicode.com/users";
export const fetchUser = async () => {
  try {
    const response = await axios.get(userapi);
    return response.data;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
};
