"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-6 max-w-md mx-auto text center">
      <h2 className="text-xl font-bold text-red-600 mb-4">Ошибка загрузки</h2>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Попробовать снова
      </button>
    </div>
  );
}
