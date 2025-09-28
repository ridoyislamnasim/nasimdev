import Blogs from "./components/Blogs";
import HeroMain from "./components/heroSection/HeroMain";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <main>
            <HeroMain />
      <Projects />
      <Blogs />
      <Newsletter />
    </main>
  );
} 