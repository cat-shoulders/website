import { lazy, Suspense } from "react";
const Scene3D = lazy(() =>import("../components/Scene3D"));
import SocialLinks from "../components/SocialLinks";

const Index = () => {

  const playMeow = () => {
    const audio = new Audio('meow.mp3');
    audio.play();
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-white to-gray-50
      dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800
    ">
      <div className="mb-12 text-2xl text-white animate-bounce animate-float">
        <Suspense fallback={<div>...</div>}>
          <Scene3D />
        </Suspense>
      </div>

      <h1 className="flex items-end gap-5 text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4 fade-in dark:text-white"
        style={{
          backgroundImage: "linear-gradient(135deg, #E84B3C, #F2C511, #3398DB)",
          backgroundSize: "200% 200%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "text-animation 3s ease infinite",
        }}
      >
        CatShoulder <div className="text-lg mb-1">[dot]</div> dev
      </h1>

      <p className="text-lg text-gray-600 text-center max-w-md mb-12 fade-in-delay-1 dark:text-gray-400">
        Group of devs with a cat sitting on their shoulders.
        <br />
        <strong className="text-blue-400">Experienced</strong>, <strong className="text-red-400">passionate</strong> and <strong className="text-yellow-200">creative</strong>.

        <button role="button" onClick={playMeow} className="inline-block font-bold !mt-12 mb-5 mx-5 text-yellow-200 border-b-2 border-transparent select-none p-3 hover:border-yellow-200"> Meow!!</button>
      </p>

      <SocialLinks />
    </div>
  );
};

export default Index;
