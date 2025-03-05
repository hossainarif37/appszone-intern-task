import { FC } from "react";
import hero from "../../../assets/hero/hero.png";
import bottomArrow from "../../../assets/hero/bottom_arrow.png";

const Hero: FC = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center md:items-start text-white bg-[#10051e] font-preahvihear px-5 md:px-0">
            {/* Left Section - Image & Visual Effects */}
            <div
                className="flex justify-center items-center size-[380px] rounded-full 
                    bg-[radial-gradient(circle,rgba(66,30,113,1)_26%,rgba(40,16,76,0)_65%)] 
                    transform md:-ml-24 md:mt-24 z-0"
            >
                {/* Inner glow effect with hero image centered */}
                <div
                    className="flex justify-center items-center size-[200px] md:size-[250px] rounded-full 
                        bg-[radial-gradient(circle,rgba(181,170,193,1)_10%,rgba(40,17,77,0)_65%)] z-0"
                >
                    {/* Hero image */}
                    <img
                        src={hero}
                        alt="Hero"
                        width={150}
                        height={150}
                        className="-translate-y-2"
                    />
                </div>
            </div>

            {/* Decorative bottom arrow, hidden on mobile */}
            <img
                src={bottomArrow}
                alt="Hero"
                className="absolute top-[88px] left-28 hidden md:block"
            />

            {/* Right Section */}
            <div className="md:mt-[105px] md:-ml-14">
                <h3 className="md:-ml-3">
                    Hello! I am <span className="text-primary">Ariful Islam</span>
                </h3>

                {/* Main heading and subtext */}
                <div className="mt-5 md:mt-[68px]">
                    <h5>A Designer who</h5>
                    <div>
                        <h1 className="text-5xl mt-2 leading-16 relative">
                            <span>Judges a book <br /> by its</span>
                            {/* Rotated border box */}
                            <div
                                className="absolute top-[68px] right-[72px] md:right-[87px] w-[172px] h-[50px] 
                                    rounded-[50%] border border-white transform -rotate-5"
                            />
                            <span className="text-primary mr-0.5"> cover</span><span>...</span>
                        </h1>

                        <p className="text-xs text-gray-300 mt-3">
                            Because if the cover does not impress you, what else can?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;