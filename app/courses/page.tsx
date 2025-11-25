type Course = {
  id: number;
  title: string;
  desc: string;
};

const courses: Course[] = [
  { id: 1, title: "تعلم Next.js", desc: "دورة شاملة من الصفر إلى الاحتراف" },
  { id: 2, title: "أساسيات JavaScript", desc: "ابدأ طريقك في عالم البرمجة" },
  { id: 3, title: "React للمبتدئين", desc: "مدخل مبسط لمكتبة React" }
];

export default function Courses() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">الكورسات المتوفرة</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <a
            key={course.id}
            href={`/courses/${course.id}`}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600">{course.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
