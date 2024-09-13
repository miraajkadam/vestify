'use client'
import React, { useState } from 'react'

// Define your types if necessary (e.g., for the profile info, etc.)
interface ProfileInfo {
  name: string
  account: string
  kyc: string
  tags: string[]
  bigNumber: string
}

const initialProfile: ProfileInfo = {
  name: 'John Doe',
  account: '123456789',
  kyc: 'Verified',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  bigNumber: '9876543210',
}

const Page: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<'button1' | 'button2'>('button1')

  // Mock data for table based on button
  const tableData =
    selectedButton === 'button1'
      ? ['Data 1A', 'Data 1B', 'Data 1C']
      : ['Data 2A', 'Data 2B', 'Data 2C']

  return (
    <div className='h-[956px] w-full bg-white justify-start items-start inline-flex'>
      <div className='pt-[35px] pb-8 bg-white flex-col justify-start items-end inline-flex'>
        <div className='px-8 flex-col justify-start items-start flex'>
          <div className='flex-col justify-start items-start gap-[30px] flex'>
            <div className='h-[829.29px] flex-col justify-start items-start gap-[30px] flex'>
              <div className='self-stretch justify-between items-center inline-flex'>
                <div className='px-[11px] py-[3px] rounded-[20px] border border-[#303138]/20 justify-start items-center gap-3 flex'>
                  <div className="text-[#afafaf] text-[13px] font-medium font-['Inter'] leading-7">
                    Search Investors, allocations, deals..
                  </div>
                  <div className='w-[18px] h-[18px] pl-[1.69px] pr-[1.72px] pt-[1.69px] pb-[1.72px] justify-center items-center flex' />
                </div>
                <div className='justify-start items-center gap-2.5 flex'>
                  <div className='w-[15.36px] h-[15.36px] bg-[#3ede8b] rounded-full shadow' />
                  <div className="text-[#303138] text-sm font-medium font-['Inter'] leading-7">
                    0x8855.,87a4
                  </div>
                </div>
              </div>
              <div className='self-stretch justify-between items-start inline-flex'>
                <div className='w-[419.58px] flex-col justify-start items-start gap-[24.90px] inline-flex'>
                  <div className='justify-start items-center gap-[13.70px] inline-flex'>
                    <div className='w-[131.18px] h-[131.18px] relative'>
                      <div className='w-[131.18px] h-[131.18px] left-0 top-0 absolute bg-[#f3f3f3] rounded-xl' />
                      <div className='w-[76.84px] h-[92.13px] left-[27.17px] top-[19.52px] absolute flex-col justify-center items-center gap-[0.21px] inline-flex' />
                    </div>
                    <div className='w-[250.26px] flex-col justify-start items-start gap-[18.68px] inline-flex'>
                      <div className="text-[#303138] text-[27px] font-bold font-['Urbanist'] leading-[52.89px]">
                        naka@bestify.com
                      </div>
                      <div className='flex-col justify-start items-start gap-[6.23px] flex'>
                        <div className='p-[6.23px] bg-[#039be5]/10 rounded-[17.43px] justify-start items-center gap-2.5 inline-flex'>
                          <div className='px-[1.25px] flex-col justify-start items-start gap-[12.45px] inline-flex' />
                          <div className="text-[#039be5] text-[15px] font-bold font-['Urbanist'] leading-[34.86px]">
                            iNakazumi
                          </div>
                        </div>
                        <div className='p-[6.23px] bg-[#5865f2]/10 rounded-[17.43px] justify-start items-center gap-2.5 inline-flex'>
                          <div className="text-[#5865f2] text-[15px] font-bold font-['Urbanist'] leading-[34.86px]">
                            Nka9942
                          </div>
                        </div>
                        <div className='justify-start items-center gap-[6.23px] inline-flex'>
                          <div className='p-[6.23px] bg-[#00b828]/5 rounded-[17.43px] justify-start items-center gap-[11.21px] flex'>
                            <div className='px-[2.23px] flex-col justify-start items-center inline-flex' />
                            <div>
                              <span className="text-[#303138] text-[15px] font-bold font-['Urbanist'] leading-[34.86px]">
                                KYC:{' '}
                              </span>
                              <span className="text-[#00b828] text-[15px] font-bold font-['Urbanist'] leading-[34.86px]">
                                Approved
                              </span>
                            </div>
                          </div>
                          <div className='w-[14.93px] h-[14.94px] relative' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='self-stretch h-[84.25px] flex-col justify-start items-start gap-[12.45px] flex'>
                    <div className='justify-start items-center gap-[12.45px] inline-flex'>
                      <div className='p-[6.23px] rounded-[9.96px] border border-[#eeedfd] justify-start items-center gap-[6.23px] flex'>
                        <div className="text-[#303138] text-[15px] font-medium font-['Urbanist'] leading-normal">
                          Deals
                        </div>
                        <div className='p-[6.23px] bg-[#eeedfd] rounded-md justify-center items-center gap-[12.45px] flex'>
                          <div className="text-indigo-600 text-[15px] font-semibold font-['Urbanist'] leading-normal">
                            15
                          </div>
                        </div>
                      </div>
                      <div className='p-[6.23px] rounded-[9.96px] border border-[#eeedfd] justify-start items-center gap-[6.23px] flex'>
                        <div className="text-[#303138] text-[15px] font-medium font-['Urbanist'] leading-normal">
                          OTC trades
                        </div>
                        <div className='p-[6.23px] bg-[#eeedfd] rounded-md justify-center items-center gap-[12.45px] flex'>
                          <div className="text-indigo-600 text-[15px] font-semibold font-['Urbanist'] leading-normal">
                            5
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='self-stretch justify-start items-center gap-[12.45px] inline-flex'>
                      <div className='p-[6.23px] rounded-[9.96px] border border-[#eeedfd] justify-start items-center gap-[6.23px] flex'>
                        <div className="text-[#303138] text-[15px] font-medium font-['Urbanist'] leading-normal">
                          Invested
                        </div>
                        <div className='p-[6.23px] bg-[#eeedfd] rounded-md justify-center items-center gap-[12.45px] flex'>
                          <div className="text-indigo-600 text-[15px] font-semibold font-['Urbanist'] leading-normal">
                            $6,324.00
                          </div>
                        </div>
                      </div>
                      <div className='p-[6.23px] rounded-[9.96px] border border-[#eeedfd] justify-start items-center gap-[6.23px] flex'>
                        <div className="text-[#303138] text-[15px] font-medium font-['Urbanist'] leading-normal">
                          Average investment:
                        </div>
                        <div className='p-[6.23px] bg-[#eeedfd] rounded-md justify-center items-center gap-[12.45px] flex'>
                          <div className="text-indigo-600 text-[15px] font-semibold font-['Urbanist'] leading-normal">
                            $421.60
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex-col justify-start items-start gap-[18.68px] inline-flex'>
                  <div className="self-stretch text-[#303138] text-[27px] font-bold font-['Urbanist'] leading-[52.89px]">
                    Account wallets
                  </div>
                  <div className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                    Used to sign in
                  </div>
                  <div className='flex-col justify-start items-start gap-[18px] flex'>
                    <div className="text-[#303138]/70 text-lg font-medium font-['Inter'] leading-[32.85px]">
                      0xa5e9138543b548ajduj5651766a46899
                    </div>
                    <div className="text-[#303138]/70 text-lg font-medium font-['Urbanist'] leading-[32.85px]">
                      0xa5e9138543b548ajduj5651766a46899
                    </div>
                    <div className="text-[#303138]/70 text-lg font-medium font-['Inter'] leading-[32.85px]">
                      0xa5e9138543b548ajduj5651766a46899
                    </div>
                    <div className="text-[#303138]/70 text-lg font-medium font-['Inter'] leading-[32.85px]">
                      0xa5e9138543b548ajduj5651766a46899
                    </div>
                    <div className="text-[#303138]/70 text-lg font-medium font-['Inter'] leading-[32.85px]">
                      0xa5e9138543b548ajduj5651766a46899
                    </div>
                  </div>
                </div>
              </div>
              <div className='self-stretch h-[494.95px] flex-col justify-start items-center gap-[30px] flex'>
                <div className='self-stretch h-12 flex-col justify-start items-start flex'>
                  <div className='justify-center items-start gap-[39px] inline-flex'>
                    <div className='px-[15px] pt-[15px] pb-5 bg-[#f7f7ff] rounded-tl-[10px] rounded-tr-[10px] justify-center items-center gap-2.5 flex'>
                      <div className='justify-center items-center gap-2.5 flex'>
                        <div className="text-[#7870fc] text-lg font-semibold font-['Urbanist'] capitalize">
                          deals
                        </div>
                      </div>
                    </div>
                    <div className='py-[15px] justify-center items-center gap-2.5 flex'>
                      <div className="text-[#505050] text-lg font-semibold font-['Urbanist'] capitalize">
                        Compliance
                      </div>
                    </div>
                  </div>
                  <div className='w-[1296px] h-[0px] relative'>
                    <div className='w-[1296px] h-[0px] left-0 top-0 absolute border border-[#e1e1e1]'></div>
                    <div className='w-[75px] h-[0px] left-0 top-0 absolute border-2 border-[#7870fc]'></div>
                  </div>
                </div>
                <div className='h-[416.95px] flex-col justify-start items-end gap-[30px] flex'>
                  <div className='px-[11px] py-[3px] rounded-[20px] border border-[#303138]/20 justify-start items-center gap-20 inline-flex'>
                    <div className="text-[#afafaf] text-[13px] font-medium font-['Inter'] leading-7">
                      Search deals..
                    </div>
                    <div className='w-[18px] h-[18px] pl-[1.69px] pr-[1.72px] pt-[1.69px] pb-[1.72px] justify-center items-center flex' />
                  </div>
                  <div className='self-stretch h-[352.95px] flex-col justify-start items-start gap-5 flex'>
                    <div className='w-[1146.93px] h-[11.50px] relative'>
                      <div className='h-[11px] left-0 top-0 absolute justify-start items-center gap-[5px] inline-flex'>
                        <div className="text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
                          Deal
                        </div>
                        <div className='w-2 h-[11px] pl-px pr-[0.57px] pt-[0.37px] pb-[0.16px] flex-col justify-center items-start gap-0.5 inline-flex' />
                      </div>
                      <div className='h-[11px] left-[284.96px] top-0 absolute justify-start items-center gap-[5px] inline-flex'>
                        <div className="text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
                          Allocation
                        </div>
                        <div className='w-2 h-[11px] pl-px pr-[0.57px] pt-[0.37px] pb-[0.16px] flex-col justify-center items-start gap-0.5 inline-flex' />
                      </div>
                      <div className='h-[11px] left-[786.74px] top-0 absolute justify-start items-center gap-[5px] inline-flex'>
                        <div className="text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
                          Contributed
                        </div>
                        <div className='w-2 h-[11px] pl-px pr-[0.57px] pt-[0.37px] pb-[0.16px] flex-col justify-center items-start gap-0.5 inline-flex' />
                      </div>
                      <div className='h-[11px] left-[952.33px] top-0 absolute justify-start items-center gap-[5px] inline-flex'>
                        <div className="text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
                          Refunded
                        </div>
                        <div className='w-2 h-[11px] pl-px pr-[0.57px] pt-[0.37px] pb-[0.16px] flex-col justify-center items-start gap-0.5 inline-flex' />
                      </div>
                      <div className="left-[430.55px] top-[0.50px] absolute text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
                        Tokens received
                      </div>
                      <div className="left-[588.15px] top-[0.50px] absolute text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
                        receiving EVM
                      </div>
                      <div className="left-[1115.93px] top-[0.50px] absolute text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
                        OTC
                      </div>
                    </div>
                    <div className='self-stretch h-[321.45px] flex-col justify-start items-start gap-[25px] flex'>
                      <div className='w-[1234.93px] h-[0px] border border-[#e1e1e1]'></div>
                      <div className='w-[1230.93px] h-[55.36px] relative'>
                        <div className='h-[55.36px] left-0 top-0 absolute justify-start items-center gap-[15px] inline-flex'>
                          <div className='w-[55.36px] h-[55.36px] bg-[#d9d9d9] rounded-[10px]' />
                          <div className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            Project Universal
                          </div>
                        </div>
                        <div className="left-[284.96px] top-[21.18px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                          $497.00
                        </div>
                        <div className="left-[588.15px] top-[21.18px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                          0x8855...87a4
                        </div>
                        <div className='left-[786.74px] top-[21.18px] absolute'>
                          <span className="text-[#00b828] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            +$3.00
                          </span>
                          <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            {' '}
                            (3)
                          </span>
                        </div>
                        <div className='left-[952.33px] top-[21.18px] absolute'>
                          <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            -$2.00
                          </span>
                          <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            {' '}
                            (3)
                          </span>
                        </div>
                        <div className='left-[1115.93px] top-[21.18px] absolute'>
                          <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            -$1,004.00
                          </span>
                          <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            {' '}
                            (9)
                          </span>
                        </div>
                        <div className='w-[79px] h-[35px] left-[430.55px] top-[10.18px] absolute flex-col justify-start items-start gap-2.5 inline-flex'>
                          <div className="text-[#303138] text-lg font-extrabold font-['Urbanist'] leading-[32.85px]">
                            0 UNI
                          </div>
                          <div className="self-stretch text-[#afafaf] text-[17px] font-semibold font-['Urbanist'] leading-[32.85px]">
                            165.67 UNI
                          </div>
                        </div>
                      </div>
                      <div className='w-[1230.93px] h-[55.36px] relative'>
                        <div className='h-[55.36px] left-0 top-0 absolute justify-start items-center gap-[15px] inline-flex'>
                          <div className='w-[55.36px] h-[55.36px] bg-[#d9d9d9] rounded-[10px]' />
                          <div className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            Project Universal
                          </div>
                        </div>
                        <div className="left-[284.96px] top-[21.18px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                          $497.00
                        </div>
                        <div className="left-[588.15px] top-[21.18px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                          0x8855...87a4
                        </div>
                        <div className='left-[786.74px] top-[21.18px] absolute'>
                          <span className="text-[#00b828] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            +$3.00
                          </span>
                          <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            {' '}
                            (3)
                          </span>
                        </div>
                        <div className='left-[952.33px] top-[21.18px] absolute'>
                          <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            -$2.00
                          </span>
                          <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            {' '}
                            (3)
                          </span>
                        </div>
                        <div className='left-[1115.93px] top-[21.18px] absolute'>
                          <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            -$1,004.00
                          </span>
                          <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            {' '}
                            (9)
                          </span>
                        </div>
                        <div className='w-[79px] h-[35px] left-[430.55px] top-[10.18px] absolute flex-col justify-start items-start gap-2.5 inline-flex'>
                          <div className="text-[#303138] text-lg font-extrabold font-['Urbanist'] leading-[32.85px]">
                            0 UNI
                          </div>
                          <div className="self-stretch text-[#afafaf] text-[17px] font-semibold font-['Urbanist'] leading-[32.85px]">
                            165.67 UNI
                          </div>
                        </div>
                      </div>
                      <div className='w-[1230.93px] h-[55.36px] relative'>
                        <div className='h-[55.36px] left-0 top-0 absolute justify-start items-center gap-[15px] inline-flex'>
                          <div className='w-[55.36px] h-[55.36px] bg-[#d9d9d9] rounded-[10px]' />
                          <div className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            Project Universal
                          </div>
                        </div>
                        <div className="left-[284.96px] top-[21.18px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                          $497.00
                        </div>
                        <div className="left-[588.15px] top-[21.18px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                          0x8855...87a4
                        </div>
                        <div className='left-[786.74px] top-[21.18px] absolute'>
                          <span className="text-[#00b828] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            +$3.00
                          </span>
                          <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            {' '}
                            (3)
                          </span>
                        </div>
                        <div className='left-[952.33px] top-[21.18px] absolute'>
                          <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            -$2.00
                          </span>
                          <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            {' '}
                            (3)
                          </span>
                        </div>
                        <div className='left-[1115.93px] top-[21.18px] absolute'>
                          <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            -$1,004.00
                          </span>
                          <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            {' '}
                            (9)
                          </span>
                        </div>
                        <div className='w-[79px] h-[35px] left-[430.55px] top-[10.18px] absolute flex-col justify-start items-start gap-2.5 inline-flex'>
                          <div className="text-[#303138] text-lg font-extrabold font-['Urbanist'] leading-[32.85px]">
                            0 UNI
                          </div>
                          <div className="self-stretch text-[#afafaf] text-[17px] font-semibold font-['Urbanist'] leading-[32.85px]">
                            165.67 UNI
                          </div>
                        </div>
                      </div>
                      <div className='w-[1230.93px] h-[55.36px] relative'>
                        <div className='h-[55.36px] left-0 top-0 absolute justify-start items-center gap-[15px] inline-flex'>
                          <div className='w-[55.36px] h-[55.36px] bg-[#d9d9d9] rounded-[10px]' />
                          <div className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            Project Universal
                          </div>
                        </div>
                        <div className="left-[284.96px] top-[21.18px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                          $497.00
                        </div>
                        <div className="left-[588.15px] top-[21.18px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                          0x8855...87a4
                        </div>
                        <div className='left-[786.74px] top-[21.18px] absolute'>
                          <span className="text-[#00b828] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            +$3.00
                          </span>
                          <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            {' '}
                            (3)
                          </span>
                        </div>
                        <div className='left-[952.33px] top-[21.18px] absolute'>
                          <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            -$2.00
                          </span>
                          <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            {' '}
                            (3)
                          </span>
                        </div>
                        <div className='left-[1115.93px] top-[21.18px] absolute'>
                          <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            -$1,004.00
                          </span>
                          <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            {' '}
                            (9)
                          </span>
                        </div>
                        <div className='w-[79px] h-[35px] left-[430.55px] top-[10.18px] absolute flex-col justify-start items-start gap-2.5 inline-flex'>
                          <div className="text-[#303138] text-lg font-extrabold font-['Urbanist'] leading-[32.85px]">
                            0 UNI
                          </div>
                          <div className="self-stretch text-[#afafaf] text-[17px] font-semibold font-['Urbanist'] leading-[32.85px]">
                            165.67 UNI
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className='h-[956px] w-full bg-white justify-start items-start inline-flex'>
    //   <div className='pt-[35px] pb-8 bg-white flex-col justify-start items-end inline-flex'>
    //     <div className='px-8 flex-col justify-start items-start flex'>
    //       <div className='flex-col justify-start items-start gap-[30px] flex'>
    //         <div className='h-[829.29px] flex-col justify-start items-start gap-[30px] flex'>
    //           <div className='self-stretch justify-between items-center inline-flex'>
    //             <div className='px-[11px] py-[3px] rounded-[20px] border border-[#303138]/20 justify-start items-center gap-3 flex'>
    //               <div className="text-[#afafaf] text-[13px] font-medium font-['Inter'] leading-7">
    //                 Search Investors, allocations, deals..
    //               </div>
    //               <div className='w-[18px] h-[18px] relative' />
    //             </div>
    //             <div className='justify-start items-center gap-2.5 flex'>
    //               <div className='w-[15.36px] h-[15.36px] bg-[#3ede8b] rounded-full shadow' />
    //               <div className="text-[#303138] text-sm font-medium font-['Inter'] leading-7">
    //                 0x8855.,87a4
    //               </div>
    //             </div>
    //           </div>
    //           <div className='self-stretch justify-between items-start inline-flex'>
    //             <div className='w-[419.58px] flex-col justify-start items-start gap-[24.90px] inline-flex'>
    //               <div className='justify-start items-center gap-[13.70px] inline-flex'>
    //                 <div className='w-[131.18px] h-[131.18px] relative'>
    //                   <div className='w-[131.18px] h-[131.18px] left-0 top-0 absolute bg-[#f3f3f3] rounded-xl' />
    //                   <div className='w-[76.84px] h-[92.13px] left-[27.17px] top-[19.52px] absolute' />
    //                 </div>
    //                 <div className='w-[250.26px] flex-col justify-start items-start gap-[18.68px] inline-flex'>
    //                   <div className="text-[#303138] text-[27px] font-bold font-['Urbanist'] leading-[52.89px]">
    //                     naka@bestify.com
    //                   </div>
    //                   <div className='flex-col justify-start items-start gap-[6.23px] flex'>
    //                     <div className='p-[6.23px] bg-[#039be5]/10 rounded-[17.43px] justify-start items-center gap-2.5 inline-flex'>
    //                       <div className='px-[1.25px] flex-col justify-start items-start gap-[12.45px] inline-flex' />
    //                       <div className="text-[#039be5] text-[15px] font-bold font-['Urbanist'] leading-[34.86px]">
    //                         iNakazumi
    //                       </div>
    //                     </div>
    //                     <div className='p-[6.23px] bg-[#5865f2]/10 rounded-[17.43px] justify-start items-center gap-2.5 inline-flex'>
    //                       <div className="text-[#5865f2] text-[15px] font-bold font-['Urbanist'] leading-[34.86px]">
    //                         Nka9942
    //                       </div>
    //                     </div>
    //                     <div className='justify-start items-center gap-[6.23px] inline-flex'>
    //                       <div className='p-[6.23px] bg-[#00b828]/5 rounded-[17.43px] justify-start items-center gap-[11.21px] flex'>
    //                         <div className='px-[2.23px] flex-col justify-start items-center inline-flex' />
    //                         <div>
    //                           <span className="text-[#303138] text-[15px] font-bold font-['Urbanist'] leading-[34.86px]">
    //                             KYC:{' '}
    //                           </span>
    //                           <span className="text-[#00b828] text-[15px] font-bold font-['Urbanist'] leading-[34.86px]">
    //                             Approved
    //                           </span>
    //                         </div>
    //                       </div>
    //                       <div className='w-[14.93px] h-[14.94px] relative' />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className='self-stretch h-[84.25px] flex-col justify-start items-start gap-[12.45px] flex'>
    //                 <div className='justify-start items-center gap-[12.45px] inline-flex'>
    //                   <div className='p-[6.23px] rounded-[9.96px] border border-[#eeedfd] justify-start items-center gap-[6.23px] flex'>
    //                     <div className="text-[#303138] text-[15px] font-medium font-['Urbanist'] leading-normal">
    //                       Deals
    //                     </div>
    //                     <div className='p-[6.23px] bg-[#eeedfd] rounded-md justify-center items-center gap-[12.45px] flex'>
    //                       <div className="text-indigo-600 text-[15px] font-semibold font-['Urbanist'] leading-normal">
    //                         15
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className='p-[6.23px] rounded-[9.96px] border border-[#eeedfd] justify-start items-center gap-[6.23px] flex'>
    //                     <div className="text-[#303138] text-[15px] font-medium font-['Urbanist'] leading-normal">
    //                       OTC trades
    //                     </div>
    //                     <div className='p-[6.23px] bg-[#eeedfd] rounded-md justify-center items-center gap-[12.45px] flex'>
    //                       <div className="text-indigo-600 text-[15px] font-semibold font-['Urbanist'] leading-normal">
    //                         5
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className='self-stretch justify-start items-center gap-[12.45px] inline-flex'>
    //                   <div className='p-[6.23px] rounded-[9.96px] border border-[#eeedfd] justify-start items-center gap-[6.23px] flex'>
    //                     <div className="text-[#303138] text-[15px] font-medium font-['Urbanist'] leading-normal">
    //                       Invested
    //                     </div>
    //                     <div className='p-[6.23px] bg-[#eeedfd] rounded-md justify-center items-center gap-[12.45px] flex'>
    //                       <div className="text-indigo-600 text-[15px] font-semibold font-['Urbanist'] leading-normal">
    //                         $6,324.00
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className='p-[6.23px] rounded-[9.96px] border border-[#eeedfd] justify-start items-center gap-[6.23px] flex'>
    //                     <div className="text-[#303138] text-[15px] font-medium font-['Urbanist'] leading-normal">
    //                       Average investment:
    //                     </div>
    //                     <div className='p-[6.23px] bg-[#eeedfd] rounded-md justify-center items-center gap-[12.45px] flex'>
    //                       <div className="text-indigo-600 text-[15px] font-semibold font-['Urbanist'] leading-normal">
    //                         $421.60
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className='flex-col justify-start items-start gap-[18.68px] inline-flex'>
    //               <div className="self-stretch text-[#303138] text-[27px] font-bold font-['Urbanist'] leading-[52.89px]">
    //                 Account wallets
    //               </div>
    //               <div className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                 Used to sign in
    //               </div>
    //               <div className='flex-col justify-start items-start gap-[18px] flex'>
    //                 <div className="text-[#303138]/70 text-lg font-medium font-['Inter'] leading-[32.85px]">
    //                   0xa5e9138543b548ajduj5651766a46899
    //                 </div>
    //                 <div className="text-[#303138]/70 text-lg font-medium font-['Urbanist'] leading-[32.85px]">
    //                   0xa5e9138543b548ajduj5651766a46899
    //                 </div>
    //                 <div className="text-[#303138]/70 text-lg font-medium font-['Inter'] leading-[32.85px]">
    //                   0xa5e9138543b548ajduj5651766a46899
    //                 </div>
    //                 <div className="text-[#303138]/70 text-lg font-medium font-['Inter'] leading-[32.85px]">
    //                   0xa5e9138543b548ajduj5651766a46899
    //                 </div>
    //                 <div className="text-[#303138]/70 text-lg font-medium font-['Inter'] leading-[32.85px]">
    //                   0xa5e9138543b548ajduj5651766a46899
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className='self-stretch h-[494.95px] flex-col justify-start items-center gap-[30px] flex'>
    //             <div className='self-stretch h-12 flex-col justify-start items-start flex'>
    //               <div className='justify-center items-start gap-[39px] inline-flex'>
    //                 <div className='px-[15px] pt-[15px] pb-5 bg-[#f7f7ff] rounded-tl-[10px] rounded-tr-[10px] justify-center items-center gap-2.5 flex'>
    //                   <div className='justify-center items-center gap-2.5 flex'>
    //                     <div className="text-[#7870fc] text-lg font-semibold font-['Urbanist'] capitalize">
    //                       deals
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className='py-[15px] justify-center items-center gap-2.5 flex'>
    //                   <div className="text-[#505050] text-lg font-semibold font-['Urbanist'] capitalize">
    //                     Compliance
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className='w-[1296px] h-[0px] relative'>
    //                 <div className='w-[1296px] h-[0px] left-0 top-0 absolute border border-[#e1e1e1]'></div>
    //                 <div className='w-[75px] h-[0px] left-0 top-0 absolute border-2 border-[#7870fc]'></div>
    //               </div>
    //             </div>
    //             <div className='h-[416.95px] flex-col justify-start items-end gap-[30px] flex'>
    //               <div className='px-[11px] py-[3px] rounded-[20px] border border-[#303138]/20 justify-start items-center gap-20 inline-flex'>
    //                 <div className="text-[#afafaf] text-[13px] font-medium font-['Inter'] leading-7">
    //                   Search deals..
    //                 </div>
    //                 <div className='w-[18px] h-[18px] relative' />
    //               </div>
    //               <div className='self-stretch h-[352.95px] flex-col justify-start items-start gap-5 flex'>
    //                 <div className='w-[1146.93px] h-[11.50px] relative'>
    //                   <div className='h-[11px] left-0 top-0 absolute justify-start items-center gap-[5px] inline-flex'>
    //                     <div className="text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
    //                       Deal
    //                     </div>
    //                     <div className='w-2 h-[11px] relative' />
    //                   </div>
    //                   <div className='h-[11px] left-[284.96px] top-0 absolute justify-start items-center gap-[5px] inline-flex'>
    //                     <div className="text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
    //                       Allocation
    //                     </div>
    //                     <div className='w-2 h-[11px] relative' />
    //                   </div>
    //                   <div className='h-[11px] left-[786.74px] top-0 absolute justify-start items-center gap-[5px] inline-flex'>
    //                     <div className="text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
    //                       Contributed
    //                     </div>
    //                     <div className='w-2 h-[11px] relative' />
    //                   </div>
    //                   <div className='h-[11px] left-[952.33px] top-0 absolute justify-start items-center gap-[5px] inline-flex'>
    //                     <div className="text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
    //                       Refunded
    //                     </div>
    //                     <div className='w-2 h-[11px] relative' />
    //                   </div>
    //                   <div className="left-[430.55px] top-[0.50px] absolute text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
    //                     Tokens received
    //                   </div>
    //                   <div className="left-[588.15px] top-[0.50px] absolute text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
    //                     receiving EVM
    //                   </div>
    //                   <div className="left-[1115.93px] top-[0.50px] absolute text-[#afafaf] text-[15px] font-semibold font-['Urbanist'] capitalize">
    //                     OTC
    //                   </div>
    //                 </div>
    //                 <div className='self-stretch h-[321.45px] flex-col justify-start items-start gap-[25px] flex'>
    //                   <div className='w-[1234.93px] h-[0px] border border-[#e1e1e1]'></div>
    //                   <div className='w-[1230.93px] h-[55.36px] relative'>
    //                     <div className='h-[55.36px] left-0 top-0 absolute justify-start items-center gap-[15px] inline-flex'>
    //                       <div className='w-[55.36px] h-[55.36px] bg-[#d9d9d9] rounded-[10px]' />
    //                       <div className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         Project Universal
    //                       </div>
    //                     </div>
    //                     <div className="left-[284.96px] top-[21.18px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                       $497.00
    //                     </div>
    //                     <div className="left-[588.15px] top-[21.18px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                       0x8855...87a4
    //                     </div>
    //                     <div className='left-[786.74px] top-[21.18px] absolute'>
    //                       <span className="text-[#00b828] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         +$3.00
    //                       </span>
    //                       <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         {' '}
    //                         (3)
    //                       </span>
    //                     </div>
    //                     <div className='left-[952.33px] top-[21.18px] absolute'>
    //                       <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         -$2.00
    //                       </span>
    //                       <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         {' '}
    //                         (3)
    //                       </span>
    //                     </div>
    //                     <div className='left-[1115.93px] top-[21.18px] absolute'>
    //                       <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         -$1,004.00
    //                       </span>
    //                       <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         {' '}
    //                         (9)
    //                       </span>
    //                     </div>
    //                     <div className='w-[79px] h-[35px] left-[430.55px] top-[10.18px] absolute flex-col justify-start items-start gap-2.5 inline-flex'>
    //                       <div className="text-[#303138] text-lg font-extrabold font-['Urbanist'] leading-[32.85px]">
    //                         0 UNI
    //                       </div>
    //                       <div className="self-stretch text-[#afafaf] text-[17px] font-semibold font-['Urbanist'] leading-[32.85px]">
    //                         165.67 UNI
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className='w-[1230.93px] h-[55.36px] relative'>
    //                     <div className='h-[55.36px] left-0 top-0 absolute justify-start items-center gap-[15px] inline-flex'>
    //                       <div className='w-[55.36px] h-[55.36px] bg-[#d9d9d9] rounded-[10px]' />
    //                       <div className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         Project Universal
    //                       </div>
    //                     </div>
    //                     <div className="left-[284.96px] top-[21.18px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                       $497.00
    //                     </div>
    //                     <div className="left-[588.15px] top-[21.18px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                       0x8855...87a4
    //                     </div>
    //                     <div className='left-[786.74px] top-[21.18px] absolute'>
    //                       <span className="text-[#00b828] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         +$3.00
    //                       </span>
    //                       <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         {' '}
    //                         (3)
    //                       </span>
    //                     </div>
    //                     <div className='left-[952.33px] top-[21.18px] absolute'>
    //                       <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         -$2.00
    //                       </span>
    //                       <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         {' '}
    //                         (3)
    //                       </span>
    //                     </div>
    //                     <div className='left-[1115.93px] top-[21.18px] absolute'>
    //                       <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         -$1,004.00
    //                       </span>
    //                       <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         {' '}
    //                         (9)
    //                       </span>
    //                     </div>
    //                     <div className='w-[79px] h-[35px] left-[430.55px] top-[10.18px] absolute flex-col justify-start items-start gap-2.5 inline-flex'>
    //                       <div className="text-[#303138] text-lg font-extrabold font-['Urbanist'] leading-[32.85px]">
    //                         0 UNI
    //                       </div>
    //                       <div className="self-stretch text-[#afafaf] text-[17px] font-semibold font-['Urbanist'] leading-[32.85px]">
    //                         165.67 UNI
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className='w-[1230.93px] h-[55.36px] relative'>
    //                     <div className='h-[55.36px] left-0 top-0 absolute justify-start items-center gap-[15px] inline-flex'>
    //                       <div className='w-[55.36px] h-[55.36px] bg-[#d9d9d9] rounded-[10px]' />
    //                       <div className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         Project Universal
    //                       </div>
    //                     </div>
    //                     <div className="left-[284.96px] top-[21.18px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                       $497.00
    //                     </div>
    //                     <div className="left-[588.15px] top-[21.18px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                       0x8855...87a4
    //                     </div>
    //                     <div className='left-[786.74px] top-[21.18px] absolute'>
    //                       <span className="text-[#00b828] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         +$3.00
    //                       </span>
    //                       <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         {' '}
    //                         (3)
    //                       </span>
    //                     </div>
    //                     <div className='left-[952.33px] top-[21.18px] absolute'>
    //                       <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         -$2.00
    //                       </span>
    //                       <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         {' '}
    //                         (3)
    //                       </span>
    //                     </div>
    //                     <div className='left-[1115.93px] top-[21.18px] absolute'>
    //                       <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         -$1,004.00
    //                       </span>
    //                       <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         {' '}
    //                         (9)
    //                       </span>
    //                     </div>
    //                     <div className='w-[79px] h-[35px] left-[430.55px] top-[10.18px] absolute flex-col justify-start items-start gap-2.5 inline-flex'>
    //                       <div className="text-[#303138] text-lg font-extrabold font-['Urbanist'] leading-[32.85px]">
    //                         0 UNI
    //                       </div>
    //                       <div className="self-stretch text-[#afafaf] text-[17px] font-semibold font-['Urbanist'] leading-[32.85px]">
    //                         165.67 UNI
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className='w-[1230.93px] h-[55.36px] relative'>
    //                     <div className='h-[55.36px] left-0 top-0 absolute justify-start items-center gap-[15px] inline-flex'>
    //                       <div className='w-[55.36px] h-[55.36px] bg-[#d9d9d9] rounded-[10px]' />
    //                       <div className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         Project Universal
    //                       </div>
    //                     </div>
    //                     <div className="left-[284.96px] top-[21.18px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                       $497.00
    //                     </div>
    //                     <div className="left-[588.15px] top-[21.18px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                       0x8855...87a4
    //                     </div>
    //                     <div className='left-[786.74px] top-[21.18px] absolute'>
    //                       <span className="text-[#00b828] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         +$3.00
    //                       </span>
    //                       <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         {' '}
    //                         (3)
    //                       </span>
    //                     </div>
    //                     <div className='left-[952.33px] top-[21.18px] absolute'>
    //                       <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         -$2.00
    //                       </span>
    //                       <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         {' '}
    //                         (3)
    //                       </span>
    //                     </div>
    //                     <div className='left-[1115.93px] top-[21.18px] absolute'>
    //                       <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         -$1,004.00
    //                       </span>
    //                       <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
    //                         {' '}
    //                         (9)
    //                       </span>
    //                     </div>
    //                     <div className='w-[79px] h-[35px] left-[430.55px] top-[10.18px] absolute flex-col justify-start items-start gap-2.5 inline-flex'>
    //                       <div className="text-[#303138] text-lg font-extrabold font-['Urbanist'] leading-[32.85px]">
    //                         0 UNI
    //                       </div>
    //                       <div className="self-stretch text-[#afafaf] text-[17px] font-semibold font-['Urbanist'] leading-[32.85px]">
    //                         165.67 UNI
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Page

// first
// <div className='flex flex-col h-screen p-4 space-y-4 w-[100%]'>
//   {/* Sidebar and Green Dot */}
//   <div className='flex justify-between items-start'>
//     <input
//       type='text'
//       className='w-[279px] h-[34px] border border-gray-300 rounded-3xl  p-3 placeholder-gray-500'
//       placeholder='Enter text here'
//     />

//     <div className='flex items-center space-x-2'>
//       <div className='w-3 h-3 bg-green-500 rounded-full'></div>
//       <span className='text-m'>42</span>
//     </div>
//   </div>

//   {/* Profile Section */}
//   <div className='flex justify-between p-4 border rounded-lg shadow-md'>
//     <div className='w-1/3'>
//       <div className='flex items-center mb-4'>
//         <img
//           src='/public/icons/user.svg'
//           alt='Profile'
//           className='w-12 h-12 rounded-full mr-4'
//         />

//         <div>
//           <h2 className='text-xl font-semibold'>{initialProfile.name}</h2>
//           <p className='text-gray-600'>Account: {initialProfile.account}</p>
//           <p className='text-gray-600'>KYC: {initialProfile.kyc}</p>
//         </div>
//       </div>
//       <div className='space-y-2'>
//         {initialProfile.tags.map((tag, index) => (
//           <span
//             key={index}
//             className='inline-block px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full'
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//     </div>
//     <div className='w-2/3 text-right'>
//       <h2 className='text-4xl font-bold break-all'>{initialProfile.bigNumber}</h2>
//     </div>
//   </div>

//   {/* Buttons and Table */}
//   <div className='flex flex-col space-y-4'>
//     <div className='flex space-x-4'>
//       <button
//         className={`px-4 py-2 rounded-lg text-white ${selectedButton === 'button1' ? 'bg-blue-500' : 'bg-gray-400'}`}
//         onClick={() => setSelectedButton('button1')}
//       >
//         Button 1
//       </button>
//       <button
//         className={`px-4 py-2 rounded-lg text-white ${selectedButton === 'button2' ? 'bg-blue-500' : 'bg-gray-400'}`}
//         onClick={() => setSelectedButton('button2')}
//       >
//         Button 2
//       </button>
//     </div>
//     <table className='min-w-full bg-white border border-gray-200 rounded-lg shadow-md'>
//       <thead>
//         <tr className='border-b'>
//           <th className='px-4 py-2 text-left'>Column 1</th>
//         </tr>
//       </thead>
//       <tbody>
//         {tableData.map((data, index) => (
//           <tr key={index} className='border-b'>
//             <td className='px-4 py-2'>{data}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>

// second
