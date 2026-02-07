import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-secondary">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page non trouvée</p>
        <p className="mt-2 text-gray-500">
          La page que vous recherchez n&apos;existe pas.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="btn-primary inline-block text-center"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/collections"
            className="btn-outline-secondary inline-block text-center"
          >
            Voir les collections
          </Link>
        </div>
      </div>
    </div>
  );
}
