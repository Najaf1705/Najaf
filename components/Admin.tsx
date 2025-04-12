"use client"
import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore"; // Missing import
import toast from "react-hot-toast";
import { firestore } from "@/lib/firebase"; // Ensure correct import for Firestore

function Admin() {
  const [isPasswordDialogOpen, setPasswordDialogOpen] = useState(false);
  const [isTableDialogOpen, setTableDialogOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [tableData, setTableData] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const docRef = doc(firestore, "portfolio", "RsVo69EKQqJmRUdeIckC");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const formattedData = Object.keys(data).map((key) => ({
          link: key,
          count: data[key],
        }));

        setTableData(formattedData);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (isPasswordDialogOpen || isTableDialogOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isPasswordDialogOpen, isTableDialogOpen]);

  return (
    <div>
      <button onClick={() => setPasswordDialogOpen(true)}>
        <small>Admin</small>
      </button>

      {isPasswordDialogOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="bg-gray-600 p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4 text-black">Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  if (password === process.env.NEXT_PUBLIC_ADMIN_PASS) {
                    setPasswordDialogOpen(false);
                    setPassword("");
                    setTableDialogOpen(true);
                  } else {
                    toast.error("Incorrect password!");
                  }
                }}
                className="text-white bg-black py-1 px-2 rounded-xl"
              >
                Submit
              </button>
              <button
                onClick={() => setPasswordDialogOpen(false)}
                className="bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isTableDialogOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50 text-black">
          <div className="bg-gray-600 p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Clicks</h3>
            <div className="mb-4 overflow-x-auto">
              <table className="w-full table-auto text-sm text-white">
                <thead>
                  <tr>
                    <th className="border-b border-gray-400 p-2 text-left">Link</th>
                    <th className="border-b border-gray-400 p-2 text-left">Clicks</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td className="border-b border-gray-400 p-2">{row.link}</td>
                      <td className="border-b border-gray-400 p-2">{row.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setTableDialogOpen(false)}
                className="bg-black text-white p-2 rounded hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
