// import Image from "next/image";

import Searchbar from "@/Components/Searchbar";
import UploadeFile from "@/Components/uploadeFile";

export default function Home() {
  return (
    <div className="flex w-full items-start justify-center h-[45rem] overflow-hidden pt-10 pb-10 bg-indigo-50">
      <div className="w-1/2">
        <UploadeFile />
      </div>
      <div className="w-1/2">
        <Searchbar />
      </div>


    </div>
  );
}
