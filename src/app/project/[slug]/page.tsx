"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowLeft, Youtube, Award, Calendar, Clock, ExternalLink } from "lucide-react"
import { projects } from "../../../../projects"
import { notFound } from "next/navigation"
import Link from "next/link"
import { useState } from "react"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11) ? match[2] : null
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug)
  const [showVideo, setShowVideo] = useState(false)
  
  if (!project) {
    notFound()
  }

  const videoId = project.videoUrl ? getYouTubeVideoId(project.videoUrl) : null

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto w-full max-w-6xl flex h-16 items-center justify-between px-6">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 rounded-sm bg-primary" />
            <span className="font-bold tracking-wider text-primary">SAHIL LULLA</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              {project.notes && (
                <Badge variant="secondary">
                  <Award className="h-3 w-3 mr-1" />
                  {project.notes}
                </Badge>
              )}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {project.year}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {Math.floor(project.durationSec / 60)}:{(project.durationSec % 60).toString().padStart(2, '0')}
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-foreground">
              {project.title}
            </h1>
            {project.client && (
              <p className="text-xl text-muted-foreground mb-6">
                Created for {project.client}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Video/Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted flex items-center justify-center relative">
                  {showVideo && videoId ? (
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
                        src={`https://picsum.photos/seed/${project.id}/800/450`}
                        alt={project.title}
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => videoId && setShowVideo(true)}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/800x450/374151/9ca3af?text=${encodeURIComponent(project.title.substring(0, 20))}`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        {project.videoUrl && videoId ? (
                          <Button 
                            size="lg" 
                            onClick={() => setShowVideo(true)}
                          >
                            <Youtube className="mr-2 h-5 w-5" />
                            Play Video
                          </Button>
                        ) : project.videoUrl ? (
                          <Button size="lg" asChild>
                            <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                              <Youtube className="mr-2 h-5 w-5" />
                              Watch on YouTube
                            </a>
                          </Button>
                        ) : null}
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This project represents a culmination of creative vision and technical expertise. Working closely with the client team, we developed a compelling narrative that resonates with audiences while maintaining the highest production standards.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The editing process involved careful attention to pacing, color grading, and visual effects to create an immersive experience. Each cut was deliberate, each transition purposeful, resulting in a final product that exceeds creative expectations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Creative Process</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The project began with extensive pre-production planning, including storyboard development and technical requirements analysis. Our team collaborated closely with directors and producers to establish the creative direction.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Initial concept development and creative briefing</li>
                  <li>Collaborative editing sessions with directors</li>
                  <li>Advanced color correction and grading techniques</li>
                  <li>Sound design and audio post-production</li>
                  <li>Final delivery optimization for multiple platforms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Technical Specifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Shot on industry-standard equipment and post-produced using the latest software tools. The workflow incorporated AI-assisted editing techniques where appropriate, while maintaining the human touch that defines exceptional storytelling.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-foreground">Project Details</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Client:</span>
                      <span className="ml-2 text-foreground">{project.client || "Internal"}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Year:</span>
                      <span className="ml-2 text-foreground">{project.year}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="ml-2 text-foreground">
                        {Math.floor(project.durationSec / 60)}:{(project.durationSec % 60).toString().padStart(2, '0')}
                      </span>
                    </div>
                    {project.role && (
                      <div>
                        <span className="text-muted-foreground">Role:</span>
                        <span className="ml-2 text-foreground">{project.role.join(", ")}</span>
                      </div>
                    )}
                    {project.studio && (
                      <div>
                        <span className="text-muted-foreground">Studio:</span>
                        <span className="ml-2 text-foreground">{project.studio}</span>
                      </div>
                    )}
                    {project.platform && (
                      <div>
                        <span className="text-muted-foreground">Platform:</span>
                        <span className="ml-2 text-foreground">{project.platform}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {project.videoUrl && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 text-foreground">Watch Online</h3>
                    <Button asChild className="w-full">
                      <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                        <Youtube className="mr-2 h-4 w-4" />
                        View on YouTube
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-foreground">Skills Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}