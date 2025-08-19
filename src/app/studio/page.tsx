"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Projects } from "@/components/projects/Projects"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const sections = [
  { id: "overview", label: "Overview" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "reel", label: "Reel" },
  { id: "contact", label: "Contact" },
] as const

type SectionId = (typeof sections)[number]["id"]

export default function StudioPage() {
  const [active, setActive] = useState<SectionId>("overview")

  // IntersectionObserver to highlight the active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id") as SectionId
            if (id) setActive(id)
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 1] }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const Menu = (
    <SidebarMenu>
      {sections.map((s) => (
        <SidebarMenuItem key={s.id}>
          <SidebarMenuButton asChild isActive={active === s.id}>
            <Link href={`#${s.id}`}>{s.label}</Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Sections</SidebarGroupLabel>
            <SidebarGroupContent>{Menu}</SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
      <SidebarInset>
        {/* Top inset header with trigger for mobile */}
        <div className="sticky top-0 z-10 flex h-12 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur">
          <SidebarTrigger />
          <div className="text-sm text-muted-foreground">Studio</div>
        </div>

        <main>
          <section id="overview" className="container mx-auto px-4 py-12 md:py-16">
            <h1 className="text-3xl font-semibold md:text-4xl">Video Editor</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">Cutting stories with rhythm and taste. This workspace collects projects, reel, and contact.</p>
            <div className="mt-4 text-sm text-muted-foreground">Scroll the rail or use hash links to jump.</div>
          </section>

          <section id="about" className="container mx-auto px-4 py-12 md:py-16">
            <h2 className="text-2xl font-semibold md:text-3xl">About</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">I work across commercials, music videos, and narrative with a toolbox spanning color, motion, and VFX.</p>
          </section>

          <section id="projects" className="container mx-auto px-4 py-12 md:py-16">
            <Projects />
          </section>

          <section id="reel" className="container mx-auto px-4 py-12 md:py-16">
            <h2 className="text-2xl font-semibold md:text-3xl">Reel</h2>
            <div className="mt-4 aspect-video w-full rounded-xl border bg-muted" />
          </section>

          <section id="contact" className="container mx-auto px-4 py-12 md:py-16">
            <h2 className="text-2xl font-semibold md:text-3xl">Contact</h2>
            <p className="mt-2 text-muted-foreground">Email: you@example.com</p>
          </section>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

