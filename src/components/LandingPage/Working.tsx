import { work_items } from '../../Data/Data';
import { Avatar } from '@mantine/core';

const Working = () => {
  return (
    <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold text-dark-100">
            How it<span className="text-mchite-400 mb-3"> Works </span>Category
        </div>
        <div className="text-lg mx-auto text-dark-300 text-center w-1/2 mb-8">
            Effortlessly navigate through the process and land your dream job.
        </div>
        <div className="flex flex-row items-center justify-around gap-10 mt-10">
            <div className='relative'>
                <img className="w-[30rem]" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mobile-app.svg" alt="malaking image" />
                <div className='w-36 top-[10%] right-0 absolute flex flex-col items-center gap-1 border border-mchite-400 rounded-xl py-3 px-1 backdrop-blur-md'>
                    <Avatar className='!h-16 !w-16' src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" alt=''/>
                    <div className='text-sm font-semibold text-dark-200 text-center'>Complete your profile</div>
                    <div className='text-xs text-dark-300'>70% Completed</div>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                {
                    work_items.map((item, index)=><div key={index} className="flex flex-row items-center gap-5">
                    <div className="p-2.5 bg-mchite-300 rounded-full">
                        <img className="w-12 h-12" src="/Working/Appply.png" alt="image here" />
                    </div>
                    <div>
                        <div className="text-lg font-semibold text-dark-100">{item.name}</div>
                        <div className="text-md text-dark-300">{item.desc}</div>
                    </div>
                </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default Working