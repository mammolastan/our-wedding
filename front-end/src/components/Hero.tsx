import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/matt-val-pose1.jpg";


export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 mx-auto text-center">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Saturday, February 8, 2025
            </h1>
            <h2 className="text-2xl leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
              Atlanta, Georgia
            </h2>
            <h2 className="text-2xl leading-snug tracking-tight text-gray-800 lg:leading-tight xl:leading-tight dark:text-white">
              963 Edgewood Avenue, NE Atlanta, GA 30307
            </h2>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Please RSVP by December 1, 2024.
            </p>


          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 ">
          <div className="mx-auto heart-container">
            <Image
              src={heroImg}
              width="400"
              height="400"
              className={"object-cover heart"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />

          </div>
        </div>
      </Container>

    </>
  );
}
