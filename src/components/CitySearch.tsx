"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CitySearch = () => {
  const [city, setCity] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      router.push(`/weather/${city.trim().toLowerCase()}`);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Введите город..."
        className="px-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  );
};

export default CitySearch;
