import Image from "next/image";
import { Container } from "./Container";
import heroImg from "../../public/img/Pose-sm.jpg";
import usOnOurWeddingDay from "../../public/img/Just-married.jpg";

export default function Ourstory() {
    return (
        <Container
            className='flex w-full flex-col mt-4 items-center justify-center text-center p-0 longstory'>

            <div className="max-w-2xl text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                <Image
                    src={usOnOurWeddingDay}
                    alt="Us on our wedding day"
                    width={330}
                    height={350}
                    className="float-left mr-1 pr-4 my-0 py-0" />
                <p>
                    First things first - we&apos;re already married. You are being invited to celebrate with us on our fourth wedding anniversary. We were wed in 2021 with (almost) no witnesses. Here&rsquo;s a picture of us on our wedding day.
                </p>
                <p>
                    February 8, 2025 will be our fourth wedding anniversary. We figured it was time to finally have a gathering in honor of our marriage, have an excuse to bring family and friends together, and we&rsquo;re excited to invite you to a reception.
                </p>
                <hr className="border-8 rounded-xl border-neutral-200 border-s-8 my-10" />
                <p>
                    We first met as students at Georgia State. We were in the same film class - &quot;Computational Media&quot; - and peered at each other for weeks through glowing rows of Mac monitors in a dark computer lab during lectures.
                </p>
                <p> We immediately fell in love. It wasn&apos;t long before we started chatting (facebook), which pretty quickly led to our first date (Urban Grind Coffee Shop), which led to our first movie together (Nerdcore Rising), which led to moving in together (East Atlanta), which led to Matt&apos;s first and second dog (Santa and Willow) <s>which led to</s>...<i>(first events truncated for length)</i>... , leading ultimately to Matt proposing to Valerie on top of Black Rock Mountain in 2021. </p>
                <div className="flex items-center justify-center w-full">
                    <div className="mx-auto">
                        <Image
                            src={heroImg}
                            width="400"
                            height="400"
                            className={"object-cover mx-auto"}
                            alt="Hero Illustration"
                            loading="eager"
                            placeholder="blur"
                        />
                        <p className="caption">Us in October, 2020 (immediately post-proposal)</p>
                    </div>
                </div>
                <p> We&apos;ve now had 14 years of joy together, and we&apos;re excited to celebrate our love with you. </p>


            </div>



        </Container >

    )
}
