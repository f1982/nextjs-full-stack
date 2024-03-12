'use client'


import { useState } from "react";
import BinauralBeatsGenerator from "./generator";

const GeneratorHome: React.FC = () => {
  const [frequencyLeft, setFrequencyLeft] = useState(200);
  const [frequencyRight, setFrequencyRight] = useState(210);

  return (
    <div className="flex justify-center items-center h-screen">
      <BinauralBeatsGenerator
        frequencyLeft={frequencyLeft}
        frequencyRight={frequencyRight}
        setFrequencyLeft={setFrequencyLeft}
        setFrequencyRight={setFrequencyRight}
      />
    </div>
  );
};

export default GeneratorHome;
