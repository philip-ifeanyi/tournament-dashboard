import { NavLink } from "react-router-dom";
import Image, { StaticImageData } from 'next/image';

interface TabProps {
  name: string;
  path: string;
  icon: string | StaticImageData
}

const Tab:React.FC<TabProps> = ({ name, path, icon }) => {
  return (
    <NavLink to={path} className={({isActive}) => `flex items-center gap-2 hover:bg-gray-700 px-6 py-4 ${isActive ? "bg-gray-700" : ""}`}>
      <Image src={icon} alt='image'/>
       <p>{name}</p>
    </NavLink>
  )
}

export default Tab