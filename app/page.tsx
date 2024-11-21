"use client";

import Link from "next/link";
import CustomImage from "./components/CustomImage";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import CustomButton from "./components/CustomButton";

export default function Page() {
  useIntersectionObserver(".fade-in-element");

  return (
    <section className="prose ml-8 mr-8">
      <div className="mt-48 mb-32 flex flex-col items-center gap-8">
        <div className="mb-8 text-center fade-in-element opacity-0">
          <p className="title poppins bold text-7xl sm:text-8xl md:text-9xl lg:text-[190px]">
            Bienvenue!
          </p>
          <p className="title font-fraunces-thin-i text-7xl sm:text-8xl md:text-9xl lg:text-[190px]">
            Nadir Kara
          </p>
        </div>
        <p className="title font-fraunces-thin-i text-5xl md:text-7xl lg:text-8xl text-center fade-in-element opacity-0">
          UI/UX
        </p>
        <p className="title font-fraunces-thin-i text-5xl md:text-7xl lg:text-8xl text-center fade-in-element opacity-0">
          developpeur
        </p>
        <p className="title font-fraunces-thin-i text-5xl md:text-7xl lg:text-8xl text-center fade-in-element opacity-0">
          Game developpeur
        </p>
        <p className="title font-fraunces-thin-i text-5xl md:text-7xl lg:text-8xl text-center fade-in-element opacity-0">
          Graphiste 2D/3D
        </p>
        <p className="max-w-[50rem] min-w-[18rem] mx-8 md:text-xl fade-in-element opacity-0">
          Tres Ambitieux et reve de realiser de {" "}
          <b>grandes choses</b> avec mes <b>capacités</b> et <b>compétences</b> <b>creatives</b>, grand fan d'animation, design, programmation et jeux vidéos.
        </p>
        <Link href={"/Mes travaux"}>
          {/* <CustomButton
            buttonText="Voir mes travaux"
            bgColor="white" // Default background color of the screen
            hoverBgColor="#171415" // Background color when hovering
          /> */}
          <button className="green-style cursor-pointer mt-8 bg-transparent text-neutral-200 hover:text-[#171415] transition-all duration-300 rounded-full px-10 py-5 text-xl">
          Voir mes travaux
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
            <h2>jeu d'aventure en 3D</h2>
            <p>Hebald Forest – Unreal Engine 5</p>
          </Link>
        </div>

        <div className="self-end">
          <CustomImage
            src="https://ludhic.fr/noras-mansion/"
            alt="Nora's Mansion"
            link="/works/Norasmansion"
            maxWidth="40rem"
          />
          <Link href={"/works/norasmansion"}>
            <h2>Jeu d'horreur en 3D</h2>
            <p>Nora's Mansion-Unreal Engine 4</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
