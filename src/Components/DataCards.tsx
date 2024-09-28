import React from 'react';

interface Result {
    accession: string;
    assembly_link_type: string;
    resource_link: string;
}

function DataCards({ results }: { results: Result[] }) {
    return (
        <div className="grid grid-cols-1 gap-8 p-10 mt-14 lg:grid-cols-2 xl:grid-cols-2">
            {results.map((result, index) => (
                <div key={index} className="flex items-center shadow justify-between p-4 bg-white rounded-md">
                    <div>
                        <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                            Human[{result.accession}]
                        </h6>
                        <span className="text-xl font-semibold">{result.assembly_link_type}</span>
                        <div className='bg-blue-400 p-2 rounded-md'>
                            <a href={result.resource_link} target="_blank" rel="noopener noreferrer">
                                Download FASTAseq
                            </a>
                        </div>
                    </div>
                    {/* ... rest of the component */}
                </div>
            ))}
        </div>
    );
}

export default DataCards;