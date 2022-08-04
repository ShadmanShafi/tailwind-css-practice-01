import stockImage from "./stockImage.png";

function App() {
  return (
    <>
      {/* Header */}
      <div className="text-center">
        <h1 className="font-bold text-primary mt-12 mb-3 sm:text-lg lg:text-2xl">
          Rehive blog
        </h1>
        <h1 className="text-secondary font-bold font-medium mb-6 sm:text-3xl lg:text-5xl">
          Resources and Insights
        </h1>
        <p className="text-secondary font-normal sm:text-base lg:text-xl">
          Latest news from the Rehive team
        </p>
      </div>

      {/* Body Top Section*/}
      <div className="mt-28 lg:mx-60 sm:mx-10">
        <div className="flex place-content-between text-primary font-bold sm:text-base lg:text-xl">
          <p className="">Featured</p>
          <div className="flex gap-2">
            <p className="underline">View all</p>
            <p>{'>'}</p>
          </div>
        </div>
      </div>

      {/* Body Content Section */}
      <div className="mt-6 lg:mx-60 sm:mx-10">
        <div className="flex place-content-between space-x-12 sm:flex-col lg:flex-row">
          <div className="w-5/12">
            <img className="rounded-lg" src={stockImage} />
          </div>
          <div className="w-7/12 bg-slate-500">
            <div className="">
              <h1>The emergence of niche banking</h1>
            </div>
            <div>
              There
            </div>
            <div>
              Profile
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
