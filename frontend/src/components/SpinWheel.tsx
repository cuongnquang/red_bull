import { useState } from 'react';

export default function SpinWheel() {
    const [rotation, setRotation] = useState(0);
    const [spinning, setSpinning] = useState(false);
    const rewards = [
        "/images/gift1.png",
        "/images/gift2.png",
        "/images/gift3.png",
        "/images/gift4.png",
    ];

    const spin = () => {
        if (spinning) return;

        setSpinning(true);

        const segments = rewards.length;
        const prizeIndex = Math.floor(Math.random() * segments);
        const angle = 360 / segments;

        const newRotation = rotation + 360 * 6 + (360 - prizeIndex * angle);

        setRotation(newRotation);

        setTimeout(() => {
        setSpinning(false);
        }, 4000);
    };
    return (
        <>
        <div className="flex flex-col items-center">

      <div className="relative w-[320px] h-[320px]">

        {/* Wheel */}
        <div
          className="absolute w-full h-full rounded-full overflow-hidden transition-transform duration-[4s] ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {rewards.map((img, i) => (
            <div
              key={i}
              className="absolute w-1/2 h-1/2 origin-bottom-right flex items-center justify-center"
              style={{
                transform: `rotate(${i * 90}deg) skewY(-45deg)`
              }}
            >
              <img
                src={img}
                className="w-[60px] transform skewY(45deg) rotate(-45deg)"
              />
            </div>
          ))}
        </div>

        {/* Pointer */}
        <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 
        w-0 h-0 border-l-[15px] border-l-transparent 
        border-r-[15px] border-r-transparent 
        border-b-[30px] border-b-red-600"></div>

      </div>

      <button
        onClick={spin}
        className="mt-6 bg-red-500 text-white px-6 py-2 rounded"
      >
        Spin
      </button>

    </div>
        </>
    )

}