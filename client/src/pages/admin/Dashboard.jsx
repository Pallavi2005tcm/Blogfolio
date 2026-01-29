import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Dashboard = () => {
  // state with proper camelCase
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const { axios } = useAppContext();

  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get("/api/admin/dashboard");

      if (data.success && data.dashboardData) {
        setDashboardData(data.dashboardData);
      } else {
        toast.error(data.message || "Failed to load dashboard");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  // destructure for cleaner JSX
  const { blogs, comments, drafts, recentBlogs } = dashboardData;

  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
      {/* Stats cards */}
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-4 bg-white p-4 min-w-[14rem] rounded shadow hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_1} alt="Blogs Icon" />
          <div>
            <p className="text-xl font-semibold text-gray-600">{blogs ?? 0}</p>
            <p className="text-gray-400 font-light">Blogs</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-4 min-w-[14rem] rounded shadow hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_2} alt="Comments Icon" />
          <div>
            <p className="text-xl font-semibold text-gray-600">{comments ?? 0}</p>
            <p className="text-gray-400 font-light">Comments</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-4 min-w-[14rem] rounded shadow hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_3} alt="Drafts Icon" />
          <div>
            <p className="text-xl font-semibold text-gray-600">{drafts ?? 0}</p>
            <p className="text-gray-400 font-light">Drafts</p>
          </div>
        </div>
      </div>

      {/* Latest Blogs */}
      <div>
        <div className="flex items-center gap-3 m-4 mt-6 text-gray-600">
          <img src={assets.dashboard_icon_4} alt="Latest Blogs Icon" />
          <p>Latest Blogs</p>
        </div>

        <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg bg-white">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-gray-600 text-left uppercase">
              <tr>
                <th className="px-2 py-4 xl:px-6">#</th>
                <th className="px-2 py-4">Blog Title</th>
                <th className="px-2 py-4 max-sm:hidden">Date</th>
                <th className="px-2 py-4 max-sm:hidden">Status</th>
                <th className="px-2 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {recentBlogs?.length > 0 ? (
                recentBlogs.map((blog, index) => (
                  <BlogTableItem
                    key={blog._id || index}
                    blog={blog}
                    index={index + 1}
                    fetchBlogs={fetchDashboard}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-400">
                    No blogs found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
