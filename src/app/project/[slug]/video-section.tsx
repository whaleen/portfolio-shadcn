"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Youtube } from "lucide-react"
import type { Project } from "../../../../projects"

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11) ? match[2] : null
}

interface VideoSectionProps {
  project: Project
}

export default function VideoSection({ project }: VideoSectionProps) {
  const [showVideo, setShowVideo] = useState(false)
  const videoId = project.videoUrl ? getYouTubeVideoId(project.videoUrl) : null

  return (
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
                  className={`w-full h-full object-cover ${videoId ? 'cursor-pointer' : ''}`}
                  onClick={() => videoId && setShowVideo(true)}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/800x450/374151/9ca3af?text=${encodeURIComponent(project.title.substring(0, 20))}`;
                  }}
                />
                <div 
                  className={`absolute inset-0 bg-black/30 flex items-center justify-center ${videoId ? 'cursor-pointer' : ''}`}
                  onClick={() => videoId && setShowVideo(true)}
                >
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
  )
}