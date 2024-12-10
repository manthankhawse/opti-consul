import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Beaker, Droplet, FlaskRoundIcon as Flask, Sandwich, PaintBucket, SprayCanIcon as Spray } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: <Sandwich className="h-8 w-8 text-blue-500" />,
      title: "Food Industry",
      description: "Optimization and compliance solutions for food processing and manufacturing."
    },
    {
      icon: <PaintBucket className="h-8 w-8 text-green-500" />,
      title: "Paints & Coatings",
      description: "Consultancy for paint formulation, quality control, and regulatory compliance."
    },
    {
      icon: <Droplet className="h-8 w-8 text-yellow-500" />,
      title: "Oil & Gas",
      description: "Optimization services for crude oil processing and natural gas extraction."
    },
    {
      icon: <Flask className="h-8 w-8 text-purple-500" />,
      title: "FMCG",
      description: "Compliance and optimization for fast-moving consumer goods production."
    },
    {
      icon: <Spray className="h-8 w-8 text-red-500" />,
      title: "Surface Coating",
      description: "Advanced solutions for industrial and consumer surface coating applications."
    },
    {
      icon: <Beaker className="h-8 w-8 text-indigo-500" />,
      title: "Chemical Derivatives",
      description: "Consultancy for optimizing processes in chemical derivative production."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-col items-center">
                <div className="p-2 rounded-full bg-gray-100 mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

