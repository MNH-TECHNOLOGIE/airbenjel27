export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-primary" />
        <p className="text-sm font-semibold tracking-wide text-secondary">
          Chargement...
        </p>
      </div>
    </div>
  );
}
