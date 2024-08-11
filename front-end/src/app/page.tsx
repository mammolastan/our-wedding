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

export default function Home() {
  return (
    <Container>
      <Hero />
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
      <SectionTitle preTitle="A brief summary"
        title="Our Story">
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

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />
      <a id="FAQ"></a>
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
