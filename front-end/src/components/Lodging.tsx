import { Benefits } from './Benefits'
import { Container } from './Container'
import { lodgingOne } from './data'

export default function Lodging() {
    return (
        <Container
            className='flex w-full flex-col mt-4 items-center justify-center text-left longstory'>
            <div className="max-w-2xl text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                <h3 className='text-2xl  font-semibold leading-7 text-left p-8 pl-0'> Lodging </h3>
                <p>
                    There are a number of options for lodging in the specific area. Here is a few of our recommendations:
                </p>

                <p>
                    The hotel is a short drive from the reception venue and is a great place to stay if you are coming from out of town.
                </p>

                <Benefits imgPos="right" data={lodgingOne} />
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
