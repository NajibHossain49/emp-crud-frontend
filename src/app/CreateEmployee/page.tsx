"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import API from "../utils/api";

export default function CreateEmployee() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/employees", { name, position, salary });
    router.push("/employees");
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} required />
        <input type="number" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
