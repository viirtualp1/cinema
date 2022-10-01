export interface RatingData {
  value: number
  reviews: number
}

export interface MovieData {
  id: number | string
  title: string
  description: string
  image: string
  tags: string[]
  rating: RatingData
}
