"use client";

import Link from "next/link";
import CustomImage from "./components/CustomImage";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

export default function Page() {
  useIntersectionObserver(".fade-in-element");

  return (
    <section className="prose ml-8 mr-8">
      <div className="mt-48 mb-32 flex flex-col items-center gap-8">
        <div className="mb-8 text-center fade-in-element opacity-0">
          <p className="title poppins bold text-8xl md:text-9xl lg:text-[190px]">
            HEY, I'M
          </p>
          <p className="title font-fraunces-thin-i text-8xl md:text-9xl lg:text-[190px]">
            VINÍCIUS
          </p>
        </div>
        <p className="title font-fraunces-thin-i text-5xl md:text-7xl lg:text-8xl text-center fade-in-element opacity-0">
          GAME DESIGNER
        </p>
        <p className="title font-fraunces-thin-i text-5xl md:text-7xl lg:text-8xl text-center fade-in-element opacity-0">
          GAME DEVELOPER
        </p>
        <p className="title font-fraunces-thin-i text-5xl md:text-7xl lg:text-8xl text-center fade-in-element opacity-0">
          VISUAL ARTIST
        </p>
        <p className="max-w-[50rem] min-w-[18rem] mx-8 text-xl text-justify fade-in-element opacity-0">
          I help bring people's visions to fruition by combining my{" "}
          <b>technical skills</b> with my <b>artistic perspective</b>. This
          allows me to create <b>unique</b>, <b>creative</b>, and technically{" "}
          <b>robust</b> video games.
        </p>
        <Link href={"/works"}>
          <button className="cursor-pointer mt-8 bg-transparent text-lime-200 hover:text-[#171415] transition-all duration-300 rounded-full px-10 py-5 text-xl">
            SEE MY WORK
          </button>
        </Link>
      </div>

      <div className="m-8 md:m-16 lg:m-48 flex flex-col items-center gap-32">
        <div className="self-start">
          <CustomImage
            src="https://i.ibb.co/19SxrGF/paravoile.png"
            alt="Hebald Forest"
            link="/works/hebald-forest"
            maxWidth="40rem"
          />
          <Link href={"/works/hebald-forest"}>
            <h2>Hebald Forest</h2>
            <p>Open world adventure game – Unreal Engine 5</p>
          </Link>
        </div>

        <div className="self-end">
          <CustomImage
            src="https://ludhic.fr/wp-content/uploads/2023/01/anamnesis02.webp"
            alt="Anamnesis"
            link="/works/anamnesis"
            maxWidth="40rem"
          />
          <Link href={"/works/anamnesis"}>
            <h2>Anamnesis</h2>
            <p>Narrative VR Game – Unity</p>
          </Link>
        </div>

        <div className="self-start">
          <CustomImage
            src="https://i.pinimg.com/564x/77/e2/c2/77e2c23bd4a54c852e15c146079e4b7c.jpg"
            alt="Tangled Tales"
            link="/works/tangled-tales"
            maxWidth="40rem"
          />
          <Link href={"/works/tangled-tales"}>
            <h2>Tangled Tales</h2>
            <p>2D Platformer – Unity</p>
          </Link>
        </div>

        <div className="self-end">
          <CustomImage
            src="https://i.ibb.co/GPvMSqy/Captura-de-Tela-2024-09-13-s-12-00-21.png"
            alt="Kentyou"
            link="/works/kentyou"
            maxWidth="40rem"
          />
          <Link href={"/works/kentyou"}>
            <h2>Kentyou Website Design</h2>
            <p>Web Design of Kentyou's website using Figma</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
