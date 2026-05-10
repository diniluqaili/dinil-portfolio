import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <div style={{ width: "100%", height: 1, background: "var(--edge)" }} />
        <About />
        <div style={{ width: "100%", height: 1, background: "var(--edge)" }} />
        <Skills />
      </main>
    </>
  );
}
