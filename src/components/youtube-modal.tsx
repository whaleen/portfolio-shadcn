"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface YouTubeModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl?: string
  title: string
}

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11) ? match[2] : null
}

export default function YouTubeModal({ isOpen, onClose, videoUrl, title }: YouTubeModalProps) {
  const [mounted, setMounted] = useState(false)
  const videoId = videoUrl ? getYouTubeVideoId(videoUrl) : null

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95vw] p-0 bg-black/95 border-none">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Video player for {title}</DialogDescription>
        </DialogHeader>
        
        <div className="relative">
          <Button
            onClick={onClose}
            size="icon"
            variant="ghost"
            className="absolute -top-12 right-0 z-50 text-white hover:bg-white/10 h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="aspect-video bg-black flex items-center justify-center">
            {videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <div className="text-white text-center p-8">
                <p className="text-lg mb-4">Video not available</p>
                <Button onClick={onClose} variant="outline">
                  Close
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}