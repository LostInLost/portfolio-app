import Hero from "@/components/landing-page/hero";
import Navbar from "@/components/landing-page/navbar";

export default function Home() {
  return (
    <main className="relative w-full flex items-center justify-center container">
      <Navbar className="top-2" />
      <div className="grid gap-3 place-items-stretch w-full mt-[5rem]">
        <Hero />

      </div>
    </main>
  );
}
