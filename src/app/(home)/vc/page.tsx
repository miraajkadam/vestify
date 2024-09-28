import React from 'react'

function page() {
  return (
    <div className=' h-[100vh] w-full bg-white justify-start items-start inline-flex overflow-y-scroll '>
      <div className='w-full px-8 pb-8 bg-white flex-col justify-start items-start gap-[25px] inline-flex'>
        <div className='w-full flex-col justify-start items-end flex'>
          {/** Header */}
          <div className='w-full p-[34.15px] justify-between items-start gap-[934px] inline-flex'>
            <div className='w-full justify-start items-center gap-[17.07px] flex'>
              <div className="text-[#18191c] text-[25.61px] font-extrabold font-['Plus Jakarta Sans'] leading-10">
                Hi, Spicy Capital
              </div>
            </div>

            <div className='p-[10px] min-w-[100px] bg-indigo-600 rounded-[5px] items-center gap-2.5 flex'>
              <span className="text-white text-md font-semibold font-['Urbanist'] leading-tight">
                Join Now
              </span>
            </div>
          </div>

          <div className='w-full self-stretch h-[291.32px] flex-col justify-start items-start gap-[21.34px] flex'>
            <div className='w-full justify-between items-start gap-[25.61px] inline-flex'>
              <div className='w-[316.50px] h-[139.05px] relative'>
                <div className='w-[316.50px] h-[139.05px] left-0 top-0 absolute bg-[#f8f8f8] rounded-3xl border border-black/10' />
                <div className='w-[250.53px] h-[73.21px] left-[32.99px] top-[32.92px] absolute justify-start items-center gap-[20.06px] inline-flex'>
                  <div className='w-[73.21px] h-[73.21px] bg-[#bad7ff] rounded-full' />
                  <div className="text-[#18191c] text-[35px] font-bold font-['Urbanist'] leading-[46.12px]">
                    VC Name
                  </div>
                </div>
              </div>
              <div className='w-[271.45px] h-[139.75px] relative'>
                <div className='w-[271.45px] h-[139.75px] left-0 top-0 absolute bg-[#f8f8f8] rounded-[20.29px] border border-black/10' />
                <div className="left-[20.69px] top-[20.29px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  KYC States
                </div>
                <div className='h-[49.09px] p-[16.05px] left-[60px] top-[60.65px] absolute bg-[#b80000]/5 rounded-lg justify-start items-center gap-2 inline-flex'>
                  <div className="text-[#ea0000] text-2xl font-semibold font-['Urbanist'] leading-[32.81px]">
                    Required
                  </div>
                </div>
              </div>
              <div className='w-[276.89px] h-[139.75px] relative'>
                <div className='w-[276.89px] h-[139.75px] left-0 top-0 absolute bg-[#f8f8f8] rounded-[20.29px] border border-black/10' />
                <div className='h-[23.45px] left-[20.57px] top-[76.57px] absolute justify-start items-center gap-[35.40px] inline-flex'>
                  <div className='w-[22.92px] h-[23.45px] relative' />
                  <div className='w-[23.48px] h-[23.45px] relative' />
                </div>
                <div className="left-[20.57px] top-[20.29px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  Social Media:
                </div>
              </div>
              <div className='w-[354.31px] h-[124.31px] relative'>
                <div className='w-[354.31px] h-[124.31px] left-0 top-0 absolute bg-[#fff9f4] rounded-[26.99px] border border-[#e5bf46]/10' />
                <div className="left-[20.52px] top-[20.31px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  Fund Size
                </div>
                <div className="left-[19.30px] top-[62.15px] absolute text-[#18191c] text-[40px] font-bold font-['Urbanist'] leading-[41.35px]">
                  $1,00,000
                </div>
              </div>
            </div>

            <div className='w-full justify-between items-center gap-[21.34px] inline-flex'>
              <div className='w-[401.71px] h-[124.31px] relative'>
                <div className='w-[401.71px] h-[124.31px] left-0 top-0 absolute bg-[#f4f4ff] rounded-[26.99px] border border-indigo-600/10' />
                <div className='h-[82.69px] left-[20.52px] top-[20.31px] absolute flex-col justify-start items-start gap-[29.88px] inline-flex'>
                  <div className="text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                    Tags
                  </div>
                  <div className='self-stretch justify-start items-center gap-[8.54px] inline-flex'>
                    <div className='px-[12.81px] py-[6.40px] bg-[#443cc4] rounded-[10.67px] justify-start items-start gap-[10.67px] flex'>
                      <div className="text-white text-[15px] font-medium font-['Inter'] leading-snug">
                        DEFI
                      </div>
                    </div>
                    <div className='px-[12.81px] py-[6.40px] bg-[#443cc4] rounded-[10.67px] justify-start items-start gap-[10.67px] flex'>
                      <div className="text-white text-[15px] font-medium font-['Inter'] leading-snug">
                        API
                      </div>
                    </div>
                    <div className='px-[12.81px] py-[6.40px] bg-[#443cc4] rounded-[10.67px] justify-start items-start gap-[10.67px] flex'>
                      <div className="text-white text-[15px] font-medium font-['Inter'] leading-snug">
                        DEFI
                      </div>
                    </div>
                    <div className='px-[12.81px] py-[6.40px] bg-[#443cc4] rounded-[10.67px] justify-start items-start gap-[10.67px] flex'>
                      <div className="text-white text-[15px] font-medium font-['Inter'] leading-snug">
                        INFRASTRUCTURE
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-[274.17px] h-[130.23px] relative'>
                <div className='w-[274.17px] h-[130.23px] left-0 top-0 absolute bg-[#f8f8f8] rounded-[20.29px] border border-black/10' />
                <div className="left-[20.78px] top-[21.91px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  Last project ROI
                </div>
                <div className='w-[81.76px] h-[82.61px] left-[174.28px] top-[20.70px] absolute'>
                  <div className='w-[81.34px] h-[82.18px] left-0 top-[0.42px] absolute rounded-full border-8 border-white' />
                  <div className='w-[81.34px] h-[82.18px] left-[0.42px] top-0 absolute rounded-full border-8 border-[#46d5e5]' />
                </div>
                <div className="left-[20.78px] top-[65.83px] absolute text-[#18191c] text-3xl font-extrabold font-['Urbanist'] leading-[38.92px]">
                  32%
                </div>
              </div>
              <div className='w-[286.19px] h-[130.23px] relative'>
                <div className='w-[286.19px] h-[130.23px] left-0 top-0 absolute bg-[#039be5]/5 rounded-[20.29px] border border-[#039be5]/20' />
                <div className="left-[24.83px] top-[21.91px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  Average ROI
                </div>
                <div className='w-[224.97px] h-[0px] left-[30.17px] top-[96.25px] absolute'></div>
                <div className="left-[199.96px] top-[20.31px] absolute text-[#18191c] text-3xl font-extrabold font-['Urbanist'] leading-7">
                  72%
                </div>
              </div>
              <div className='w-[269.89px] h-[130.23px] relative'>
                <div className='w-[269.89px] h-[130.23px] left-0 top-0 absolute bg-[#f4f4ff] rounded-[26.99px] border border-indigo-600/10' />
                <div className="left-[20.52px] top-[21.91px] absolute text-[#18191c] text-[15px] font-medium font-['Urbanist'] leading-[17.39px]">
                  Subscription price
                </div>
                <div className="left-[19.30px] top-[62.15px] absolute text-[#18191c] text-[40px] font-bold font-['Urbanist'] leading-[41.35px]">
                  $50.00
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='h-[280px] w-full flex-col justify-start items-start gap-[15px] flex'>
          <div className="text-[#18191c] text-[25px] font-bold font-['Urbanist'] leading-7">
            VC Description
          </div>
          <div className="self-stretch text-[#2c2c2c] text-base font-normal font-['Urbanist'] leading-normal">
            Project 1 is a Shopify Plus agency, and we partner with brands to help them grow, we
            also do the same with our people!
          </div>
          <div className="self-stretch text-[#2c2c2c] text-base font-normal font-['Urbanist'] leading-normal">
            Here at Velstar, we don't just make websites, we create exceptional digital experiences
            that consumers love. Our team of designers, developers, strategists, and creators work
            together to push brands to the next level. From Platform Migration, User Experience &
            User Interface Design, to Digital Marketing, we have a proven track record in delivering
            outstanding eCommerce solutions and driving sales for our clients.
          </div>
          <div className="self-stretch text-[#2c2c2c] text-base font-normal font-['Urbanist'] leading-normal">
            The role will involve translating project specifications into clean, test-driven, easily
            maintainable code. You will work with the Project and Development teams as well as with
            the Technical Director, adhering closely to project plans and delivering work that meets
            functional & non-functional requirements. You will have the opportunity to create new,
            innovative, secure and scalable features for our clients on the Shopify platform
          </div>
          <div className="w-[734px] text-[#2c2c2c] text-base font-normal font-['Inter'] leading-normal">
            Want to work with us? You're in good company!
          </div>
        </div>

        <div className='w-full self-stretch h-[409.50px] flex-col justify-start items-start gap-[30px] flex'>
          <div className="text-[#18191c] text-[25px] font-bold font-['Urbanist'] leading-7">
            Last 5 projects
          </div>
          <div className='w-full self-stretch h-[351.50px] flex-col justify-between items-start gap-5 flex'>
            <div className='w-full h-[31.50px] relative'>
              <div className='h-[11px] left-0 top-0 absolute justify-between items-center gap-[5px] inline-flex'>
                <div className="text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
                  Project Name
                </div>
                <div className='w-2 h-[11px] relative' />
              </div>
              <div className='h-[11px] left-[295.96px] top-0 absolute justify-start items-center gap-[5px] inline-flex'>
                <div className="text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
                  Pledge Amount
                </div>
              </div>
              <div className="left-[465.96px] top-0 absolute text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
                Market Cap
              </div>
              <div className="left-[640.96px] top-0 absolute text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
                Top Gainers
              </div>
              <div className="left-[810.55px] top-[0.50px] absolute text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
                Raised Amount
              </div>
              <div className="left-[1022.15px] top-[0.50px] absolute text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
                Ongoing Claim
              </div>
              <div className='w-full h-[0px] left-0 top-[31.50px] absolute border border-[#e1e1e1]'></div>
            </div>
            <div className='w-full self-stretch h-[300px] flex-col justify-start items-start gap-[25px] flex'>
              <div className='w-[1295.99px] h-10 relative'>
                <div className='h-10 left-0 top-0 absolute justify-start items-center gap-[15px] inline-flex'>
                  <img className='w-10 h-10' src='https://via.placeholder.com/40x40' />
                  <div className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                    Hypermove
                  </div>
                </div>
                <div className="left-[295.96px] top-[13.50px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                  $23,000
                </div>
                <div className="left-[465.96px] top-[13.50px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                  N/A
                </div>
                <img
                  className='w-[29.01px] h-[29.01px] left-[667.45px] top-[5.49px] absolute rounded-full'
                  src='https://via.placeholder.com/29x29'
                />
                <div className="left-[1022.15px] top-[13.50px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                  8
                </div>
                <div className='h-[13px] left-[810.55px] top-[13.50px] absolute flex-col justify-start items-start gap-2.5 inline-flex'>
                  <div className="text-[#303138] text-lg font-extrabold font-['Urbanist'] leading-[32.85px]">
                    $43,000
                  </div>
                </div>
                <div className='w-24 h-[35px] p-2.5 left-[1199.99px] top-[2.50px] absolute bg-[#443cc4] rounded-[28px] justify-center items-center gap-2.5 inline-flex'>
                  <div className="text-white text-sm font-semibold font-['Urbanist'] capitalize tracking-tight">
                    Details
                  </div>
                </div>
              </div>
              <div className='w-[1295.99px] h-10 relative'>
                <div className='h-10 left-0 top-0 absolute justify-start items-center gap-[15px] inline-flex'>
                  <img className='w-10 h-10' src='https://via.placeholder.com/40x40' />
                  <div className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                    Hypermove
                  </div>
                </div>
                <div className="left-[295.96px] top-[13.50px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                  $23,000
                </div>
                <div className="left-[465.96px] top-[13.50px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                  $56.32M
                </div>
                <img
                  className='w-[29.01px] h-[29.01px] left-[667.45px] top-[5.49px] absolute rounded-full'
                  src='https://via.placeholder.com/29x29'
                />
                <div className="left-[1022.15px] top-[13.50px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                  8
                </div>
                <div className='h-[13px] left-[810.55px] top-[13.50px] absolute flex-col justify-start items-start gap-2.5 inline-flex'>
                  <div className="text-[#303138] text-lg font-extrabold font-['Urbanist'] leading-[32.85px]">
                    $43,000
                  </div>
                </div>
                <div className='w-24 h-[35px] p-2.5 left-[1199.99px] top-[2.50px] absolute bg-[#443cc4] rounded-[28px] justify-center items-center gap-2.5 inline-flex'>
                  <div className="text-white text-sm font-semibold font-['Urbanist'] capitalize tracking-tight">
                    Details
                  </div>
                </div>
              </div>
              <div className='w-[1295.99px] h-10 relative'>
                <div className='h-10 left-0 top-0 absolute justify-start items-center gap-[15px] inline-flex'>
                  <img className='w-10 h-10' src='https://via.placeholder.com/40x40' />
                  <div className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                    Hypermove
                  </div>
                </div>
                <div className="left-[295.96px] top-[13.50px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                  $23,000
                </div>
                <div className="left-[465.96px] top-[13.50px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                  $56.32M
                </div>
                <img
                  className='w-[29.01px] h-[29.01px] left-[667.45px] top-[5.49px] absolute rounded-full'
                  src='https://via.placeholder.com/29x29'
                />
                <div className="left-[1022.15px] top-[13.50px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                  8
                </div>
                <div className='h-[13px] left-[810.55px] top-[13.50px] absolute flex-col justify-start items-start gap-2.5 inline-flex'>
                  <div className="text-[#303138] text-lg font-extrabold font-['Urbanist'] leading-[32.85px]">
                    $43,000
                  </div>
                </div>
                <div className='w-24 h-[35px] p-2.5 left-[1199.99px] top-[2.50px] absolute bg-[#443cc4] rounded-[28px] justify-center items-center gap-2.5 inline-flex'>
                  <div className="text-white text-sm font-semibold font-['Urbanist'] capitalize tracking-tight">
                    Details
                  </div>
                </div>
              </div>
              <div className='w-[1295.99px] h-10 relative'>
                <div className='h-10 left-0 top-0 absolute justify-start items-center gap-[15px] inline-flex'>
                  <img className='w-10 h-10' src='https://via.placeholder.com/40x40' />
                  <div className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                    Hypermove
                  </div>
                </div>
                <div className="left-[295.96px] top-[13.50px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                  $23,000
                </div>
                <div className="left-[465.96px] top-[13.50px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                  $56.32M
                </div>
                <img
                  className='w-[29.01px] h-[29.01px] left-[667.45px] top-[5.49px] absolute rounded-full'
                  src='https://via.placeholder.com/29x29'
                />
                <div className="left-[1022.15px] top-[13.50px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                  8
                </div>
                <div className='h-[13px] left-[810.55px] top-[13.50px] absolute flex-col justify-start items-start gap-2.5 inline-flex'>
                  <div className="text-[#303138] text-lg font-extrabold font-['Urbanist'] leading-[32.85px]">
                    $43,000
                  </div>
                </div>
                <div className='w-24 h-[35px] p-2.5 left-[1199.99px] top-[2.50px] absolute bg-[#443cc4] rounded-[28px] justify-center items-center gap-2.5 inline-flex'>
                  <div className="text-white text-sm font-semibold font-['Urbanist'] capitalize tracking-tight">
                    Details
                  </div>
                </div>
              </div>
              <div className='w-[1295.99px] h-10 relative'>
                <div className='h-10 left-0 top-0 absolute justify-start items-center gap-[15px] inline-flex'>
                  <img className='w-10 h-10' src='https://via.placeholder.com/40x40' />
                  <div className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                    Hypermove
                  </div>
                </div>
                <div className="left-[295.96px] top-[13.50px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                  $23,000
                </div>
                <div className="left-[465.96px] top-[13.50px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                  $56.32M
                </div>
                <img
                  className='w-[29.01px] h-[29.01px] left-[667.45px] top-[5.49px] absolute rounded-full'
                  src='https://via.placeholder.com/29x29'
                />
                <div className="left-[1022.15px] top-[13.50px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                  8
                </div>
                <div className='h-[13px] left-[810.55px] top-[13.50px] absolute flex-col justify-start items-start gap-2.5 inline-flex'>
                  <div className="text-[#303138] text-lg font-extrabold font-['Urbanist'] leading-[32.85px]">
                    $43,000
                  </div>
                </div>
                <div className='w-24 h-[35px] p-2.5 left-[1199.99px] top-[2.50px] absolute bg-[#443cc4] rounded-[28px] justify-center items-center gap-2.5 inline-flex'>
                  <div className="text-white text-sm font-semibold font-['Urbanist'] capitalize tracking-tight">
                    Details
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
