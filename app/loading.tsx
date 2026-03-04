export default function Loading() {
  return (
    <div className="bg-white py-8 sm:py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-10 w-full rounded-lg bg-gray-200 sm:h-14" />

          <div className="mt-8 h-8 w-40 rounded-md bg-gray-200" />
          <div className="mt-3 h-4 w-72 max-w-full rounded bg-gray-100" />

          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white"
              >
                <div className="aspect-[3/4] w-full bg-gray-200" />
                <div className="space-y-2 p-3 sm:p-4">
                  <div className="h-4 w-3/4 rounded bg-gray-200" />
                  <div className="h-3 w-1/2 rounded bg-gray-100" />
                  <div className="h-9 w-28 rounded-md bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
