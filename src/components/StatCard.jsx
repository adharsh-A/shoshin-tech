import { motion } from "framer-motion";
const StatCard = ({ bgColor, title, value, subtext }) => (
  <motion.div
    initial={{ scale: 0.4, y: 200, opacity: 0 }}
    animate={{ scale: 1, y: 0, opacity: 1 }}
    transition={{ duration: 0.5,delay: 1.5 }}
    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    className={`card ${bgColor} w-full h-32 rounded-md p-2`}>
      <div className="flex flex-col justify-between h-full">
        <h5 className="font-semibold  tracking-wide">{title}</h5>
        <h3 className="font-semibold text-2xl">{value}</h3>
        <p className={`text-sm ${bgColor.includes('orange') ? 'text-orange-800' : bgColor.includes('blue') ? 'text-blue-800' : 'text-fuchsia-800'} font-bold tracking-wide`}>
          {subtext}
        </p>
      </div>
    </motion.div>
  );
  
  export default StatCard;