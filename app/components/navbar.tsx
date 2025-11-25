import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">EduPlatform</h1>
      <ul className="flex gap-6">
        <li>
          <Link href="/" className="hover:underline">
            الرئيسية
          </Link>
        </li>
        <li>
          <Link href="/courses" className="hover:underline">
            الكورسات
          </Link>
        </li>
      </ul>
    </nav>
  );
}
