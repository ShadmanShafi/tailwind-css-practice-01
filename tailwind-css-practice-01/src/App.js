import stockImage from "./stockImage.png";
import profilePic from "./profilePic.png";

function App() {
  return (
    <>
      {/* Header */}
      <div className="text-center">
        <h1 className="font-bold text-primary mt-12 mb-3 text-lg md:text-xl lg:text-2xl">
          Rehive blog
        </h1>
        <h1 className="text-secondary font-medium mb-6 text-3xl md:text-4xl lg:text-5xl">
          Resources and Insights
        </h1>
        <p className="text-secondary font-normal text-base md:text-lg lg:text-xl">
          Latest news from the Rehive team
        </p>
      </div>

      {/* Body Top Section*/}
      <div className="mt-10 mx-4 md:mt-18 md:mx-20 lg:mt-28 lg:mx-60">
        <div className="flex place-content-between text-primary font-bold text-base md:text-lg lg:text-xl">
          <p className="">Featured</p>
          <div className="flex gap-2">
            <p className="underline">View all</p>
            <p>{">"}</p>
          </div>
        </div>
      </div>

      {/* Body Content Section */}
      <div className="mt-6 mx-4 md:mx-20 lg:mx-60 ">
        <div className="flex-col lg:flex lg:flex-row lg:space-x-10 ">
          <div className="h-auto w-full lg:w-auto">
            <img className="rounded-lg" src={stockImage} />
          </div>
          <div className="h-auto mt-6 w-full lg:w-2/3">
            <div className="">
              <h1 className="text-secondary font-bold text-xl md:text-2xl lg:text-3xl">
                The emergence of niche banking
              </h1>
            </div>
            <div>
              <p className="mt-4 text-secondary font-normal text-base md:text-lg lg:text-xl">
                There is no need for brick-and-mortar banks. The days of
                traditional banks are gone. The reasons they have not
                disappeared yet? Three major reasons: 1. They don't have the
                right software or skills to serve customers virtually. 2. They
                occupy and carry big real estate assets on their balance.
              </p>
            </div>
            {/* Profiles */}
            <div className=" flex space-x-6 mt-4">
              <div>
                <img className="w-12 h-auto rounded-3xl" src={profilePic} />
              </div>
              <div className="">
                <div>
                  <p className="text-secondary text-lg font-bold">Helghardt</p>
                </div>
                <div>
                  <p className="text-secondary font-normal">August 4th</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
