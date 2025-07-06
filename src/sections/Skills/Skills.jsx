import React from "react";
import { Frameworks } from "../../components/Frameworks";

const Skills = () => {
  return (
    <section className="c-space mt-20 md:mt-30">
      <h2 className="text-heading text-center sm:text-start ">Skills</h2>

      <div className=" h-full grid-5 mt-10 relative">
        <div className="">
          <Frameworks />
        </div>

      </div>
    </section>
  );
};

export default Skills;
