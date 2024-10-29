
import '../utils/Custom.css'; 

const ShimmerMenu = () => {
  return (
    <div className="w-2/3 h-screen mx-auto pb-5">
        <div className="shimmer w-full h-[10px]"></div>
        <div className="shimmer w-[100px] h-[10px] mt-5 ml-2"></div>

        <div className='flex justify-evenly mt-5 gap-x-2'>
          <div className="shimmer w-1/2 h-[300px]"></div>
          <div className="shimmer w-1/2 h-[300px]"></div>
        </div>  

        <div className='flex justify-evenly mt-5 gap-x-2'>

          <div className='w-1/2 h-[150px]'>
            <div className="shimmer w-[150px] h-[10px] mt-5 ml-2"></div>
            <div className="shimmer w-[80px] h-[10px] mt-5 ml-2"></div>
            <div className="shimmer w-[60px] h-[10px] mt-5 ml-2"></div>
            <div className="shimmer w-[60px] h-[20px] mt-5 right-0 ml-[400px]"></div>
          </div>

          <div className='w-1/2 h-[150px]'>
            <div className="shimmer w-[150px] h-[10px] mt-5 ml-2"></div>
            <div className="shimmer w-[80px] h-[10px] mt-5 ml-2"></div>
            <div className="shimmer w-[60px] h-[10px] mt-5 ml-2"></div>
            <div className="shimmer w-[60px] h-[20px] mt-5 right-0 ml-[400px]"></div>
          </div>

        </div>
    </div>
  );
};

export default ShimmerMenu;
