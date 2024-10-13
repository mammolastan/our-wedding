import { Benefits } from './Benefits'
import { Container } from './Container'
import { lodgingOne, lodgingTwo } from './data'
import Image from 'next/image'
import imgBandB from '../../public/img/sugar_magnolia.jpg'
import hotel1 from '../../public/img/forth.jpg'
import hotel2 from '../../public/img/thedarwin.jpeg'

export default function Lodging() {
    return (
        <Container
            className='flex w-full flex-col mt-4 items-center justify-center text-left'>
            <div className="max-w-2xl text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                <h3 className='text-2xl  font-semibold leading-7 text-left p-8 pl-0'> Lodging </h3>
                <p className='mb-4'>
                    For out-of-towners or those who want to make a weekend of it, we have a few recommendations for lodging in the area.
                </p>


                <strong>Bed &amp; Breakfast:</strong>
                <Image
                    src={imgBandB}
                    width={521}
                    height={521}
                    alt="Benefits"
                    className="float-right p-2 imageSpecial"
                    placeholder="blur"
                />
                <ol className='listicle'>
                    <li><a href="https://sugarmagnoliabb.com/">Sugar Magnolia B&B</a></li>
                    <li><a href="https://urbanoasisbandb.com/">Urban Oasis B&B</a></li>
                    <li><a href="https://www.thepeach.house/">The Peach House</a></li>
                </ol>

                <br className='clear-both'></br>
                <Image
                    src={hotel2}
                    width={521}
                    height={521}
                    alt="Benefits"
                    className="float-right p-2 imageSpecial"
                    placeholder="blur"
                />
                <Image
                    src={hotel1}
                    width={521}
                    height={521}
                    alt="Benefits"
                    className="float-right p-2 imageSpecial clear-right"
                    placeholder="blur"
                />

                <strong>Hotels:</strong>
                <ol className='listicle' id='hotel'>
                    <li><a href="https://forthatlanta.com/hotel">Fort Hotel Atlanta</a></li>
                    <li><a href="https://www.hotelclermont.com/">Hotel Clermont</a></li>
                    <li><a href="https://www.wyliehotel.com/">Wylie Hotel</a></li>
                    <li><a href="https://www.thedarwinhotel.com/rooms.htm">The Darwin Hotel</a></li>
                    <li><a href="https://www.sonder.com/">Sonder</a></li>
                    <li><a href="https://www.sonder.com/destinations/atlanta/midtown-south/c32642?sleeps=1&utm_medium=cpc&utm_source=google&utm_term=&utm_campaign=18355897655">Midtown South</a></li>
                    <li><a href="https://www.sonder.com/destinations/atlanta/baltimore-place/c31420?sleeps=1&utm_medium=cpc&utm_source=google&utm_term=baltimore+place+atlanta&utm_campaign=15996984601">Baltimore Place</a></li>
                    <li><a href="https://thegeorgianterrace.com/">The Georgian Terrace</a></li>
                </ol>

                <br className='clear-both'></br>
                <h3 className='text-2xl font-semibold leading-7 text-left p-8 pl-0'> Transportation </h3>
                <p>
                    We will have a rideshare code (Lyft) for the day of the wedding - we will share that as it becomes available.
                    <br />
                    There is also plenty of parking available near the reception venue.
                </p>
            </div>

        </Container>

    )
}
