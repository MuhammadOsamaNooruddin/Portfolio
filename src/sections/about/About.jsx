import { useRef } from "react";
import Card from "../../components/Card";
import { Globe } from "../../components/globe";
import { hover } from "motion";


const About = () => {
    const grid2Container = useRef();
  return (
    <section className="c-space mt-20 md:mt-30">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            
            {/* Card 1 */}
            <div className="flex items-end grid-default-color grid-1">
                <img src="assets/coding.jpg" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inst-y-10 lg:scale-[2.5] object-cover " />
                <div className="z-10">
                    <p className="headtext">Hi, I'm Muhammad Osama Noor Uddin</p>
                    <p className="subtext">Frontend Developer with 3+ years of experience creating responsive, user-focused web applications using modern frameworks and design principles.</p>
                </div>
                <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
            </div>
            {/* Card 1 */}

            {/* Card 2 */}
            <div className="grid-default-color grid-2">
                <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                    <p className="flex flex-ends text-5xl text-gray-500">CODE IS CRAFT</p>
                    <Card text="SOLID" style={{ rotate: '75deg', top: '30%', right:"50%" }} containerRef={grid2Container} />
                    <Card text="Design Principles" style={{ rotate: '-30deg', top: '65%', left:"35%" }} containerRef={grid2Container} />
                    <Card text="Component Design Principles" style={{ rotate: '90deg', bottom: '30%', left:"74%" }} containerRef={grid2Container} />
                    <Card text="Design Patterns" style={{ rotate: '-65deg', top: '65%', left:"0%" }} containerRef={grid2Container} />
                    <Card text="Performance Principles" style={{ rotate: '40deg', top: '10%', left:"40%" }} containerRef={grid2Container} />
                    <Card image={'assets/js-logo.png'} style={{ rotate: '30deg', top: '30%', left:"70%" }} containerRef={grid2Container} />
                    <Card image={'assets/react-logo.png'} style={{ rotate: '-30deg', top: '10%', left:"10%" }} containerRef={grid2Container} />
                    <Card image={'assets/html-logo.png'} style={{ rotate: '-40deg', top: '70%', left:"20%" }} containerRef={grid2Container} />
                </div>
            </div>
            {/* Card 2 */}

            {/* Card 3 */}
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Location</p>
                    <p className="subtext">I'm based in Dublin, Ireland and open to work.</p>
                    <figure className="absolute left-[30%] top-[0%]">
                        <Globe />
                    </figure>
                </div>
            </div>
            {/* Card 3 */}

            {/* Card 4 */}
            {/* <div className="grid-special-color grid-4"></div> */}
            {/* Card 4 */}
            
            {/* Card 5 */}
            {/* <div className="grid-default-color grid-4"></div> */}
            {/* Card 5 */}
        </div>
    </section>
  );
}

export default About;