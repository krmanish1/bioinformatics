import React from 'react';
// import axios from 'axios';
interface Result {
    accession: string;
    assembly_link_type: string;
    resource_link: string;
}

function DataCards({ results }: { results: Result[] }) {


    // const fetchFastaSequence = async (accession: string) => {
    //     try {
    //         const response = await axios.get(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi`, {
    //             params: {
    //                 db: 'nucleotide',
    //                 id: accession,
    //                 rettype: 'fasta',
    //                 retmode: 'text'
    //             }
    //         });

    //         const fastaSequence = response.data;
    //         console.log(fastaSequence);
    //         // Do something with the FASTA sequence, e.g., save it to a file
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };


    return (
        <div className="grid grid-cols-1  place-content-center place-items-center gap-8 p-4 lg:grid-cols-1 xl:grid-cols-1 ">
            {results.map((result, index) => (
                <div key={index} className="flex items-center shadow justify-between p-4 bg-white rounded-md w-full">
                    <div className='flex items-center justify-between gap-6 w-full'>
                        <div>
                            <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase bg-yellow-50 p-2 rounded-md">
                                Human[{result.accession}]
                            </h6>
                            <span className="text-sm font-semibold text-gray-700 p-2"> Assembely: <span className='text-gray-400'>{result.assembly_link_type}</span> </span>
                        </div>
                        <div className='bg-blue-400 p-2 rounded-md flex items-center justify-center'>
                            <a href={result.resource_link} target="_blank" rel="noopener noreferrer">
                                Download FASTAseq
                            </a>
                        </div>
                    </div>

                    {/* {result.assembly_link_type === "ASSEMBLY_NUCCORE" &&


                        <div>
                            <span className="text-xl font-semibold Text">Genome refseq</span>
                            <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                                Human[{result.accession}]
                            </h6>
                            <div className='bg-blue-400 p-2 rounded-md'>
                                <a href={result.resource_link} target="_blank" rel="noopener noreferrer">
                                    Download FASTAseq
                                </a>
                            </div>
                        </div>

                    } */}

                </div>
            ))}
        </div>
    );
}

export default DataCards;