export interface Sponsor {
  name: string
  url: string
  image: string
}

export interface SponsorLevel {
  level: string
  sponsors: Sponsor[]
}

export const sponsorLevels: SponsorLevel[] = [
  {
    level: "Platinum",
    sponsors: [{ name: "Azhar Aziz Foundation", url: "#", image: "/placeholder.svg?height=75&width=150&text=Sponsor" }],
  },
  {
    level: "Gold",
    sponsors: [{ name: "Oracle", url: "#", image: "/placeholder.svg?height=75&width=150&text=Oracle" }],
  },
  {
    level: "Silver",
    sponsors: [
      {
        name: "Western Digital",
        url: "https://www.westerndigital.com/",
        image: "/placeholder.svg?height=46&width=150&text=WD",
      },
      {
        name: "Lucid Motors",
        url: "https://lucidmotors.com/",
        image: "/placeholder.svg?height=10&width=150&text=Lucid",
      },
      { name: "Pillsbury", url: "#", image: "/placeholder.svg?height=75&width=150&text=Pillsbury" },
      {
        name: "Turkish Airlines",
        url: "#",
        image: "/placeholder.svg?height=75&width=150&text=Turkish+Airlines",
      },
    ],
  },
]
