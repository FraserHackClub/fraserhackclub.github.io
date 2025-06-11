import Team from "./components/Team";
import Landing from "./components/Landing";
import Programs from "./components/Programs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Landing />
      <Programs />
      <Team />
      <Footer />
    </div>
  );
}
