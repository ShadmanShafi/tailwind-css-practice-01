import stockImage from "./stockImage.png";
import profilePic from "./profilePic.png";

function App() {
  return (
    <>
      {/* Header */}
      <div className="text-center font-">
        <h1 className="mt-12 mb-3 text-lg font-bold text-primary md:text-xl lg:text-2xl">
          Rehive blog
        </h1>
        <h1 className="mb-6 text-3xl font-medium text-secondary md:text-4xl lg:text-5xl">
          Resources and Insights
        </h1>
        <p className="text-base font-normal text-secondary md:text-lg lg:text-xl">
          Latest news from the Rehive team
        </p>
      </div>

      {/* Body Top Title */}
      <div className="mx-4 mt-10 md:mt-18 md:mx-20 lg:mt-28 lg:mx-60">
        <div className="flex text-base font-bold place-content-between text-primary md:text-lg lg:text-xl">
          <p className="">Featured</p>
          <div className="flex gap-2">
            <p className="underline">View all</p>
            <p>{">"}</p>
          </div>
        </div>
      </div>

      {/* Body Top Content */}
      <div className="mx-4 mt-6 md:mx-20 lg:mx-60">
        <div className="flex-col lg:flex lg:flex-row lg:space-x-10 ">
          <div className="w-full h-auto mb-6 lg:w-auto">
            <img className="rounded-lg" src={stockImage} />
          </div>
          <div className="w-full h-auto">
            <div className="">
              <h1 className="h-8 overflow-hidden text-xl font-bold text-secondary md:text-2xl lg:text-3xl lg:h-10">
                The emergence of niche banking
              </h1>
            </div>
            <div className="w-fit">
              <p className="h-24 mt-4 overflow-hidden text-base font-normal text-secondary md:text-lg md:h-36 lg:text-xl lg:h-44">
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
            <div className="flex mt-4 space-x-6 ">
              <div>
                <img
                  className="h-auto mt-2 w-9 md:w-12 md:mt-0 lg:w-12 lg:mt-0 rounded-3xl"
                  src={profilePic}
                />
              </div>
              <div className="">
                <div>
                  <p className="text-sm font-bold text-secondary md:text-lg lg:text-lg">
                    Helghardt
                  </p>
                </div>
                <div>
                  <p className="font-normal text-secondary">August 4th</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body Bottom Title */}
      <div className="mx-4 mt-10 md:mt-12 md:mx-20 lg:mt-16 lg:mx-60">
        <div className="flex text-base font-bold place-content-between text-primary md:text-lg lg:text-xl">
          <p className="">Latest</p>
          <div className="flex gap-2">
            <p className="underline">View all</p>
            <p>{">"}</p>
          </div>
        </div>
      </div>

      {/* Body Bottom Content */}
      <div className="grid justify-between grid-cols-1 mx-4 mt-6 md:grid-cols-2 lg:grid-cols-3 md:flex-row lg:flex-row md:mx-20 lg:mx-56">
        <div className="">
          {/* Content 1 */}
          <div className="md:mx-6 lg:mx-4">
            <div className="w-full h-auto lg:w-auto">
              <img className="rounded-lg" src={stockImage} />
            </div>
            <div className="w-full h-auto mt-6">
              <div className="">
                <h1 className="overflow-hidden text-lg font-bold h-7 text-secondary md:text-lg lg:text-xl">
                  The emergence of niche banking
                </h1>
              </div>
              <div>
                <p className="h-16 mt-4 overflow-hidden text-xs font-normal md:h-20 lg:h-24 text-secondary md:text-sm lg:text-base">
                  {/* asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd  */}
                </p>
              </div>
              {/* Profile 1 */}
              <div className="flex mt-4 mb-4 space-x-6">
                <div>
                  <img
                    className="h-auto mt-2 w-9 md:w-12 md:mt-0 lg:w-12 lg:mt-0 rounded-3xl"
                    src={profilePic}
                  />
                </div>
                <div className="">
                  <div>
                    <p className="mt-1 text-sm font-bold text-secondary">
                      Helghardt
                    </p>
                  </div>
                  <div>
                    <p className="mt-1 text-xs font-normal text-secondary">
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
            <div className="w-full h-auto my-6 md:my-0 lg:my-0 lg:w-auto">
              <img className="rounded-lg" src={stockImage} />
            </div>
            <div className="w-full h-auto mt-6">
              <div className="">
                <h1 className="overflow-hidden text-lg font-bold h-7 text-secondary md:text-lg lg:text-xl">
                  Rehive's Gig-worker benefits
                </h1>
              </div>
              <div>
                <p className="h-16 mt-4 overflow-hidden text-xs font-normal md:h-20 lg:h-24 text-secondary md:text-sm lg:text-base">
                  Embedded finance with your own branded banking app.
                </p>
              </div>
              {/* Profile 2 */}
              <div className="flex mt-4 mb-4 space-x-6">
                <div>
                  <img
                    className="h-auto mt-2 w-9 md:w-12 md:mt-0 lg:w-12 lg:mt-0 rounded-3xl"
                    src={profilePic}
                  />
                </div>
                <div className="">
                  <div>
                    <p className="mt-1 text-sm font-bold text-secondary">
                      Nicholas Nevada Claassens
                    </p>
                  </div>
                  <div>
                    <p className="mt-1 text-xs font-normal text-secondary">
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
            <div className="w-full h-auto my-6 md:my-0 lg:my-0 lg:w-auto">
              <img className="rounded-lg" src={stockImage} />
            </div>
            <div className="w-full h-auto mt-6">
              <div className="">
                <h1 className="overflow-hidden text-lg font-bold h-7 text-secondary md:text-lg lg:text-xl">
                  Bank your gig-workers and save on payout fees...
                </h1>
              </div>
              <div>
                <p className="h-16 mt-4 overflow-hidden text-xs font-normal md:h-20 lg:h-24 text-secondary md:text-sm lg:text-base">
                  What if your marketplace could be making much more than it's
                  currently making from the service fees you charge? What if
                  your marketplace could be making much more than it's currently
                  making from the service fees you charge? What if your
                  marketplace could be making much more than it's currently
                  making from the service fees you charge?
                </p>
              </div>
              {/* Profile 3 */}
              <div className="flex mt-4 mb-4 space-x-6">
                <div>
                  <img
                    className="h-auto mt-2 w-9 md:w-12 md:mt-0 lg:w-12 lg:mt-0 rounded-3xl"
                    src={profilePic}
                  />
                </div>
                <div className="">
                  <div>
                    <p className="mt-1 text-sm font-bold text-secondary">
                      Nicholas Nevada Claassens
                    </p>
                  </div>
                  <div>
                    <p className="mt-1 text-xs font-normal text-secondary">
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
