import MapBackground from './map.png';
import { TbWorld } from "react-icons/tb";
import { RiDownloadCloud2Line } from "react-icons/ri";

function App() {
  return (
    <>
    <div className="fixed top-0 left-0 w-screen h-screen bg-slate-500 z-[-3] border-4"></div>
    <img className="fixed top-0 left-0 w-screen h-screen opacity-80 z-[-2] object-cover" src={MapBackground} />
    <div className="fixed top-0 left-0 w-screen h-screen opacity-[94%] bg-slate-950 z-[-1]"></div>
    <div className="h-screen flex flex-col justify-center items-center space-y-8 p-5 md:p-0">
      <div>
        <div className="bg-clip-text text-transparent bg-gradient-to-br from-blue-300 to-orange-600 text-xl font-semibold border border-slate-700 px-4 py-1 rounded-full">SAS PROJECT</div>
      </div>
      <div>
        <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-slate-400 to-slate-950 text-6xl md:text-8xl font-semibold opacity-95 -mb-2">Feel Yourself Inside</h1>
        <div class="flex justify-center">
          <span class="absolute mx-auto py-4 flex border w-fit bg-gradient-to-b md:bg-gradient-to-r opacity-50 blur-xl from-blue-700 via-blue-600 to-orange-600 bg-clip-text text-6xl md:text-8xl box-content font-semibold text-transparent text-center select-none">
            Undiksha Mappa
          </span>
          <h1
            class="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-b md:bg-gradient-to-r items-center from-blue-700 via-blue-600 to-orange-600 bg-clip-text text-6xl md:text-8xl font-semibold text-transparent text-center select-auto">
            Undiksha Mappa
          </h1>
        </div>
      </div>
      <div>
        <p className="text-center font-light text-slate-400 text-lg md:text-2xl">
          Rasakan seperti anda berada di dalamnya.
        </p>
      </div>
      <div>
      <div class="flex gap-2 md:gap-5 mt-5 md:mt-10">
        <a href="https://uppa.vercel.app" target="_blank" className="flex items-center gap-4 text-sm md:text-lg px-4 py-2 md:py-3 rounded-full text-white transition border-2 border-dashed hover:bg-slate-700">
          <TbWorld className="size-6" />
          Try on Web
        </a>
        <button className="flex items-center gap-4 font-semibold text-sm md:text-lg bg-gradient-to-br px-4 md:px-6 py-2 md:py-3 rounded-full transition from-blue-900 via-blue-600 to-blue-500 hover:via-blue-900 hover:to-blue-900 text-white">
          <RiDownloadCloud2Line className="size-6" />
          Download ISO
        </button>
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
