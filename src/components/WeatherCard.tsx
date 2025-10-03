"use client"; // 👈 Этот компонент использует клиентские хуки → нужен use client

import { WeatherData } from "../lib/weatherApi";
import { useState } from "react";

export default function WeatherCard({ data }: { data: WeatherData }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="border rounded-lg p-4 bg-black shadow">
      <div className="text-center">
        <div className="text-5xl mb-2">{data.icon}</div>
        <h2 className="text-2xl font-bold">{data.temp}°C</h2>
        <p className="text-gray-600">{data.condition}</p>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="mt-4 text-blue-600 hover:underline"
        >
          {showDetails ? "Скрыть" : "Подробнее"}
        </button>
        {showDetails && (
          <div className="mt-4 p-3 bg-gray-50 rounded">
            <p>Влажность: {data.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
}
