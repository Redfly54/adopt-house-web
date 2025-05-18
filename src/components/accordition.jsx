import React, { useState } from "react";

const Accordition = ({
    title,
    description,
}) => {
    const [accorditionOpen, setAccortditionOpen] = useState(false);

    return (
        <div className="py-2 bg-(--white)">

            <button onClick={() => setAccortditionOpen(!accorditionOpen)} className="flex justify-between w-full">
                <span>{title}</span>
                {accorditionOpen ? <span>-</span> : <span>+</span>}

            </button>

            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-(--black) text-sm ${accorditionOpen ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`
                }`}>
                <div className="overflow-hidden">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default Accordition;