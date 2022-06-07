export type ReduceReturnType = Record<string, Course>

export interface Course {
  index?: number
  id: string
  type: string
  title: string
  description: string
  coverImage: string
  author: string
  link: string
  slug: string
  wsl: string[]
  createdAt: string
}
