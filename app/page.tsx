import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-lg h-dvh flex flex-col  justify-between justify-items-center content-center">
      <div className="w-full text-center flex-col flex   items-center gap-4 ">
        <div className="relative h-20 w-60 ">
          <Image
            alt="Teach Kindness Logo"
            src="/teach-kindness-logo.png"
            objectFit="contain"
            fill={true}
            className="object-contain"
          />
        </div>
        <p className="text-base w-1/2 text-gray-800 ">
          Making the world a kinder place, one act at a time
        </p>
      </div>
      <div className="text-lg/relaxed text-fuchsia-950  space-y-4 flex-1 flex  flex-col  justify-center">
        <p>
          We're an organization dedicated to making the world a kinder place. We
          achieve this through spreading our message via children's books,
          merchandise, as well as school and library tours that highlight the
          importance and impact of kindness.
        </p>
        <p>
          Our mission is to spread kindness while also raising funds for mental
          health initiatives.
        </p>
        <p>And in the meantime, remember to always be kind.</p>
        <p>🩷, Chloe</p>
      </div>
      <Footer />
    </div>
  );
}
