import React, { useEffect, useState } from "react";
import { getSkills } from "../services/api";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills()
      .then((res) => setSkills(res.data))
      .catch((err) => console.error("Error fetching skills:", err));
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((s) => (
          <span
            key={s.id}
            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full shadow hover:bg-blue-200 transition duration-300"
          >
            {s.name} ({s.level})
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
