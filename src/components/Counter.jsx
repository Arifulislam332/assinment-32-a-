import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecease = (value) => {
    count - value < 0 ? null : setCount(count - value);
  };

  const handleIncrease = (value) => {
    count + value > 100 ? null : setCount(count + value);
  };

  return (
    <div>
      <p className="text-2xl font-bold ">
        Count: <span>{count}</span>
      </p>
      <div className="flex items-center gap-5 mt-5">
        <button
          onClick={() => handleDecease(10)}
          className="bg-red-400 text-white text-xl font-semibold py-2.5 px-5 rounded-full active:bg-black/50 transition duration-300 ease-in-out"
        >
          Decrease/10
        </button>
        <button
          onClick={() => handleDecease(1)}
          className="bg-red-400 text-white text-xl font-semibold py-2.5 px-5 rounded-full active:bg-black/50 transition duration-300 ease-in-out"
        >
          Decrease/1
        </button>
        <button
          onClick={() => handleIncrease(1)}
          className="bg-red-400 text-white text-xl font-semibold py-2.5 px-5 rounded-full active:bg-black/50 transition duration-300 ease-in-out"
        >
          Increase/1
        </button>
        <button
          onClick={() => handleIncrease(10)}
          className="bg-red-400 text-white text-xl font-semibold py-2.5 px-5 rounded-full active:bg-black/50 transition duration-300 ease-in-out"
        >
          Increase/10
        </button>
      </div>
    </div>
  );
};

export default Counter;
