import axios from "axios";

export const registerUser = async (data: any) => { //eslint-disable-line @typescript-eslint/no-explicit-any
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/local/register`, data);
  return response;
};