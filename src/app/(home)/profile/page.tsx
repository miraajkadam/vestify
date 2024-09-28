'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../../public/icons/user.svg'

// Define your types if necessary (e.g., for the profile info, etc.)
// interface ProfileInfo {
//   name: string
//   account: string
//   kyc: string
//   tags: string[]
//   bigNumber: string
// }

// const initialProfile: ProfileInfo = {
//   name: 'John Doe',
//   account: '123456789',
//   kyc: 'Verified',
//   tags: ['Tag1', 'Tag2', 'Tag3'],
//   bigNumber: '9876543210',
// }

// Define a TypeScript interface for your data structure
interface ProjectData {
  id: number
  name: string
  // Add other fields based on your API response
}

interface ErrorResponse {
  message: string
}

const Page: React.FC = () => {
  const [data, setData] = useState<ProjectData[] | null>(null) // Adjust type according to your data
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const dealsData = [
    {
      deal: 'Deal 1',
      allocation: '1000',
      contributed: '800',
      refunded: '200',
      tokensReceived: '100',
      receivingEVM: 'EVM1',
      otc: 'Yes',
    },
    {
      deal: 'Deal 2',
      allocation: '2000',
      contributed: '1500',
      refunded: '500',
      tokensReceived: '200',
      receivingEVM: 'EVM2',
      otc: 'No',
    },
    // Add more deals as needed
  ]

  useEffect(() => {
    // Define an async function inside the effect
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/project/getAll', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (response.ok) {
          const result: ProjectData[] = await response.json()
          setData(result) // Set the fetched data
        } else {
          const errorData: ErrorResponse = await response.json()
          setError(errorData.message) // Set the error message
        }
      } catch (error) {
        setError('An error occurred. Please try again later.') // Set generic error message
      } finally {
        setLoading(false) // Set loading to false when done
      }
    }

    // Call the async function
    fetchData()
  }, []) // Empty dependency array means this effect runs once on mount
  // const [selectedButton, setSelectedButton] = useState<'button1' | 'button2'>('button1')

  // Mock data for table based on button
  // const tableData =
  //   selectedButton === 'button1'
  //     ? ['Data 1A', 'Data 1B', 'Data 1C']
  //     : ['Data 2A', 'Data 2B', 'Data 2C']

  console.log(data)

  return (
    <div className='h-[100vh] bg-white justify-start items-start inline-flex w-[100%] overflow-y-scroll '>
      <div className='p-[32px] w-full pb-8 bg-white flex-col justify-start  inline-flex'>
        <div className='  '>
          <div>
            <div className='h-[829.29px] w-full  flex-col justify-start items-start gap-[30px] flex'>
              {/* Navbar */}
              <div className='self-stretch justify-between items-center inline-flex'>
                <div className='px-[11px] py-[3px] rounded-[20px] border border-[#303138]/20 justify-start items-center gap-3 flex'>
                  <div className="text-[#afafaf] text-[13px] font-medium font-['Inter'] leading-7">
                    Search Investors, allocations, deals..
                  </div>
                  <div className='w-[18px] h-[18px] relative' />
                </div>
                <div className='justify-start items-center gap-2.5 flex'>
                  <div className='w-[15.36px] h-[15.36px] bg-[#3ede8b] rounded-full shadow' />
                  <div className="text-[#303138] text-sm font-medium font-['Inter'] leading-7 ml-2">
                    0x8855.,87a4
                  </div>
                </div>
              </div>

              {/* Profile Section */}
              <div className='self-stretch w-full justify-between items-start inline-flex'>
                <div className=' h-[240.34px] flex-col justify-start items-start gap-[24.90px] inline-flex'>
                  <div className='w-[419.26px] h-[131.18px] justify-start items-center gap-[13.70px] inline-flex'>
                    <div className='w-[131.18px] h-[131.18px]  '>
                      <div className='w-[131.18px] h-[131.18px] bg-[#f3f3f3] rounded-xl flex-col justify-center align-center items-center  inline-flex'>
                        <Image
                          src={logo}
                          alt='Profile Image'
                          width='76'
                          height='92'
                          className=' rounded-xl'
                        />
                      </div>
                      {/* </div> */}
                      {/* <div className='w-[76.84px] h-[92.13px] left-[27.17px] top-[19.52px] absolute' /> */}
                    </div>
                    <div className='w-[250.26px]   h-[131.18px] flex-col justify-start items-start gap-[18.68px] inline-flex'>
                      <text className=" h-[19px] mb-[6.23px] text-[#303138] text-[27px] font-bold font-['Urbanist'] leading-[52.89px]">
                        naka@bestify.com
                      </text>
                      <div className='flex-col justify-start items-start gap-[6.23px] flex'>
                        <div className=' h-[24.90px] p-[6.23px] bg-[#039be5]/10 rounded-[17.43px] justify-start items-center gap-2.5 inline-flex'>
                          <text className="text-[#5865f2] text-[15px] font-bold font-['Urbanist'] leading-[34.86px]">
                            iNakazumi
                          </text>
                        </div>
                        <div className=' h-[24.90px] p-[6.23px] bg-[#5865f2]/10 rounded-[17.43px] justify-start items-center gap-2.5 inline-flex'>
                          <text className="text-[#5865f2] text-[15px] font-bold font-['Urbanist'] leading-[34.86px]">
                            Nka9942
                          </text>
                        </div>
                        <div className='justify-start items-center gap-[6.23px] inline-flex'>
                          <div className=' h-[25.79px] p-[6.23px] bg-[#00b828]/5 rounded-[17.43px] justify-start items-center gap-[11.21px] flex'>
                            <div className=' flex-col justify-start items-center inline-flex' />
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

                  {/* Tabs */}
                  <div className='w-full h-[84.25px] flex-col justify-start items-start gap-[12.45px] flex'>
                    <div className='w-[211.70px] h-[35.90px] justify-start items-center gap-[12.45px] inline-flex'>
                      <div className=' h-[35.90px] p-[6.23px] rounded-[9.96px] border border-[#eeedfd] justify-start items-center gap-[6.23px] flex'>
                        <div className="text-[#303138] text-[15px] font-medium font-['Urbanist'] leading-normal">
                          Deals
                        </div>
                        <div className='m-[4px] p-[3px]  bg-[#eeedfd] rounded-md justify-center items-center gap-[12.45px] flex'>
                          <div className="text-indigo-600 text-[15px] font-semibold font-['Urbanist'] leading-normal">
                            15
                          </div>
                        </div>
                      </div>
                      <div className=' h-[35.90px] p-[6.23px] rounded-[9.96px] border border-[#eeedfd] justify-start items-center gap-[6.23px] flex'>
                        <div className="text-[#303138] text-[15px] font-medium font-['Urbanist'] leading-normal">
                          OTC trades
                        </div>
                        <div className='m-[4px] p-[3px] bg-[#eeedfd] rounded-md justify-center items-center gap-[12.45px] flex'>
                          <div className="text-indigo-600 text-[15px] font-semibold font-['Urbanist'] leading-normal">
                            5
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=' h-[35.90px] justify-start items-center gap-[12.45px] inline-flex'>
                      <div className=' h-[35.90px] p-[6.23px] rounded-[9.96px] border border-[#eeedfd] justify-start items-center gap-[6.23px] flex'>
                        <div className="text-[#303138] text-[15px] font-medium font-['Urbanist'] leading-normal">
                          Invested
                        </div>
                        <div className='m-[4px] p-[3px] bg-[#eeedfd] rounded-md justify-center items-center gap-[12.45px] flex'>
                          <div className="text-indigo-600 text-[15px] font-semibold font-['Urbanist'] leading-normal">
                            $6,324.00
                          </div>
                        </div>
                      </div>
                      <div className=' h-[35.90px] p-[6.23px] rounded-[9.96px] border border-[#eeedfd] justify-start items-center gap-[6.23px] flex'>
                        <div className="text-[#303138] text-[15px] font-medium font-['Urbanist'] leading-normal">
                          Average investment:
                        </div>
                        <div className='m-[4px] p-[3px] bg-[#eeedfd] rounded-md justify-center items-center gap-[12.45px] flex'>
                          <div className="text-indigo-600 text-[15px] font-semibold font-['Urbanist'] leading-normal">
                            $421.60
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Wallets */}
                <div className=' h-[206.35px] flex-col justify-end  items-start gap-[18.68px] inline-flex'>
                  <div className=" h-[19px] text-[#303138] text-[27px] font-bold font-['Urbanist'] leading-[52.89px]">
                    Account wallets
                  </div>
                  <div className=" h-[13px] text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                    Used to sign in
                  </div>
                  <div className=' h-[137px] w-[300.58px] flex-col justify-start align-end items-end  flex'>
                    <div className="  text-[#303138]/70 text-lg font-medium font-['Inter'] leading-[32.85px]">
                      0xa5e9138543b548ajduj5651766a46899 0xa5e9138543b548ajduj5651766a46899
                      0xa5e9138543b548ajduj5651766a46899 0xa5e9138543b548ajduj5651766a46899
                      0xa5e9138543b548ajduj5651766a46899
                    </div>
                  </div>
                </div>
              </div>

              {/* Deals */}
              <div className='w-[100%] h-[494.95px] flex-col justify-start items-center gap-[30px] flex'>
                <div className='self-stretch h-12 flex-col justify-start items-start flex'>
                  <div className='justify-center items-start gap-[39px] inline-flex'>
                    <div className=' p-[10px] bg-[#f7f7ff] rounded-tl-[10px] rounded-tr-[10px] justify-center items-center gap-2.5 flex'>
                      <div className='justify-center items-center  flex'>
                        <div className="text-[#7870fc] text-lg font-semibold font-['Urbanist'] capitalize">
                          deals
                        </div>
                      </div>
                    </div>
                    <div className='p-[10px] justify-center items-center flex'>
                      <div className="text-[#505050] text-lg font-semibold font-['Urbanist'] capitalize">
                        Compliance
                      </div>
                    </div>
                  </div>
                  <div className='w-full h-[0px] relative'>
                    <div className='w-full h-[0px] left-0 top-0 absolute border border-[#e1e1e1]'></div>
                    <div className='w-[75px] h-[0px] left-0 top-0 absolute border-2 border-[#7870fc]'></div>
                  </div>
                </div>

                <div className='w-full px-[20px]  flex-col justify-start items-end gap-[30px] flex'>
                  <div className='px-[11px] py-[3px] rounded-[20px] border border-[#303138]/20 justify-start items-center gap-20 inline-flex'>
                    <div className="text-[#afafaf] text-[13px] font-medium font-['Inter'] leading-7">
                      Search deals..
                    </div>
                    <div className='w-[18px] h-[18px] relative' />
                  </div>

                  <div className='w-full '>
                    <div className='w-full h-auto relative grid grid-cols-8 items-center text-[#afafaf] text-[15px] font-semibold gap-[10px]'>
                      <div className='col-span-2'>Deal</div>
                      <div>Allocation</div>
                      <div>Tokens received</div>
                      <div>Receiving EVM</div>

                      <div>Contributed</div>
                      <div>Refunded</div>
                      <div>OTC</div>

                      {dealsData.map((item, index) => (
                        <React.Fragment key={index}>
                          <div className='h-[55.36px] col-span-2 flex justify-start items-center'>
                            <div className='w-[55.36px] h-[55.36px] bg-[#d9d9d9] rounded-[10px]' />
                            <div className=" ml-4 text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                              Project Universal
                            </div>
                          </div>
                          <div className=" text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            $497.00
                          </div>
                          <div className=''>
                            <div className="text-[#303138] text-lg font-extrabold font-['Urbanist'] leading-[32.85px]">
                              0 UNI
                            </div>
                            {/* <div className="self-stretch text-[#afafaf] text-[17px] font-semibold font-['Urbanist'] leading-[32.85px]">
                              165.67 UNI
                            </div> */}
                          </div>
                          <div className=" text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            0x8855...87a4
                          </div>
                          <div className=''>
                            <span className="text-[#00b828] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                              +$3.00
                            </span>
                            <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                              {' '}
                              (3)
                            </span>
                          </div>
                          <div className=''>
                            <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                              -$2.00
                            </span>
                            <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                              {' '}
                              (3)
                            </span>
                          </div>
                          <div className=''>
                            <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                              -$1,004.00
                            </span>
                            <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                              {' '}
                              (9)
                            </span>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    {/*
                    <div className='self-stretch h-[321.45px] flex-col justify-start items-start gap-[25px] flex'>
                      <div className='w-[1234.93px] h-[0px] border border-[#e1e1e1]'></div>
                      <div className='w-[1230.93px] h-[55.36px] relative'>
                        <div className='h-[55.36px]  absolute justify-start items-center gap-[15px] inline-flex'>
                          <div className='w-[55.36px] h-[55.36px] bg-[#d9d9d9] rounded-[10px]' />
                          <div className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            Project Universal
                          </div>
                        </div>
                        <div className="left-[284.96px] top-[16.18px] absolute text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
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

                      <div className='w-[100%] h-[55.36px] relative flex items-center justify-between p-1'>
                        <div className='h-[55.36px]  flex  '>
                          <div className='w-[55.36px] h-[55.36px] bg-[#d9d9d9] rounded-[10px]' />
                          <div className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            Project Universal
                          </div>
                        </div>
                        <div className=" text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                          $497.00
                        </div>
                        <div className="  text-[#505050] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                          0x8855...87a4
                        </div>
                        <div className=''>
                          <span className="text-[#00b828] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            +$3.00
                          </span>
                          <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            {' '}
                            (3)
                          </span>
                        </div>
                        <div className=' '>
                          <span className="text-[#ff0004] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            -$2.00
                          </span>
                          <span className="text-[#303138] text-lg font-bold font-['Urbanist'] leading-[32.85px]">
                            {' '}
                            (3)
                          </span>
                        </div>
                        <div className=' '>
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
                        </div> */}
                    {/* </div> */}
                    {/* </div> */}
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

export default Page
