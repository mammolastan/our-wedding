import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
import Ourstory from "@/components/Ourstory";
import Lodging from "@/components/Lodging";
import { Footer } from "@/components/Footer";

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
        February 8, 2025
        <br>
        </br>Atlanta, Georgia
      </SectionTitle>

      {/* <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} /> */}
      <a id="Ourstory"></a>
      <SectionTitle preTitle="Our story"
        title="A Brief summary">
      </SectionTitle>

      <Ourstory />
      <a id="Lodging/transportation"></a>
      <SectionTitle
        preTitle="Places to stay and getting around"
        title="Lodging and Transportation"
      >
      </SectionTitle>
      <Lodging />
      {/* <Video videoId="fZ0D0cnR88E" /> */}
      <a id='Aboutthevenue'></a>
      <SectionTitle
        preTitle="About the venue"
        title="The Trolley Barn"
      >
        The Trolley Barn is a venue space in the Edgewood neighborhood of Atlanta. Val and I have attended a wedding ceremony at the venue before, and can confirm that this will be a perfect venue for our event. <br /><br /><a className="underline hover:cursor-pointer" href="https://thetrolleybarn.com/about/">About The Trolley Barn</a>
      </SectionTitle>

      <Testimonials />
      <a id="FAQ"></a>
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>

      <Faq />

    </Container>
  );
}
