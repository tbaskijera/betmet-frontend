"use client";
import React, { useState } from "react";
import useAuthStore from "@/zustand/AuthStore";
import Link from "next/link";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = useAuthStore((state) => state.signUp);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await signUp(email, password);

    if (success) {
      router.push("/");
    } else {
      router.refresh();
    }
  };

  return (
    <div>
      <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <button type="submit">Register</button>
          <div>
            <Link href="/auth/login">Already a member? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
