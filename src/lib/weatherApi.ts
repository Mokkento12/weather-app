export type WeatherData = {
  city: string;
  temp: number;
  condition: string;
  humidity: number;
  icon: string;
};

// Моковая функция — имитирует задержку и API
export async function fetchWeather(city: string): Promise<WeatherData> {
  // Имитируем задержку сети
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Простая моковая логика
  const mockData: Record<string, WeatherData> = {
    moscow: {
      city: "Москва",
      temp: 18,
      condition: "Облачно",
      humidity: 65,
      icon: "⛅",
    },
    london: {
      city: "Лондон",
      temp: 12,
      condition: "Дождь",
      humidity: 80,
      icon: "🌧️",
    },
    tokyo: {
      city: "Токио",
      temp: 22,
      condition: "Солнечно",
      humidity: 55,
      icon: "☀️",
    },
  };

  const data = mockData[city.toLowerCase()] || {
    city: city,
    temp: Math.floor(Math.random() * 30),
    condition: "Неизвестно",
    humidity: Math.floor(Math.random() * 100),
    icon: "❓",
  };

  return data;
}

// Для главной страницы — список популярных городов
export async function fetchPopularCities(): Promise<string[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return ["moscow", "london", "tokyo", "paris", "new york"];
}
