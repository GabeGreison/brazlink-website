export default function SolutionCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="relative pb-10 overflow-visible w-full max-w-md rounded-[28px] border border-cyan-400">

      <div className="text-center py-5 text-white text-2xl md:text-3xl font-light tracking-[0.2em] border-b border-cyan-400 bg-purple-dark rounded-t-[28px]">
        {title}
      </div>

      <div className="flex flex-col">
        {items.map((item, index) => (
          <div
            key={index}
            className="h-20 flex items-center justify-center px-6 text-center text-white text-lg md:text-xl font-light border-b border-accent last:border-none"
          >
            <span className="leading-snug">
              {item}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center border-4 border-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}