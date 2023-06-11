"use client";
import React from "react";
import Link from "next/link";
import useAuthStore from "@/zustand/AuthStore";

const Navbar = () => {
  const { user, signOut } = useAuthStore();
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">Home</Link>
        <ul className="flex items-center space-x-4">
          <li>
            {user ? (
              <>
                <span className="text-white">{user.email}</span>
                <span>
                  <Link href="/betting-dashboard">Dashboard</Link>
                </span>
                <button
                  className="text-white px-2 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
                  onClick={signOut}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link href="/auth/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
