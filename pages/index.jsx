import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fitness Tracker</title>
      </Head>
      <div className='bg-[#F5F5F5] flex'>
        <div className='grid grid-rows-6 gap-4 bg-nice-purple bg-opacity-80 w-20 h-screen rounded-l-none rounded-lg justify-center'>
          <div>
            <div className='row-span-1 bg-nice-blue-0 w-12 h-12 rounded-full mt-4 border-4'></div>
            <div className='row-span-1 bg-[#D9D9D9] w-full h-[2px] rounded-full mt-5'></div>
            <div className='row-span-1 bg-[#D9D9D9] w-12 h-12 rounded-xl mt-8'></div>
            <div className='row-span-1 bg-[#D9D9D9] w-12 h-12 rounded-xl mt-6'></div>
            <div className='row-span-1 bg-[#D9D9D9] w-12 h-12 rounded-xl mt-6'></div>
            <div className='row-span-1 bg-[#D9D9D9] w-12 h-12 rounded-xl mt-6'></div>
            <div className='row-span-1 bg-[#D9D9D9] w-full h-[3px] rounded-full mt-5'></div>
            <div className='row-span-1 bg-white w-12 h-44 rounded-xl mt-6'></div>
            <div className='row-span-1 bg-nice-blue-0 w-12 h-12 rounded-full mt-6'></div>
          </div>
        </div>
        <div className='flex-grow ml-6 mt-6'>
          <h1 className='text-black font-semibold text-3xl'>Welcome</h1>
        </div>
      </div>
    </div>
  )
}
