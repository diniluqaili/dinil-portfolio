import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import CursorTrail from "@/components/CursorTrail";

export default function Home() {
  return (
    <>
      <CursorTrail />
      <LoadingScreen />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <div style={{ width: "100%", height: 1, background: "var(--edge)" }} />
        <About />
        <div style={{ width: "100%", height: 1, background: "var(--edge)" }} />
        <Skills />
        <div style={{ width: "100%", height: 1, background: "var(--edge)" }} />
        <Projects />
        <div style={{ width: "100%", height: 1, background: "var(--edge)" }} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
