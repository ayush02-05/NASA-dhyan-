import { useState } from "react";
import { Search, History } from "lucide-react";
import image from "../../assets/heaven.jpg";
import Sidebar from "../../components/Dash/Sidebar";

export default function ImageGenerator({user}) {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <div className="relative w-screen h-screen flex items-center">
      <div className="bg-transparent absolute left-0 z-50">
        <Sidebar user={user} />
      </div>
      <div className="relative w-screen h-screen">
        {/* Background */}
        <div className="w-full h-full absolute bottom-22 z-0 object-cover">
          <img className="w-full" src={image} alt="" />
        </div>
        {/* frontground */}
        <div className="flex items-center relative justify-center min-h-screen ">
          <div className="w-full max-w-lg backdrop-blur-sm rounded-2xl shadow-lg p-6 border-2 border-zinc-500">
            <h1 className="text-2xl font-bold text-white mb-6 text-center">
              Image Generator
            </h1>

            {/* Option Buttons */}
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => setActiveTab("history")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
                  activeTab === "history"
                    ? " text-white bg-blue-900"
                    : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
                }`}
              >
                <History size={18} />
                Select from History
              </button>

              <button
                onClick={() => setActiveTab("search")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
                  activeTab === "search"
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-gray-100 text-black border-gray-300 hover:bg-gray-200"
                }`}
              >
                <Search size={18} />
                Search
              </button>
            </div>

            {/* Content Area */}
            <div className="p-4 rounded-xlbg-zink-900 border-zinc-700 border-2 bg-gradient-to-br from-blue-700 via-blue to-blue-900 bg-opacity-50 shadow-xl backdrop-filter backdrop-blur-xl rounded-2xl">
              {activeTab === "history" ? (
                <div className="text-center text-white">
                  <p>No images in history yet.</p>
                  <p className="text-sm mt-1">
                    Your generated images will appear here.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Enter prompt to search..."
                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">
                    Generate Image
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
