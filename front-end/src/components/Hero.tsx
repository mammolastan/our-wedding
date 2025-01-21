import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/matt-val-pose1.jpg";
import Link from "next/link";


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
              Arrival time: 3:00 PM
            </p>
            <h2 className='text-3xl font-semibold leading-7 p-8 pl-0 text-center'> Driving</h2>
            <p>
              There is plenty of parking available at the reception venue.
            </p>
            <p>
              <b>Lyft code:</b> If you are opting not to drive, we would like to share a <Link href="./Matt-and-Val-lyft.pdf" className="text-underline text-blue-500 hover:text-blue-700">Lyft code</Link> with you that will cover up to $20 dollars of your ride(s)that day. Code: WILLOWLOVESYOU
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
