import React, { useState, useEffect } from "react";
import { firestore } from "../lib/firebase";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import toast from "react-hot-toast";


export default function Footer() {
  const currentYear = new Date().getFullYear();
  const documentId = process.env.NEXT_PUBLIC_FIREBASE_DOCUMENT_ID;

  // State variables
  const [isPasswordDialogOpen, setPasswordDialogOpen] = useState(false);
  const [isTableDialogOpen, setTableDialogOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [tableData, setTableData] = useState<any[]>([]);

  // Fetch data from Firestore for the specific document
  const fetchData = async () => {
    try {
      const docRef = doc(firestore, "portfolio", "RsVo69EKQqJmRUdeIckC"); // Using the env var for document ID
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        
        const formattedData = Object.keys(data).map((key) => ({
          link: key,
          count: data[key],
        }));

        setTableData(formattedData); // Set the formatted data in the state
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document: ", error);
    }
  };

  useEffect(() => {
    // Fetch data when component mounts
    fetchData();
  }, []);

  // Handle admin button click
  const handleAdminClick = () => {
    setPassword(""); // Reset password field when opening the dialog
    setPasswordDialogOpen(true);
  };

  // Handle password dialog submission
  const handlePasswordSubmit = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      setPasswordDialogOpen(false);
      setTableDialogOpen(true);
    } else {
      // alert("Incorrect password!");
      toast.error("Incorrect password!");
    }
  };

  // Use useEffect to add/remove the no-scroll class on the body
  useEffect(() => {
    if (isPasswordDialogOpen || isTableDialogOpen) {
      // Add no-scroll class when dialog is open
      document.body.classList.add("overflow-hidden");
    } else {
      // Remove no-scroll class when dialog is closed
      document.body.classList.remove("overflow-hidden");
    }
  }, [isPasswordDialogOpen, isTableDialogOpen]);

  return (
    <div>
      <button onClick={handleAdminClick}>
        <small>Admin</small>
      </button>

      {/* Password Dialog */}
      {isPasswordDialogOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="bg-gray-600 p-6 rounded-lg shadow-lg max-w-sm w-full animate-scale-up">
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
                onClick={handlePasswordSubmit}
                className="text-white bg-black dark:text-black dark:bg-white border-black/5 py-1 px-2 rounded-xl flex items-center gap-2"
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

      {/* Table Section */}
      {isTableDialogOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50 text-black">
          <div className="bg-gray-600 p-6 rounded-lg shadow-lg max-w-sm w-full animate-scale-up">
            <h3 className="text-lg font-semibold mb-4">Clicks</h3>
            <div className="mb-4 overflow-x-auto">
              <table className="w-full table-auto text-sm text-white">
                <thead>
                  <tr>
                    <th className="border-b border-gray-400 p-2 text-left">Link</th>
                    <th className="border-b border-gray-400 p-2 text-left">clicks</th>
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
                onClick={() => setTableDialogOpen(false)} // Close the table dialog
                className="bg-black text-white p-2 rounded hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="px-4 text-center text-white dark:text-black bg-black dark:bg-gray-400">
        <small className="block text-xs">
          &copy; {currentYear} Najaf Shaikh. All rights reserved.
        </small>
      </footer>
    </div>
  );
}
