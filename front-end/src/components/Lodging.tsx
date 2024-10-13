
import { Container } from './Container'
import { bedandbreakfasts, hotels } from './data'
import ImageLink from './ImageLink'
import Image from 'next/image'
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
                <h3 className='text-l font-semibold leading-7 text-left p-8 pl-0'> Bed & Breakfasts </h3>
                <div className='image-link-grid'>
                    {bedandbreakfasts.map((bnb, index) => (
                        <ImageLink key={index} name={bnb.name} imageUrl={bnb.imageUrl} link={bnb.link} />
                    ))}
                </div>
                <h3 className='text-l font-semibold leading-7 text-left p-8 pl-0'> Hotels</h3>
                <div className='image-link-grid'>
                    {hotels.map((bnb, index) => (
                        <ImageLink key={index} name={bnb.name} imageUrl={bnb.imageUrl} link={bnb.link} />
                    ))}
                </div>


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
