import WaveProgress from "./WaveProgress";

const MetricCard = ({ title, value, subtexts, chartData }) => (
    <div className="card border-2 border border-gray-800/20 shadow-md w-full rounded-md p-2">
      <div className="flex flex-row gap-2">
        <div className="w-1/2 flex flex-col justify-between px-4">
          <h5>{title}</h5>
          <h2>{value}</h2>
          <div className="flex flex-col gap-0">
            {subtexts.map((text, index) => (
              <p key={index} className="text-xs opacity-60">{text}</p>
            ))}
          </div>
        </div>
        <div className="w-1/2 items-center justify-center flex ">
          <WaveProgress
            data={chartData}
            percentageChange={2}
            timePeriod="Past month"
          />
        </div>
      </div>
    </div>
);
export default MetricCard;