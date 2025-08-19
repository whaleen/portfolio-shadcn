"use client"


import { Button } from "@/components/ui/button"
import { Projects } from "@/components/projects/Projects"
import { Hero115 } from "@/components/hero115"

// Inline components to keep everything in one file for now
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero115
        icon={null}
        heading="Video Editor"
        description="Cutting stories with rhythm and taste. Commercials, music videos, narrative – delivered fast with a director’s eye and an engineer’s rigor."
        button={{ text: "Watch Reel", url: "#reel" }}
        trustText={undefined}
        imageSrc="/images/reel-cover.svg"
        imageAlt="Selected work"
      />
      <About />
      <Projects />
      <SiteFooter />
    </main>
  )
}

function SiteNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-6xl flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-sm bg-foreground" />
          <span className="text-sm font-medium tracking-wider">SAHIL LULLA</span>
        </div>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#about" className="text-muted-foreground hover:text-foreground">About</a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground">Projects</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button size="sm">Get in touch</Button>
        </div>
      </div>
    </header>
  )
}


function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl grid grid-cols-1 gap-8 px-4 py-24 md:grid-cols-3">
      <div className="md:col-span-1">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">About</h2>
      </div>
      <div className="prose prose-invert md:col-span-2">
        <p>
          I shape pace, emotion, and clarity. I work across commercials, MV, and narrative with a toolbox spanning color, motion, and VFX.
        </p>
        <p className="text-muted-foreground">
          Toolchain: Premiere Pro / Resolve, After Effects, Fusion, and a sprinkle of generative AI when it serves the story.
        </p>
      </div>
    </section>
  )
}



function SiteFooter() {
  return (
    <footer id="contact" className="border-t">
      <div className="mx-auto w-full max-w-6xl flex flex-col items-center justify-between gap-4 px-4 py-10 md:h-20 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Sahil Lulla. All rights reserved.</p>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <a className="hover:text-foreground" href="#">Instagram</a>
          <a className="hover:text-foreground" href="#">Vimeo</a>
          <a className="hover:text-foreground" href="#">Email</a>
        </div>
      </div>
    </footer>
  )
}