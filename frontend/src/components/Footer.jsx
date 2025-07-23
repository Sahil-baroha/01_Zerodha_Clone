import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col h-screen gap-6 ml-[12vw] mr-[10vw] mt-[10vh]">
      <div className="flex flex-1 gap-14 pb-10">

        <div className="flex flex-1 flex-col gap-2">
          <img src="media/images/logo.svg" alt="logoimg" className="h-[25px] w-[180px]" />
          <p className="text-[13px] text-[#666666]">© 2010 - 2025, Zerodha Broking Ltd.</p>
          <p className="text-[13px] text-[#666666] pb-5">All rights reserved.</p>
    
          <div className="flex gap-3 pb-4">
            <i className="h-[35px] w-[35px] fa-lg text-[#666666] fa-brands fa-x-twitter"></i>
            <i className="h-[35px] w-[35px] fa-lg text-[#666666] fa-brands fa-square-facebook"></i>
            <i className="h-[35px] w-[35px] fa-lg text-[#666666] fa-brands fa-instagram"></i>
            <i className="h-[35px] w-[35px] fa-lg text-[#666666] fa-brands fa-linkedin-in"></i>
          </div>
          <div className="flex gap-2">
            <i className="h-[35px] w-[35px] fa-lg text-[#666666] fa-brands fa-youtube"></i>
            <i className="h-[35px] w-[35px] fa-lg text-[#666666] fa-brands fa-whatsapp"></i>
            <i className="h-[35px] w-[35px] fa-lg text-[#666666] fa-brands fa-telegram"></i>
          </div>
        </div>

        <div className="flex flex-4 gap-2">
          <div className="flex flex-1 flex-col gap-3 justify-start items-start">
            <h1 className="text-[#545454] text-lg font-semibold ">Account</h1>
            <a className="text-[15px] text-[#777777]" href="">Open demat account</a>
            <a className="text-[15px] text-[#777777]" href="">Minor demat account</a>
            <a className="text-[15px] text-[#777777]" href="">NRI demat account</a>
            <a className="text-[15px] text-[#777777]" href="">Commodity</a>
            <a className="text-[15px] text-[#777777]" href="">Dematerialsation</a>
            <a className="text-[15px] text-[#777777]" href="">Fund transfer</a>
            <a className="text-[15px] text-[#777777]" href="">MTF</a>
            <a className="text-[15px] text-[#777777]" href="">Referral program</a>
          </div>
          <div className="flex flex-1 flex-col gap-3 justify-start items-start">
            <h1 className="text-[#545454] text-lg font-semibold ">Support</h1>
            <a className="text-[15px] text-[#777777]" href="">Contact us</a>
            <a className="text-[15px] text-[#777777]" href="">Support portal</a>
            <a className="text-[15px] text-[#777777]" href="">How to file a complaint?</a>
            <a className="text-[15px] text-[#777777]" href="">Status of your complaints</a>
            <a className="text-[15px] text-[#777777]" href="">Bulletin</a>
            <a className="text-[15px] text-[#777777]" href="">Circular</a>
            <a className="text-[15px] text-[#777777]" href="">Z-connect blog</a>
            <a className="text-[15px] text-[#777777]" href="">Downloads</a>
          </div>
          <div className="flex flex-1 flex-col gap-3 justify-start items-start">
            <h1 className="text-[#545454] text-lg font-semibold ">Company</h1>
            <a className="text-[15px] text-[#777777]" href="">About</a>
            <a className="text-[15px] text-[#777777]" href="">philosophy</a>
            <a className="text-[15px] text-[#777777]" href="">Press & media</a>
            <a className="text-[15px] text-[#777777]" href="">Careers</a>
            <a className="text-[15px] text-[#777777]" href="">Zerodha Cares (CRS)</a>
            <a className="text-[15px] text-[#777777]" href="">Zerodha.tech</a>
            <a className="text-[15px] text-[#777777]" href="">Open source</a>
          </div>

          <div className="flex flex-1 flex-col gap-3 justify-start items-start">
            <h1 className="text-[#545454] text-lg font-semibold ">Quick links</h1>
            <a className="text-[15px] text-[#777777]" href="">Upcomming IPOs</a>
            <a className="text-[15px] text-[#777777]" href="">Brokerage charges</a>
            <a className="text-[15px] text-[#777777]" href="">Market holidays</a>
            <a className="text-[15px] text-[#777777]" href="">Economic calendar</a>
            <a className="text-[15px] text-[#777777]" href="">Calculator</a>
            <a className="text-[15px] text-[#777777]" href="">Markets</a>
            <a className="text-[15px] text-[#777777]" href="">Sectors</a>
          </div>
        </div>
      </div>

      <div className="flex flex-1 gap-4 flex-col pr-20">
        <p className="text-[12px] tracking-wide text-[#666666]"> 
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
        </p>
        <p className="text-[12px] tracking-wide text-[#666666]"> 
          Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
        </p>
        <p className="text-[12px] tracking-wide text-[#666666]"> 
          
        </p>
        <p className="text-[12px] tracking-wide text-[#666666]"> 
          Investments in securities market are subject to market risks; read all the related documents carefully before investing.
        </p>
        <p className="text-[12px] tracking-wide text-[#666666]"> 
          Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
        </p>
        <p className="text-[12px] tracking-wide text-[#666666]"> 
          "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
        </p>
      </div>
    </div>
  );
};
export default Footer;
