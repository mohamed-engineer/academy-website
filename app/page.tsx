export default function Home() {
  return (
    <div className="text-center pt-10">
      <h1 className="text-3xl font-bold mb-4">مرحباً بك في منصتنا التعليمية</h1>
      <p className="text-gray-600 mb-6">
        تعلّم عبر أفضل الدورات المجهزة خصيصاً لك.
      </p>
      <a
        href="/courses"
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
      >
        تصفح الكورسات
      </a>
    </div>
  );
}
