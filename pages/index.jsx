import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fitness Tracker</title>
      </Head>
      <div className='bg-[#F5F5F5]'>
        <div className='bg-nice-purple bg-opacity-80 w-20 h-screen rounded-l-none rounded-lg flex justify-center'>
          <div>
            <div className='bg-[#D9D9D9] w-12 h-12 rounded-full mt-4'></div>
            <div className='bg-[#D9D9D9] w-full h-[2px] rounded-full mt-4'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
