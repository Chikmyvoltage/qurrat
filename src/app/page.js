import Navigation from "@/component/Navigation";
import Floaters from "@/component/Floaters";
import Figure from "@/assets/figure.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden relative bg-tertiary text-white items-center justify-items-center min-h-screen pb-20 gap-16 font-sg">
      <div className="flex flex-col items-center justify-items-center gap-16 h-full relative w-full">
        <Floaters/>
        <Navigation/>
        <main className="flex flex-col relative z-10 gap-8 row-start-2 items-center">
          <h1 className="capitalize text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            A small passionate team trying to find <br/>
            <span className="text-white/50">a way to help other people</span>
          </h1>
          <div className="relative w-full py-[30%]">
            <Image 
              src={Figure.src} 
              alt="Illustrative art depicting two people looking opposite each other" 
              loading="eager" 
              fill 
              className="object-contain"
              priority/>
          </div>
          
          <section className="w-full px-12 font-medium">
            <ul className="bg-black/40 flex text-center flex-row justify-between rounded-xl px-18 py-2 aspect-[6]">
              <li className="flex flex-col gap-4">
                <span>Team Members</span>
                <span className="text-6xl">3</span>
              </li>
              <li className="flex flex-col gap-4">
                <span>Number of Projects</span>
                <span className="text-6xl">4</span>
              </li>
              <li className="flex flex-col gap-4">
                <span>Founded in</span>
                <span className="text-6xl">2025</span>
              </li>
            </ul>
          </section>
        </main>
      </div>
      <section className="min-h-screen w-full bg-tertiary z-20 border-t-[1px] p-4">
        <p className="text-4xl text-center mt-24">The best way to learn is to start...</p>
      </section>
    </div>
  );
}
