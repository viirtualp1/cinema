export interface RatingData {
  value: number
  reviews: number
}

export interface MovieData {
  title: string
  description: string
  image: string
  tags: string[]
  rating: RatingData
}
