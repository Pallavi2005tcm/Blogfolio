import {
  useContext,
  createContext,
  useEffect,
  useState,
  useLayoutEffect
} from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));
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

  // 1. Initialize token from localStorage to avoid initial null state if possible
  //    (However, if we keep useState(null), we must ensure we check storage on mount)
  //    Simplest is to trust the effect to run on mount if we add it as dependency.
  //    But to avoid flash, we can initialize state directly.

  useLayoutEffect(() => {
    if (token) {
      // ✅ Set Axios default header so every request sends the token
      axios.defaults.headers.common["authorization"] = token;
      localStorage.setItem("token", token);
    } else {
      // ❌ Remove header if no token
      delete axios.defaults.headers.common["authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    // Check localStorage on mount if token is null (optional if we init state from storage)
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage && !token) {
      setToken(tokenFromStorage);
    }

    // Fetch blogs
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
