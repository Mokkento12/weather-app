import { fetchWeather, fetchPopularCities } from "@/lib/weatherApi";
import WeatherCard from "@/components/WeatherCard";

export default async function WeatherPage({
  params,
}: {
  params: { city: string };
}) {
  const data = await fetchWeather(params.city);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Погода в {data.city}</h1>
      <WeatherCard data={data} />
    </div>
  );
}

export const revalidate = 600;

export async function generateStaticParams() {
  const cities = await fetchPopularCities();
  return cities.map((city) => ({
    city: city,
  }));
}
