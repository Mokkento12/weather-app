import Link from "next/link";
import { fetchPopularCities } from "@/lib/weatherApi";
import CitySearch from "@/components/CitySearch";

// 👇 Это статическая генерация — SSG
export const revalidate = 3600; // ISR: обновлять каждые 60 минут

export default async function Home() {
  const cities = await fetchPopularCities();
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Погода в популярных городах</h1>
      <CitySearch />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cities.map((city) => (
          <Link
            key={city}
            href={`/weather/${city}`}
            className="p-4 border rounded-lg hover:bg-gray-50 transition text-center"
          >
            {city.charAt(0).toUpperCase() + city.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
}
