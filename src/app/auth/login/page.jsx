"use client";
import React, { useState } from "react";
import Link from "next/link";
import useAuthStore from "@/zustand/AuthStore";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = useAuthStore((state) => state.signIn);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await signIn(email, password);

    if (success) {
      router.push("/");
    } else {
      router.refresh();
    }
  };

  return (
    <div>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          <div>
            <Link href="/auth/register">Not signed in? Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
