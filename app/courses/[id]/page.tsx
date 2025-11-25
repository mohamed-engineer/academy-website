"use client";

import { motion } from "framer-motion";

type CourseDetail = {
  title: string;
  content: string;
};

const data: Record<number, CourseDetail> = {
  1: { title: "Next.js من الصفر", content: "شرح شامل خطوة بخطوة..." },
  2: { title: "JavaScript احترافي", content: "أساسيات + مشاريع..." },
  3: { title: "React متقدم", content: "Hooks, Context..." },
};

export default function CourseDetails({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const course = data[id];

  if (!course) return <h1>الكورس غير موجود</h1>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.content}</p>
    </div>
  );
}
