import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <div id="home">
        <ScrollyCanvas />
      </div>
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
