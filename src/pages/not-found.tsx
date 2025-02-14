import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-4 text-blue-500 underline">
        Go Back Home
      </Link>
    </div>
  );
}
