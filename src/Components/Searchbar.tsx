"use client"
import React, { useState } from 'react';
import axios from 'axios';
import DataCards from './DataCards';

function Searchbar() {
    const [accessions, setAccessions] = useState('');
    const [results, setResults] = useState(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const url = `https://api.ncbi.nlm.nih.gov/datasets/v2alpha/genome/accession/${accessions}/links`;
        axios.get(url)
            .then(response => {
                console.log(response.data.assembly_links);
                setResults(response.data.assembly_links);

            })
            .catch(error => console.error(error));
    };

    return (
        <div className='flex items-center justify-center flex-col w-full'>
            <form className="mt-10 mb-10 mx-auto w-[75%] py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search anything" className="bg-transparent w-full focus:outline-none pr-4 text-gray-400  border-0 focus:ring-0 px-0 py-0" name="topic" value={accessions} onChange={(event) => setAccessions(event.target.value)} />
                <button className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-[#6A64F1] text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3" >
                    Search
                </button>
            </form>
            {results && (
                <div className='h-[33.5rem] overflow-x-scroll'>

                    < DataCards results={results} />
                </div>
            )}
        </div>
    );
}

export default Searchbar;