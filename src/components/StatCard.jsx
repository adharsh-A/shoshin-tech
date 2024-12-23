const StatCard = ({ bgColor, title, value, subtext }) => (
    <div className={`card ${bgColor} w-full h-32 rounded-md p-2`}>
      <div className="flex flex-col justify-between h-full">
        <h5 className="font-semibold  tracking-wide">{title}</h5>
        <h3 className="font-semibold text-2xl">{value}</h3>
        <p className={`text-sm ${bgColor.includes('orange') ? 'text-orange-800' : bgColor.includes('blue') ? 'text-blue-800' : 'text-fuchsia-800'} font-bold tracking-wide`}>
          {subtext}
        </p>
      </div>
    </div>
  );
  
  export default StatCard;