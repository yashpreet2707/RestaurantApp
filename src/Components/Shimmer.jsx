

const Shimmer = () => {

    const divArr = Array.from({length: 12})
  return (
    <div className="w-10/12 mx-auto">

        <div className="mt-10 pt-2 flex">
            <div className="shimmer w-[200px] h-[40px] ml-2 rounded-full"></div>
            <div className="shimmer w-[140px] h-[40px] ml-2 rounded-full"></div>
            <div className="shimmer w-[140px] h-[40px] ml-4 rounded-full"></div>
            <div className="shimmer w-[140px] h-[40px] ml-2 rounded-full"></div>
            <div className="shimmer w-[140px] h-[40px] ml-2 rounded-full"></div>
        </div>

        <div className="mt-5 mb-10 flex flex-wrap">
            {divArr.map((_, index) => (
                <div
                key={index}
                className="shimmer m-1 border-none w-[280px] h-[200px] bg-gray-200 rounded-lg">
                </div>
            ))}
        </div>
    </div>
  )
}

export default Shimmer