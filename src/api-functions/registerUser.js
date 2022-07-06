import axios from "axios";
import axiosInstance from "../api/config";
const registerUser = ({
  email,
  password,
  confirmPassword,
  firstName,
  middleName,
  lastName,
  phone,
}) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = axiosInstance.post(
      "/users/registration",
      {
        email: email,
        password1: password,
        password2: confirmPassword,
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        phone: phone,
      },
      config
    );
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
export { registerUser };
