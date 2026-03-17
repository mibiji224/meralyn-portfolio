import { cn } from "@/lib/utils"

interface ProgressRingProps {
  value: number
  size?: number
  strokeWidth?: number
  className?: string
  color?: string
  children?: React.ReactNode
}

export function ProgressRing({
  value,
  size = 120,
  strokeWidth = 8,
  className,
  color = "stroke-indigo-500",
  children,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (value / 100) * circumference

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-slate-100"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={cn("transition-all duration-1000 ease-out", color)}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children ?? (
          <span className="text-xl font-bold text-slate-700">{value}%</span>
        )}
      </div>
    </div>
  )
}
