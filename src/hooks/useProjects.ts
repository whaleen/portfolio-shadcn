"use client"

import { useState, useEffect } from 'react'

export interface Project {
  id: string
  title: string
  client?: string
  year: number
  tags: string[]
  videoUrl?: string
  durationSec: number
  role?: string[]
  studio?: string
  platform?: string
  notes?: string
  slug?: string
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch('/data/projects.json')
        if (!response.ok) {
          throw new Error('Failed to load projects')
        }
        const projectsData: Project[] = await response.json()
        setProjects(projectsData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load projects')
        // Fallback to empty array if loading fails
        setProjects([])
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  return { projects, loading, error }
}