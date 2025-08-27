"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowUpRight, Play, Award, Calendar, Clock, Sun, Moon, Youtube } from "lucide-react"
import { projects } from "../../projects"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />
      <HeroSection />
      <FeaturedProjectSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

function SiteNav() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="mx-auto w-full max-w-6xl flex h-16 items-center justify-between px-6">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="h-5 w-5 rounded-sm bg-primary" />
          <span className="text-lg font-bold tracking-wider text-primary">
            SAHIL LULLA
          </span>
        </motion.div>
        <nav className="hidden gap-8 text-sm md:flex">
          <motion.a 
            href="#featured" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
          >
            Featured
          </motion.a>
          <motion.a 
            href="#about" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#projects" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
          >
            Projects
          </motion.a>
          <motion.a 
            href="#contact" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
          >
            Contact
          </motion.a>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {mounted ? (
              theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />
            ) : (
              <div className="h-4 w-4" />
            )}
          </Button>
          <Button size="sm">
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </motion.header>
  )
}


// Hero Section
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="mx-auto w-full max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-foreground">
              Video
            </span>
            <br />
            <span className="text-primary">
              Editor
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Cutting stories with rhythm and taste. Commercials, music videos, narrative - delivered fast with a director&apos;s eye and an engineer&apos;s rigor.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Reel
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg"
            >
              View Projects
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Featured Project Section
function FeaturedProjectSection() {
  // Get the most impressive project (Sarfira - Top 5 most viewed trailers of 2024)
  const featuredProject = projects.find(p => p.id === "p12") || projects[0]
  const [showFeaturedVideo, setShowFeaturedVideo] = useState(false)
  const featuredVideoId = featuredProject.videoUrl ? getYouTubeVideoId(featuredProject.videoUrl) : null
  
  return (
    <section id="featured" className="py-24 px-6">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-foreground">
            Featured Project
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of award-winning work and industry recognition
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-muted/50 p-8 md:p-12 flex items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">
                        <Award className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                      {featuredProject.notes && (
                        <Badge variant="outline">
                          {featuredProject.notes}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                      {featuredProject.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredProject.year}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {Math.floor(featuredProject.durationSec / 60)}:{(featuredProject.durationSec % 60).toString().padStart(2, '0')}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {featuredProject.client && `Created for ${featuredProject.client}. `}
                      {featuredProject.role && `Role: ${featuredProject.role.join(", ")}. `}
                      {featuredProject.platform && `Distributed via ${featuredProject.platform}.`}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {featuredProject.videoUrl && (
                        <Button asChild>
                          <a href={featuredProject.videoUrl} target="_blank" rel="noopener noreferrer">
                            <Youtube className="mr-2 h-4 w-4" />
                            Watch on YouTube
                          </a>
                        </Button>
                      )}
                      <Button variant="outline" asChild>
                        <Link href={`/project/${featuredProject.slug}`}>
                          View Details
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-muted p-8 md:p-12 flex items-center justify-center">
                  <div className="w-full h-64 bg-accent/20 rounded-lg flex items-center justify-center border border-border overflow-hidden relative">
                    {showFeaturedVideo && featuredVideoId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${featuredVideoId}?autoplay=1`}
                        title={featuredProject.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    ) : (
                      <>
                        <img 
                          src={`https://picsum.photos/seed/${featuredProject.id}/400/250`}
                          alt={featuredProject.title}
                          className={`w-full h-full object-cover ${featuredVideoId ? 'cursor-pointer' : ''}`}
                          onClick={() => featuredVideoId && setShowFeaturedVideo(true)}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://via.placeholder.com/400x250/374151/9ca3af?text=${encodeURIComponent(featuredProject.title.substring(0, 20))}`;
                          }}
                        />
                        <div 
                          className={`absolute inset-0 bg-black/30 flex items-center justify-center ${featuredVideoId ? 'cursor-pointer' : ''}`}
                          onClick={() => featuredVideoId && setShowFeaturedVideo(true)}
                        >
                          <Play className="h-12 w-12 text-white" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// About Section  
function AboutSection() {
  const skills = [
    { name: "Post-Production", desc: "Edit, Color, VFX, AI Integration", tags: ["Edit", "Color", "VFX", "AI"] },
    { name: "Direction & Production", desc: "Creative Direction, Production Management", tags: ["Production", "Direction"] },
    { name: "Industry Recognition", desc: "Award-winning narrative and commercial work", tags: ["Awards", "Festival"] }
  ]

  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground">
              About
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              I shape pace, emotion, and clarity. I work across commercials, music videos, and narrative with a toolbox spanning color, motion, and VFX.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Toolchain: Premiere Pro / Resolve, After Effects, Fusion, and a sprinkle of generative AI when it serves the story. From major clients like Amazon Prime to award-winning festival pieces.
            </p>
            <Button>
              Download Reel
            </Button>
          </div>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
                      <p className="text-muted-foreground">{skill.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {skill.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11) ? match[2] : null
}

// Projects Section
function ProjectsSection() {
  // Get a selection of diverse projects showcasing different types of work
  const displayProjects = projects.slice(0, 6)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-foreground">
            Recent Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects spanning commercials, narrative films, and award-winning content
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => {
            const videoId = project.videoUrl ? getYouTubeVideoId(project.videoUrl) : null
            const isPlaying = playingVideo === project.id
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden rounded-t-lg relative">
                      {isPlaying && videoId ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                          title={project.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      ) : (
                        <>
                          <img 
                            src={`https://picsum.photos/seed/${project.id}/400/225`}
                            alt={project.title}
                            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${videoId ? 'cursor-pointer' : ''}`}
                            onClick={() => videoId && setPlayingVideo(project.id)}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://via.placeholder.com/400x225/374151/9ca3af?text=${encodeURIComponent(project.title.substring(0, 15))}`;
                            }}
                          />
                          <div 
                            className={`absolute inset-0 bg-black/30 flex items-center justify-center ${videoId ? 'cursor-pointer' : ''}`}
                            onClick={() => videoId && setPlayingVideo(project.id)}
                          >
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        </>
                      )}
                    </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {project.year}
                      </div>
                      {project.notes && (
                        <Badge variant="secondary" className="text-xs">
                          <Award className="h-3 w-3 mr-1" />
                          Award
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.client && (
                      <p className="text-sm text-muted-foreground mb-3">
                        {project.client}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.videoUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                            <Youtube className="mr-1 h-3 w-3" />
                            Watch
                          </a>
                        </Button>
                      )}
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/project/${project.slug}`}>
                          Details
                          <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const contacts = [
    { label: "Email", value: "hello@sahillulla.com", href: "mailto:hello@sahillulla.com" },
    { label: "Instagram", value: "@sahillulla", href: "https://instagram.com/sahillulla" },
    { label: "Vimeo", value: "sahillulla", href: "https://vimeo.com/sahillulla" }
  ]

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto w-full max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Always interested in hearing about new projects and creative collaborations.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="bg-card border-border hover:border-primary transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6">
                    <h3 className="text-foreground font-semibold mb-2">{contact.label}</h3>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-border mt-16 pt-8"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sahil Lulla. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}