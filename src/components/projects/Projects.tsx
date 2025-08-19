"use client"

import { useMemo, useState } from "react"

import { ProjectCard } from "./ProjectCard"
import { projects as ALL, TAGS } from "../../../projects"
import { BottomFilterBar } from "@/components/BottomFilterBar"

export function Projects() {
  // Filter state (single-select)
  const [active, setActive] = useState<string>("All")

  // Counts map including "All"
  const counts = useMemo(() => {
    const m = new Map<string, number>()
    m.set("All", ALL.length)
    for (const p of ALL) {
      for (const t of p.tags) {
        m.set(t, (m.get(t) ?? 0) + 1)
      }
    }
    return m
  }, [])

  // Filtered list
  const filtered = useMemo(
    () => (active === "All" ? ALL : ALL.filter((p) => p.tags.includes(active))),
    [active]
  )

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-24 pb-28">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">Projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 ? (
          <div className="col-span-full rounded-xl border p-8 text-center text-sm text-muted-foreground">
            <p>No projects match this tag.</p>
          </div>
        ) : (
          filtered.map((p) => <ProjectCard key={p.id} project={p} />)
        )}
      </div>
      <BottomFilterBar
        tags={TAGS as unknown as readonly string[]}
        counts={counts}
        value={active}
        onChange={(t) => setActive(t)}
      />
    </section>
  )
}

