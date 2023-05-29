export interface Root {
  data: Data
}

export interface Data {
  search: Search
  viewer: Viewer
}

export interface Search {
  edges: Edge[]
}

export interface Edge {
  node: Node
}

export interface Node {
  name: string
  id: string
  stargazerCount: number
  description?: string
  languages: Languages
  owner: Owner
  updatedAt: string
  commitComments: CommitComments
  url: string
}

export interface Languages {
  edges: Edge2[]
}

export interface Edge2 {
  node: Node2
}

export interface Node2 {
  name: string
}

export interface Owner {
  avatarUrl: string
  login: string
  url: string
}

export interface CommitComments {
  nodes: Node3[]
}

export interface Node3 {
  commit?: Commit
  updatedAt: string
}

export interface Commit {
  id: string
}

export interface Viewer {
  repositories: Repositories
}

export interface Repositories {
  nodes: Node4[]
}

export interface Node4 {
  name: string
  id: string
  stargazerCount: number
  description?: string
  languages: Languages2
  owner: Owner2
  updatedAt: string
  url: string
}

export interface Languages2 {
  edges: Edge3[]
}

export interface Edge3 {
  node: Node5
}

export interface Node5 {
  name: string
}

export interface Owner2 {
  avatarUrl: string
  login: string
  url: string
}