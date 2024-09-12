// components/Dashboard.tsx
const Dashboard: React.FC = () => {
  return (
    <div className='flex-1 p-6 bg-gray-50'>
      <h1 className='text-3xl font-bold mb-8 '>Web3 Project Dashboard</h1>

      {/* Project Overview Section */}
      <section className='bg-white p-6 rounded-lg shadow-md mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Project Overview</h2>
        <p className='mb-4'>
          Our Web3 project aims to revolutionize the way digital assets are managed and traded. By
          leveraging blockchain technology, we provide a decentralized platform for seamless asset
          transfers and secure transactions.
        </p>
        <div>
          <h3 className='text-lg font-medium mb-2'>Key Features:</h3>
          <ul className='list-disc list-inside ml-4'>
            <li>Decentralized Asset Management</li>
            <li>Smart Contract Integration</li>
            <li>Real-time Transaction Monitoring</li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className='bg-white p-6 rounded-lg shadow-md mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Team Members</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-gray-100 p-4 rounded-lg shadow-sm'>
            <h3 className='text-lg font-medium mb-2'>Alice Johnson</h3>
            <p className='text-sm text-gray-600'>Lead Developer</p>
            <p className='mt-2'>
              Alice is an expert in blockchain technology and leads the development of our smart
              contracts and platform infrastructure.
            </p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg shadow-sm'>
            <h3 className='text-lg font-medium mb-2'>Bob Smith</h3>
            <p className='text-sm text-gray-600'>Project Manager</p>
            <p className='mt-2'>
              Bob manages the project timelines and ensures that all team members are aligned with
              the project goals.
            </p>
          </div>
        </div>
      </section>

      {/* Funding Management Section */}
      <section className='bg-white p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold mb-4'>Funding Management</h2>
        <div className='bg-gray-100 p-4 rounded-lg shadow-sm mb-4'>
          <h3 className='text-lg font-medium mb-2'>Current Funding Status</h3>
          <p className='text-xl font-bold'>$1,200,000</p>
          <p className='text-sm text-gray-600'>
            Total funds raised so far. We are targeting $2,000,000 to complete the next phase of
            development.
          </p>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg shadow-sm'>
          <h3 className='text-lg font-medium mb-2'>Funding Breakdown</h3>
          <ul className='list-disc list-inside ml-4'>
            <li>Initial Seed Round: $500,000</li>
            <li>Series A Funding: $700,000</li>
            <li>Grants and Contributions: $0</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
