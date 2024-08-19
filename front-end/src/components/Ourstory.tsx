import Image from "next/image";
import { Container } from "./Container";

import usOnOurWeddingDay from "../../public/img/Just-married.jpg";

export default function Ourstory() {
    return (
        <Container
            className='flex w-full flex-col mt-4 items-center justify-center text-center p-0 longstory'>

            <div className="max-w-2xl text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                <Image
                    src={usOnOurWeddingDay}
                    alt="Us on our wedding day"
                    width={300}
                    height={300}
                    className="float-left mr-1 pr-4 my-0 py-0" />
                <p>
                    First things first - we&rsquo;re already married. You are being invited to celebrate with us on our fourth wedding anniversary. We were wed in 2021 with (almost) no witnesses. Here&lsquo;s a picture of us on our wedding day.
                </p>
                <p>
                    February 8, 2025 will be our fourth wedding anniversary. We figured it was time to finally have a gathering in honor of our marriage, have an excuse to bring family and friends together, and we&rsquo;re excited to invite you to a reception.
                </p>
                <hr className="border-8 rounded-xl border-dashed border-red-500 border-s-8 my-10" />
                <p>
                    We first met as students at Georgia State. We were in the same film class - &quot;Computational Media&quot; - and peered at each other for weeks through glowing rows of Mac monitors in a dark computer lab during lectures.
                </p>
            </div>



        </Container >

    )
}
