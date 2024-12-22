import axios from "axios";

export const registerUser = async (data: any) => { //eslint-disable-line @typescript-eslint/no-explicit-any
  const response = await axios.post(`https://rudruksha-server.onrender.com/auth/register`, data);
  return response;
};
