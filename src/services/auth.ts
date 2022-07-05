import axios from "@axios";

const PREFIX_ENTRY = "/v1/auth";

const login = async (username: string, password: string) => {
  const response = await axios.post(`${PREFIX_ENTRY}/login`, {
    username,
    password,
  });

  return response;
};

const logout = async () => {
  const response = await axios.post(`${PREFIX_ENTRY}/logout`);

  return response;
};

const instance = {
  login,
  logout,
};

export default instance;
