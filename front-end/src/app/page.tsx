import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
// import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import Ourstory from "@/components/Ourstory";
import Lodging from "@/components/Lodging";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import trolleyBarn from "../../public/img/trolleybarn.jpg";

export default function Home() {
  return (
    <Container>
      <Hero />
      <a id="RSVP"></a>
      <SectionTitle
        preTitle="Can you make it?"
        title="RSVP"
        form={true}
      >

        <br>
        </br>Atlanta, Georgia
      </SectionTitle>

      {/* <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} /> */}
      <a id="OurStory"></a>
      <SectionTitle preTitle="Our story"
        title="A Brief Summary">
      </SectionTitle>

      <Ourstory />
      <a id="Lodging/Transportation"></a>
      <SectionTitle
        preTitle="Places to stay and getting around"
        title="Lodging and Transportation"
      >
      </SectionTitle>
      <Lodging />
      {/* <Video videoId="fZ0D0cnR88E" /> */}
      <a id='AbouttheVenue'></a>

      <SectionTitle
        preTitle="About the Venue"
        title="The Trolley Barn"
      >
        <Image
          src={trolleyBarn}
          width="200"
          height="600"
          className="float-left p-2"
          alt="The Trolley Barn"
          loading="eager"
          placeholder="blur"
        />
        The Trolley Barn is a historic building that originally served as the headquarters for the Atlanta and Edgewood Street Railway Company. Today, The Trolley Barn operates as an events facility with a focus on supporting non-profits and giving back to the community. Val and I have attended a wedding ceremony at the venue before, and can confirm that this will be a perfect venue for our event. <br /><br /><a className="underline hover:cursor-pointer" href="https://thetrolleybarn.com/about/">About The Trolley Barn</a>
      </SectionTitle>

      {/* <Testimonials /> */}
      <a id="FAQ"></a>
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>

      <Faq />

    </Container>
  );
}
