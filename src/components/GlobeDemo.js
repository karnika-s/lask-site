import Globe from "./magicui/Globe";

export function GlobeDemo() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden rounded-lg bg-black">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
      
      </span>
      <Globe className="absolute inset-0 h-full w-full" />
      {/* Remove the gradient overlay to ensure the background stays black */}
    </div>
  );
}
