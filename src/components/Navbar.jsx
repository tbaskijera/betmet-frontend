"use client";
import React from "react";
import Link from "next/link";
import useAuthStore from "@/zustand/AuthStore";

const Navbar = () => {
  const { user, signOut } = useAuthStore();
  return (
    <nav>
      <div>
        <Link href="/">Home</Link>
        <ul>
          <li>
            {user ? (
              <>
                <span>{user.email}</span>
                <span>
                  <Link href="/betting-dashboard">Dashboard</Link>
                </span>
                <button onClick={signOut}>Sign Out</button>
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
