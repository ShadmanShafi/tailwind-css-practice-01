import stockImage from "./stockImage.png";
import profilePic from "./profilePic.png";

function App() {
  return (
    <>
      {/* Header */}
      <div className="text-center font-">
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

      {/* Body Top Title */}
      <div className="mt-10 mx-4 md:mt-18 md:mx-20 lg:mt-28 lg:mx-60">
        <div className="flex place-content-between text-primary font-bold text-base md:text-lg lg:text-xl">
          <p className="">Featured</p>
          <div className="flex gap-2">
            <p className="underline">View all</p>
            <p>{">"}</p>
          </div>
        </div>
      </div>

      {/* Body Top Content */}
      <div className="mt-6 mx-4 md:mx-20 lg:mx-60">
        <div className="flex-col lg:flex lg:flex-row lg:space-x-10 ">
          <div className="h-auto w-full lg:w-auto mb-6">
            <img className="rounded-lg" src={stockImage} />
          </div>
          <div className="h-auto w-full">
            <div className="">
              <h1 className="overflow-hidden h-8 text-secondary font-bold text-xl md:text-2xl lg:text-3xl lg:h-10">
                The emergence of niche banking
              </h1>
            </div>
            <div className="w-fit">
              <p className="overflow-hidden mt-4 text-secondary font-normal text-base h-24 md:text-lg md:h-36 lg:text-xl lg:h-44">
                There is no need for brick-and-mortar banks. The days of
                traditional banks are gone. The reasons they have not
                disappeared yet? Three major reasons: 1. They don't have the
                right software or skills to serve customers virtually. 2. They
                occupy and carry big real estate assets on their balance.
                disappeared yet? Three major reasons: 1. They don't have the
                right software or skills to serve customers virtually. 2. They
                occupy and carry big real estate assets on their balance.
                disappeared yet? Three major reasons: 1. They don't have the
                right software or skills to serve customers virtually. 2. They
                occupy and carry big real estate assets on their balance.
              </p>
            </div>
            {/* Body Top Profile */}
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

      {/* Body Bottom Title */}
      <div className="mt-10 mx-4 md:mt-12 md:mx-20 lg:mt-16 lg:mx-60">
        <div className="flex place-content-between text-primary font-bold text-base md:text-lg lg:text-xl">
          <p className="">Latest</p>
          <div className="flex gap-2">
            <p className="underline">View all</p>
            <p>{">"}</p>
          </div>
        </div>
      </div>

      {/* Body Bottom Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex flex-col md:flex-row lg:flex-row justify-between mt-6 mx-4 md:mx-20 lg:mx-56">
        <div className="">
          {/* Content 1 */}
          <div className="md:mx-6 lg:mx-4">
            <div className="h-auto w-full lg:w-auto">
              <img className="rounded-lg" src={stockImage} />
            </div>
            <div className="h-auto mt-6 w-full">
              <div className="">
                <h1 className="overflow-hidden h-7 text-secondary font-bold text-lg md:text-lg lg:text-xl">
                  The emergence of niche banking
                </h1>
              </div>
              <div>
                <p className="overflow-hidden h-16 md:h-20 lg:h-24 mt-4 text-secondary font-normal text-xs md:text-sm lg:text-base">
                  {/* asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd  */}
                </p>
              </div>
              {/* Profile 1 */}
              <div className=" flex space-x-6 mt-4">
                <div>
                  <img className="w-12 h-auto rounded-3xl" src={profilePic} />
                </div>
                <div className="">
                  <div>
                    <p className="text-secondary text-sm font-bold mt-1">
                      Helghardt
                    </p>
                  </div>
                  <div>
                    <p className="text-secondary font-normal text-xs mt-1">
                      August 2nd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Content 2 */}
          <div className="md:mx-6 lg:mx-4">
            <div className="h-auto w-full my-6 md:my-0 lg:my-0 lg:w-auto">
              <img className="rounded-lg" src={stockImage} />
            </div>
            <div className="h-auto mt-6 w-full">
              <div className="">
                <h1 className="overflow-hidden h-7 text-secondary font-bold text-lg md:text-lg lg:text-xl">
                  Rehive's Gig-worker benefits
                </h1>
              </div>
              <div>
                <p className="overflow-hidden h-16 md:h-20 lg:h-24 mt-4 text-secondary font-normal text-xs md:text-sm lg:text-base">
                  Embedded finance with your own branded banking app.
                </p>
              </div>
              {/* Profile 2 */}
              <div className=" flex space-x-6 mt-4">
                <div>
                  <img className="w-12 h-auto rounded-3xl" src={profilePic} />
                </div>
                <div className="">
                  <div>
                    <p className="text-secondary text-sm font-bold mt-1">
                      Nicholas Nevada Claassens
                    </p>
                  </div>
                  <div>
                    <p className="text-secondary font-normal text-xs mt-1">
                      June 10th
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Content 3 */}
          <div className="md:mx-6 lg:mx-4">
            <div className="h-auto w-full my-6 md:my-0 lg:my-0 lg:w-auto">
              <img className="rounded-lg" src={stockImage} />
            </div>
            <div className="h-auto mt-6 w-full">
              <div className="">
                <h1 className="overflow-hidden h-7 text-secondary font-bold text-lg md:text-lg lg:text-xl">
                  Bank your gig-workers and save on payout fees...
                </h1>
              </div>
              <div>
                <p className="overflow-hidden h-16 md:h-20 lg:h-24 mt-4 text-secondary font-normal text-xs md:text-sm lg:text-base">
                  What if your marketplace could be making much more than it's
                  currently making from the service fees you charge? What if your marketplace could be making much more than it's
                  currently making from the service fees you charge? What if your marketplace could be making much more than it's
                  currently making from the service fees you charge?
                </p>
              </div>
              {/* Profile 3 */}
              <div className=" flex space-x-6 mt-4">
                <div>
                  <img className="w-12 h-auto rounded-3xl" src={profilePic} />
                </div>
                <div className="">
                  <div>
                    <p className="text-secondary text-sm font-bold mt-1">
                      Nicholas Nevada Claassens
                    </p>
                  </div>
                  <div>
                    <p className="text-secondary font-normal text-xs mt-1">
                      May 7th
                    </p>
                  </div>
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
