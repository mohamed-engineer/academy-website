type CourseDetail = {
  title: string;
  content: string;
};

const courses: Record<number, CourseDetail> = {
  1: { title: "تعلم Next.js", content: "تفاصيل دورة Next.js..." },
  2: { title: "أساسيات JavaScript", content: "تفاصيل دورة JavaScript..." },
  3: { title: "React للمبتدئين", content: "تفاصيل دورة React..." }
};

interface Props {
  params: {
    id: string;
  };
}

export default function CourseDetails({ params }: Props) {
  const id = Number(params.id);
  const course = courses[id];

  if (!course) return <h1>الكورس غير موجود</h1>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-700">{course.content}</p>
    </div>
  );
}
