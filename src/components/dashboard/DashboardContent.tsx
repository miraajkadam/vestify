import { Search } from "./Search";
import { Filters } from "./Filters";
import { CapitalCard } from "./CapitalCard";

const capitals = [
  { name: "Spicy Capital", description: "Spicy Capital is A Dynamic And Visionary Venture...", price: "$50", interval: "Monthly" },
  { name: "DCI Capital", description: "DCI Capital offers innovative financial solutions...", price: "Free", interval: "" },
  { name: "Pivot Capital", description: "Pivot Capital specializes in strategic investments...", price: "$1,000k", interval: "Yearly" },
  { name: "Zk Link", description: "Zk Link provides cutting-edge blockchain solutions...", price: "$4.0k", interval: "Monthly" },
];

export function DashboardContent() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Capitals</h1>
        <div className="flex space-x-4">
          <Search />
          <Filters />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {capitals.map((capital, index) => (
          <CapitalCard key={index} name={capital.name} description={capital.description} price={capital.price} interval={capital.interval} />
        ))}
      </div>
    </div>
  );
}
