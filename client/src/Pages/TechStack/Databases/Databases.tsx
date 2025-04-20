import { SiMongodb } from "react-icons/si";
import { ImDatabase } from "react-icons/im";
import { BiLogoPostgresql } from "react-icons/bi";
import TechRow from "../TechRow/TechRow";

const datbasesTech = [
  { name: "SQL", icon: <ImDatabase size={20} /> },
  { name: "MongoDB", icon: <SiMongodb size={20} /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql size={20} /> },
];

const Databases = () => {
  return (
    <div>
      <h2 className="pb-2">Databases</h2>
      <div className="flex flex-wrap items-center justify-start gap-2 rounded-sm bg-gray-800 p-4">
        {datbasesTech.map((tech) => (
          <TechRow techName={tech.name}>{tech.icon}</TechRow>
        ))}
      </div>
    </div>
  );
};

export default Databases;
