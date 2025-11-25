import Header from "./components/header";
import Hero from "./components/hero";
import CoursesSection from "./components/CoursesSection";
import TeachersSection from "./components/TeachersSection";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CoursesSection />
      <TeachersSection />
      <Footer />
    </div>
  );
}
