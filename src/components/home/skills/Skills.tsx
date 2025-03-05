import { FC } from "react";
import figma from "../../../assets/icons/figma.png";
import react from "../../../assets/icons/react.png";
import c from "../../../assets/icons/c.png";
import nodejs from "../../../assets/icons/nodejs.png";
import redux from "../../../assets/icons/redux.png";
import js from "../../../assets/icons/js.png";
import css from "../../../assets/icons/css.png";
import xd from "../../../assets/icons/xd.png";
import nextjs from "../../../assets/icons/nextjs.png";
import gatsby from "../../../assets/icons/gatsby.png";
import illustrator from "../../../assets/icons/illustrator.png";
import express from "../../../assets/icons/express.png";
import mongodb from "../../../assets/icons/mongodb.png";
import SkillIcon from "./SkillIcon";
import light from "../../../assets/logo/light.png"

const Skills: FC = () => {
    const icons = [
        { title: "Figma", icon: figma },
        { title: "React", icon: react },
        { title: "C", icon: c },
        { title: "Node.js", icon: nodejs },
        { title: "Redux", icon: redux },
        { title: "JavaScript", icon: js },
        { title: "CSS", icon: css },
        { title: "Adobe XD", icon: xd },
        { title: "Next.js", icon: nextjs },
        { title: "Gatsby", icon: gatsby },
        { title: "Adobe Illustrator", icon: illustrator },
        { title: "Express.js", icon: express },
        { title: "MongoDB", icon: mongodb },
    ];

    return (
        <section className="min-h-screen relative flex flex-col items-center pt-10">
            <div className="text-center space-y-2 font-preahvihear">
                <h3 className="text-xl">
                    I'm currently looking to join a{" "}
                    <span className="text-[#A362FF]">cross-functional</span>{" "}
                    team
                </h3>
                <h5 className="text-sm">that values improving people's lives through accessible design.</h5>
            </div>

            <div className="flex flex-col items-center mt-10 gap-4">
                {/* First Row */}
                <div className="flex gap-2">
                    {icons.slice(0, 7).map((item, i) => (
                        <SkillIcon
                            i={i}
                            key={i}
                            item={item}
                            className={`${item.title === "Figma" && "p-4" || item.title === "Redux" && "p-3" || item.title === "JavaScript" && "p-3" || "p-2"}`}
                        />
                    ))}
                </div>

                {/* Second Row */}
                <div className="flex gap-2">
                    {icons.slice(7).map((item, i) => (
                        <SkillIcon
                            i={i}
                            key={i}
                            item={item}
                            className={`${item.title === "Adobe Illustrator" && "p-3" || item.title === "Adobe XD" && "p-3" || "p-2"}`}
                        />
                    ))}
                </div>
            </div>

            <>
                <svg className="absolute top-[396px] md:top-[344px] left-1/2 transform -translate-x-[48px] -translate-y-1/2" width="100" height="200">
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "rgba(163, 98, 255, 0.5)", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "rgba(163, 98, 255, 0)", stopOpacity: 0 }} />
                    </linearGradient>
                    <path d="M19,0 Q34,67 51,268" stroke="url(#grad1)" strokeWidth="0.5" fill="transparent"></path>
                </svg>

                <svg className="absolute top-[396px] md:top-[344px] left-1/2 transform -translate-x-[40px] -translate-y-1/2" width="100" height="200">
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "rgba(163, 98, 255, 0.5)", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "rgba(163, 98, 255, 0)", stopOpacity: 0 }} />
                    </linearGradient>
                    <path d="M70,0 Q34,67 40,268" stroke="url(#grad2)" strokeWidth="0.5" fill="transparent"></path>
                </svg>

                <svg className="-ml-47" width="119" height="200" viewBox="0 0 119 302" fill="none">
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "rgba(163, 98, 255, 0.5)", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "rgba(163, 98, 255, 0)", stopOpacity: 0 }} />
                    </linearGradient>
                    <path d="M0.499756 1C44.1664 48.5 124.2 164.5 140 301.5" stroke="url(#grad3)"></path>
                </svg>

                <svg className="absolute top-[396px] md:top-[344px] left-1/2 transform -translate-x-[82px] -translate-y-1/2" width="100" height="200">
                    <linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "rgba(163, 98, 255, 0.5)", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "rgba(163, 98, 255, 0)", stopOpacity: 0 }} />
                    </linearGradient>
                    <path d="M0,0 Q62,91 88,268" stroke="url(#grad4)" strokeWidth="0.5" fill="transparent"></path>
                </svg>

                <svg className="absolute top-[396px] md:top-[344px] left-1/2 transform -translate-x-[19px] -translate-y-1/2" width="100" height="200">
                    <linearGradient id="grad5" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "rgba(163, 98, 255, 0.5)", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "rgba(163, 98, 255, 0)", stopOpacity: 0 }} />
                    </linearGradient>
                    <path d="M100,0 Q37,63 17,223" stroke="url(#grad5)" strokeWidth="0.5" fill="transparent"></path>
                </svg>

                <svg className="absolute top-[396px] md:top-[344px] left-1/2 transform translate-x-[35px] -translate-y-1/2" width="100" height="200">
                    <linearGradient id="grad6" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "rgba(163, 98, 255, 0.4)", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "rgba(163, 98, 255, 0)", stopOpacity: 0 }} />
                    </linearGradient>
                    <path d="M98,0 Q0,67 0,273" stroke="url(#grad6)" strokeWidth="0.5" fill="transparent"></path>
                </svg>
            </>

            <div className="flex justify-center items-center">
                <div className="relative z-20 bg-gradient-to-b from-[#280E62] to-[#65339A] size-[180px] flex justify-center items-center rounded-full">
                    <img src={light} alt="" />

                    <div
                        className="w-[236px] md:w-[295px] h-[164px] absolute top-8 bg-transparent border-b border-[#65339A] rounded-[50%]"
                    />
                    <div
                        className="w-[220px] md:w-[265px] h-[185px] absolute top-8 bg-transparent border-b border-[#65339A] rounded-[70%]"
                    />
                </div>

                <div
                    className="max-w-[881px] w-full aspect-[881/269] absolute bottom-48 md:bottom-36 bg-transparent inset-x-0 mx-auto px-5 md:px-0"
                    style={{
                        borderRadius: "50%",
                        border: "2px solid transparent",
                        background:
                            "linear-gradient(#11071F, #11071F) padding-box, linear-gradient(to bottom, rgba(118, 60, 172, 0) 0%, #763CAC 99.9%) border-box",
                    }}
                >
                    <div
                        className="max-w-[764px] px-5 md:px-0 w-full aspect-[764/269] mx-auto bg-transparent"
                        style={{
                            borderRadius: "50%",
                            border: "2px solid transparent",
                            background:
                                "linear-gradient(#11071F, #11071F) padding-box, linear-gradient(to bottom, rgba(118, 60, 172, 0) 0%, #763CAC 99.9%) border-box",
                        }}
                    >
                        <div
                            className="max-w-[695px] w-full aspect-[695/269] mx-auto bg-transparent"
                            style={{
                                borderRadius: "50%",
                                border: "2px solid transparent",
                                background:
                                    "linear-gradient(#11071F, #11071F) padding-box, linear-gradient(to bottom, rgba(118, 60, 172, 0) 0%, #763CAC 99.9%) border-box",
                            }}
                        />

                        <div
                            className="absolute top-10 inset-x-0 mx-auto max-w-[400px] w-[50%] aspect-[400/193] rounded-[50%]"
                            style={{
                                background: "linear-gradient(360deg, #572A8A -27%, rgba(50, 15, 133, 0) 159%)",
                                transformOrigin: "center",
                                filter: "blur(45px)",
                            }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;