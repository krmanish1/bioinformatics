
"use client"
import React, { useState } from 'react';

function UploadeFile() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            if (!file.name.endsWith('.fa')) {
                setUploadError('Only .fa files are allowed');
                return;
            }
            if (uploadedFileName) {
                setUploadError('You can only upload one file');
                return;
            }
            setSelectedFile(file);
            setUploadedFileName(file.name);
        } else {
            setSelectedFile(null);
            setUploadedFileName(null);
        }
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        setUploadedFileName(null);
    };

    const handleSendFile = () => {
        if (!selectedFile) {
            setUploadError('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => setUploadError(error.message));
    };

    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                <form className="py-4 px-9">
                    <div className="mb-6 pt-4">
                        <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                            Upload File
                        </label>

                        <div className="mb-8">
                            <input type="file" name="file" id="file" className="sr-only" onChange={handleFileChange} />
                            <label htmlFor="file" className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                                <div>
                                    <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                        Drop files here
                                    </span>
                                    <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                        Or
                                    </span>
                                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                                        Browse
                                    </span>
                                </div>
                            </label>
                        </div>

                        {uploadError && (
                            <div className="text-red-500">{uploadError}</div>
                        )}

                        {uploadedFileName && (
                            <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                                <div className="flex items-center justify-between">
                                    <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                                        {uploadedFileName}
                                    </span>
                                    <button className="text-[#07074D]" onClick={handleRemoveFile}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                    </button>
                                </div>
                            </div>
                        )}

                        <div>
                            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" onClick={handleSendFile}>
                                Upload File
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UploadeFile;