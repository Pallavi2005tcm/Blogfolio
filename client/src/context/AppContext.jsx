import {
  useContext,
  createContext,
  useEffect,
  useState
} from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState("");

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/blog/all");

      data.success
        ? setBlogs(data.blogs)
        : toast.error(data.message);

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to load blogs"
      );
    }
  };

  useEffect(() => {
  // Load token from localStorage
  const tokenFromStorage = localStorage.getItem("token");

  if (tokenFromStorage) {
    setToken(tokenFromStorage);

    // ✅ Set Axios default header so every request sends the token
    axios.defaults.headers.common["authorization"] = tokenFromStorage;
  }

  // Fetch blogs after setting token
  fetchBlogs();
}, []);


  const value = {
    axios,
    navigate,
    token,
    setToken,
    blogs,
    setBlogs,
    input,
    setInput
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
