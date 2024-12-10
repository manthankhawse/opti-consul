"use client"
import { useEffect, useState } from 'react'
import { Card, CardContent } from "@/app/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Button } from "@/app/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Review {
  id: number
  name: string
  company: string
  avatar: string
  rating: number
  text: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "John Smith",
    company: "AcmeChem Industries",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "Their optimization services dramatically improved our production efficiency in the paint manufacturing process. Highly recommended!"
  },
  {
    id: 2,
    name: "Emily Johnson",
    company: "NaturalOil Co.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    text: "The compliance consultancy we received was invaluable. It helped us navigate complex regulations in the oil and gas sector."
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "FoodTech Solutions",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "Their expertise in food industry compliance is unparalleled. They helped us implement best practices that elevated our entire operation."
  },
  {
    id: 4,
    name: "Sarah Al-Mahmoud",
    company: "Global Coatings LLC",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "The surface coating optimization service provided by this consultancy significantly improved our product quality and reduced waste."
  },
  {
    id: 5,
    name: "David Patel",
    company: "ConsumerGoods Inc.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    text: "Their FMCG compliance services ensured our products met all necessary standards. Their attention to detail is impressive."
  }
]

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    const interval = setInterval(nextReview, 5000) // Auto-scroll every 5 seconds
    return () => clearInterval(interval) // Clear interval on component unmount
  }, [])

  return (
    <section className="py-16  bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Client Reviews</h2>
        <div className="flex justify-center items-center">
          <Button variant="ghost" onClick={prevReview} className="mr-4">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Card className="w-full max-w-2xl">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={reviews[currentReview].avatar} alt={reviews[currentReview].name} />
                  <AvatarFallback>{reviews[currentReview].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{reviews[currentReview].name}</h3>
                  <p className="text-sm text-gray-500">{reviews[currentReview].company}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic">"{reviews[currentReview].text}"</p>
            </CardContent>
          </Card>
          <Button variant="ghost" onClick={nextReview} className="ml-4">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

