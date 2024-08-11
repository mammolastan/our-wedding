"use client"; // This is a client component

import React, { useState } from 'react'

export default function Form() {

    const [formData, setFormData] = useState({
        yourname: '',
        response: '',
        numberguests: 0,
        guest1: '',
        guest1meal: '',
        notes: ''
    })

    const attending = formData.response === 'Yes, I plan to attend the reception' ? true : false
    const numberguests = formData.numberguests

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { setFormData({ ...formData, [e.target.id]: e.target.value }) }

    console.log("formData")
    console.log(formData)

    return (
        <form className="w-full max-w-lg dark:text-gray-300">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="yourname">
                        Your name
                    </label>
                    <input onChange={handleChange} className="appearance-none block w-full bg-gray-200  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="yourname" type="text" placeholder="Ace Spade" />

                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}

                </div>

            </div>
            <div className="flex flex-wrap -mx-3 mb-6 justify-center">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="response">
                        Will you be attending?
                    </label>
                    <select onChange={handleChange} className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="response">
                        <option>Choose</option>
                        <option>Yes, I plan to attend the reception</option>
                        <option>No, I am unable to attend</option>
                    </select>

                </div>
                {attending && (
                    <>
                        <div className="w-full md:w-1/3 my-1 px-3">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="numberguests">
                                How many guests?
                            </label>
                            <input
                                onChange={handleChange}
                                className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center"
                                id="numberguests"
                                type="number"
                                placeholder="0"
                                min="0"
                                max="3"
                            />
                        </div>
                        {numberguests > 0 &&
                            Array.from({ length: numberguests }, (_, i) => (
                                <div key={i} className="w-full md:w-3/4 my-3 px-3">
                                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor={`guest${i + 1}`}>
                                        Guest {i + 1} name
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        className="appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id={`guest${i + 1}`}
                                        type="text"
                                        placeholder="Joker"
                                    />
                                    <div className="md:1/4 my-3">
                                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor={`guest${i + 1}meal`}>
                                            Food restriction?
                                        </label>
                                        <select
                                            onChange={handleChange}
                                            className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id={`guest${i + 1}meal`}
                                        >
                                            <option>None</option>
                                            <option>Gluten free</option>
                                            <option>Vegetarian</option>
                                            <option>Vegan</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                            ))}
                    </>
                )}
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="notes">
                        Notes
                    </label>
                    <textarea onChange={handleChange} id="notes" name="notes" rows={3} className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 place" placeholder='Show me what you got'></textarea>


                </div>
            </div>
        </form>
    )
}
