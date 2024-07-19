import { NavLink } from "react-router-dom";

interface TabProps {
  name: string;
}

const Tab:React.FC<TabProps> = ({ name }) => {
  return (
    <NavLink className={({isActive}) => `text-sm md:text-[17px] py-2 px-3 font-clash hover:cursor-pointer ${isActive ? "rounded-none font-semibold border-b-4 border-b-gray-800" : ""}`} to={`/dashboard/settings/${name.toLowerCase()}`}>{name}</NavLink>
  )
}

export default Tab