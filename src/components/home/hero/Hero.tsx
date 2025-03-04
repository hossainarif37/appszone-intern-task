import { FC } from "react";
import hero from "../../../assets/hero/hero.png";
import bottomArrow from "../../../assets/hero/bottom_arrow.png";

const Hero: FC = () => {
    return (
        <section className="relative flex text-white bg-[#10051e] ">
            {/* Left Section - Image & Effects */}
            {/* Glow Effect */}
            <div
                className="flex justify-center items-center w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(66,30,113,1)_26%,rgba(40,16,76,0)_65%)] transform -ml-24 mt-24 z-0"
            >

                <div
                    className="flex justify-center items-center w-[250px] h-[250px] rounded-full 
                       bg-[radial-gradient(circle,rgba(181,170,193,1)_10%,rgba(40,17,77,0)_65%)] z-0"
                >
                    <img
                        src={hero}
                        alt="Hero"
                        width={150}
                        height={150}
                        className="-translate-y-2"
                    />
                </div>
            </div>

            <img
                src={bottomArrow}
                alt="Hero"
                className="absolute top-[88px] left-28"
            />

            {/* Right Section - Content */}
            <div className="mt-[105px] -ml-14">
                <h3 className="text-xl -ml-3">
                    Hello! I am <span className="text-[#7127BA] font-semibold">Ariful Islam</span>
                </h3>

                <div className="mt-[68px]">
                    <h3 className="text-xl">A Designer who</h3>
                    <div>
                        <h1 className="text-5xl mt-2 relative">
                            Judges a book <br /> by its <div className="absolute top-[50px] right-[42px] w-[148px] h-[50px] rounded-[50%] border border-white transform -rotate-6" /> <span className="text-[#7127BA] mr-0.5">cover</span><span>...</span>

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
