import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Youtube, Award, Calendar, Clock } from "lucide-react"
import { projects } from "../../../../projects"
import { notFound } from "next/navigation"
import Link from "next/link"
import VideoSection from "./video-section"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}


export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params
  const project = projects.find(p => p.slug === resolvedParams.slug)
  
  if (!project) {
    notFound()
  }

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
          <div className="mb-8">
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
          </div>

          {/* Video/Image Section */}
          <VideoSection project={project} />

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
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
            </div>

            <div className="space-y-6">
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
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}