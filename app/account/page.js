import { auth } from "@/app/_lib/auth";
import Link from "next/link";
import { FaSuitcase, FaUserEdit } from "react-icons/fa";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  const isButterflyUser = ["ouissem", "saidani"].includes(
    firstName.toLowerCase()
  );
  const emoji = isButterflyUser ? "🦋" : "🌲";

  return (
    <div className="bg-primary-900/50 backdrop-blur-sm rounded-lg shadow-md p-8 max-w-4xl mx-auto mt-12">
      <h2 className="text-4xl font-bold text-accent-400 mb-4 relative inline-block group">
        Welcome back, {firstName}!&nbsp;
        {isButterflyUser ? (
          <span className="absolute -top-8 -left-10 text-3xl animate-flutter-in group-hover:animate-flutter transition">
            {emoji}
          </span>
        ) : (
          <span>{emoji}</span>
        )}
      </h2>

      <p className="text-primary-200 text-lg max-w-2xl mb-8">
        We’re glad to have you again. From here, you can check your upcoming
        reservations, update your profile, or explore more luxury cabins.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link
          href="/account/reservations"
          className="bg-primary-800 hover:bg-primary-700 text-primary-100 px-6 py-4 rounded shadow-md transition flex items-center gap-3"
        >
          <FaSuitcase className="text-accent-400" />
          View My Reservations
        </Link>

        <Link
          href="/account/profile"
          className="bg-primary-800 hover:bg-primary-700 text-primary-100 px-6 py-4 rounded shadow-md transition flex items-center gap-3"
        >
          <FaUserEdit className="text-accent-400" />
          Update My Profile
        </Link>
      </div>
    </div>
  );
}
