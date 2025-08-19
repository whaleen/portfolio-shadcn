"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Megaphone,
  Film,
  Music2,
  Sparkles,
  Palette,
  Clapperboard,
  Scissors,
  Tag as TagIcon,
} from "lucide-react"

export type BottomFilterBarProps = {
  tags: readonly string[]
  counts: Map<string, number>
  value: string
  onChange: (tag: string) => void
  className?: string
}

const iconFor: Record<string, React.ReactNode> = {
  All: <Star className="size-4" aria-hidden="true" />,
  Commercial: <Megaphone className="size-4" aria-hidden="true" />,
  Narrative: <Film className="size-4" aria-hidden="true" />,
  "Music Video": <Music2 className="size-4" aria-hidden="true" />,
  VFX: <Sparkles className="size-4" aria-hidden="true" />,
  Color: <Palette className="size-4" aria-hidden="true" />,
  Motion: <Clapperboard className="size-4" aria-hidden="true" />,
  "Short-form": <Scissors className="size-4" aria-hidden="true" />,
}

export function BottomFilterBar({ tags, counts, value, onChange, className }: BottomFilterBarProps) {
  // Coerce empty string (Radix deselect) back to "All"
  const handleChange = (v: string) => {
    if (!v) return onChange("All")
    onChange(v)
  }

  return (
    <div
      className={cn(
        // Centered, capped width — avoids stretching edge-to-edge on large screens
        "fixed bottom-6 left-1/2 z-40 -translate-x-1/2 w-full max-w-[min(100vw-1rem,72rem)] px-3",
        className
      )}
      role="region"
      aria-label="Project filter bar"
    >
      <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md shadow-2xl ring-1 ring-white/5">
        <div className="px-2 py-2">
          <ToggleGroup
            type="single"
            value={value}
            onValueChange={handleChange}
            className="flex flex-wrap items-center justify-center gap-2 overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_12px,black_calc(100%-12px),transparent)]"
            aria-label="Filter projects by tag"
          >
            {tags.map((t) => {
              const count = counts.get(t) ?? 0
              return (
                <ToggleGroupItem
                  key={t}
                  value={t}
                  aria-label={`Filter by ${t}`}
                  className={cn(
                    // Base chip styles (off)
                    "rounded-full border border-white/10 text-white/80 hover:bg-white/10",
                    // Selected state (Radix)
                    "data-[state=on]:bg-white/15 data-[state=on]:text-white data-[state=on]:border-white/20",
                    // Layout & spacing
                    "h-9 px-3 text-sm flex items-center gap-2",
                    // Focus ring accessibility
                    "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  )}
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="shrink-0 text-white/90">
                      {iconFor[t] ?? <TagIcon className="size-4" aria-hidden="true" />}
                    </span>
                    <span className="truncate">{t}</span>
                  </span>
                  {/* Count badge on >= sm */}
                  <Badge
                    variant="secondary"
                    className="ml-1 hidden shrink-0 sm:inline-flex bg-white/10 text-white/80 border border-white/10"
                    aria-hidden="true"
                  >
                    {count}
                  </Badge>
                </ToggleGroupItem>
              )
            })}
          </ToggleGroup>
        </div>
      </div>
    </div>
  )
}

export default BottomFilterBar

