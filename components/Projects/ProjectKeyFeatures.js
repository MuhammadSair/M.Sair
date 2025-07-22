"use client";

export default function ProjectKeyFeatures({ features }) {
  if (!features || features.length === 0) return null;

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <h3 className="text-lg font-light text-zinc-900 dark:text-zinc-100 tracking-tight">
          Key Features
        </h3>
        <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>
      </div>

      <div className="space-y-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 font-light"
          >
            <div className="w-1 h-1 bg-zinc-400 dark:bg-zinc-600 mt-2 flex-shrink-0"></div>
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}
