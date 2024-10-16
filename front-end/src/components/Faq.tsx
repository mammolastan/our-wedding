"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">

      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Why are you having a reception now?",
    answer: "We were wed in 2021 with (almost) no witnesses. February 8, 2025 will be our fourth wedding anniversary. We figured it was time to finally have a gathering in honor of our marriage, have an excuse to bring family and friends together, and we're excited to invite you to a reception.",
  },
  {
    question: "Will there be food and drinks?",
    answer: "Yes! Food ✅ Drinks ✅ Fun ✅",
  },
  {
    question: "What can I gift?",
    answer:
      "Please, no gifts! We already got married and have everything we need. Your presence is the best present.",
  },
  {
    question: "What's the situation for kids?",
    answer: "Our reception is absolutely kid-friendly. We will have a dedicated area for kids with a baby sitter during the event."
  },
  {
    question: "What's the dress code?",
    answer: "Cocktail attire. We're going for a semi-formal vibe, but feel free to wear whatever makes you feel comfortable."
  },
  {
    question: "Can we really call it Frequently Asked Questions if nobody has asked us yet?",
    answer: "We could have called it 'Potentially Recurrent Inquiries That We Suspect Might Become Popular in the Future Based on Common Trends and Observations That We Have Gathered Over Time' but that's a bit long."
  }
];
