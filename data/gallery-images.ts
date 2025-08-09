export interface GalleryImage {
  src: string
  alt: string
  className: string
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/placeholder.svg?height=600&width=800&text=Annual+Forum',
    alt: "Annual Forum - OPEN Silicon Valley's flagship event bringing together entrepreneurs and investors",
    className: 'col-span-2 row-span-2 md:col-span-2 md:row-span-2',
  },
  {
    src: '/placeholder.svg?height=300&width=400&text=Networking+Event',
    alt: 'Networking Event - Professionals connecting at an OPEN Silicon Valley networking session',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/placeholder.svg?height=300&width=400&text=Workshop',
    alt: 'Workshop - Hands-on learning session for entrepreneurs and professionals',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/placeholder.svg?height=600&width=400&text=Seminar',
    alt: 'Seminar - Educational presentation on business and technology topics',
    className: 'col-span-1 row-span-2',
  },
  {
    src: '/placeholder.svg?height=300&width=400&text=Panel+Discussion',
    alt: 'Panel Discussion - Industry experts sharing insights and experiences',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/placeholder.svg?height=300&width=400&text=Startup+Pitch',
    alt: 'Startup Pitch - Entrepreneurs presenting their business ideas to potential investors',
    className: 'col-span-1 row-span-1',
  },
]
