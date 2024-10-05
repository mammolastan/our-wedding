import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import heroImg from "../../public/img/Pose-sm.jpg";

export default function ImageModal() {
    return (
        <div>
            <Link
                href="/img/Pose-sm.jpg">
                <Image
                    src={heroImg}
                    width="400"
                    height="400"
                    className={"object-cover mx-auto"}
                    alt="Hero Illustration"
                    loading="eager"
                    placeholder="blur"
                />
            </Link>
        </div>
    )
}
