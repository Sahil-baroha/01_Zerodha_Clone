import React from 'react'

  const Stats = () => {
  return (
     <div className="flex flex-col items-center px-[20px] pb-[120px]">

    <div className="flex max-w-7xl align-middle items-start mx-auto gap-8 pb-5 justify-center  justify-items-center">
      <div className="flex flex-1/6 flex-col mr-2">
        <h1 className="flex font-semibold text-4xl mb-10 ">
          Trust with confidence
        </h1>

        <div className="tracking-wider mb-8">
          <h2 className="text-xl font-semibold my-3 ">Customer-first always</h2>
          <p className="text-[1.05rem] font-[2px] text-[hx(#364153)] mt-2">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
        </div>

        <div className="tracking-wider mb-8">
          <h2 className="text-xl font-semibold my-3">No spam or gimmicks</h2>
          <p className="text-[1.05rem] font-[2px] text-[hx(#364153)] mt-2">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <a
              href="https://zerodha.com/about/philosophy"
              className="text-blue-400"
              target="empty"
              >
              Our Philosophies
            </a>
          </p>
        </div>

        <div className="tracking-wider mb-8">
          <h2 className="text-xl font-semibold my-3 ">The Zerodha universe</h2>
          <p className="text-[1.05rem] font-[2px] text-[hx(#364153)] mt-2">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
        </div>

        <div className="tracking-wider mb-8">
          <h2 className="text-xl font-semibold my-3 ">Do better with money</h2>
          <p className="text-[1.05rem] font-[2px] text-[hx(#364153)] mt-2">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
      </div>

      <div className="flex flex-col flex-1/4 items-center mr-8 justify-center">
        <img
          src="media/images/ecosystem.png"
          className="w-[650.33px] h-[612.38px]"
          alt=""
        />
        <div className="flex py-5 gap-3.5">
          <button className='text-blue-400 hover:text-[#364153] '>
            Explore Our Products <i class="fa-solid fa-arrow-right-long" style={{color:"#51A2FF"}}></i>
          </button>
          <button className='text-blue-400 hover:text-[#364153]'>
            Try Kit Demo <i class="fa-solid fa-arrow-right-long" style={{color:"#51A2FF" }}></i>
          </button>
        </div>
      </div>


    </div>
      <img src="media/images/pressLogos.png" alt="" />
</div>
  )
}
export default Stats;