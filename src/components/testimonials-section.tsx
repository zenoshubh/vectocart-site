import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Designer",
      avatar: "SC",
      content: "VectoCart has completely transformed how my family shops online. We can now plan purchases together and avoid duplicate orders. The real-time sync is incredibly smooth!",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "Software Engineer",
      content: "As a developer, I appreciate the clean interface and reliable performance. The multi-platform support works flawlessly across all the major shopping sites we use.",
      avatar: "MR",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Marketing Manager",
      content: "Perfect for coordinating team purchases and office supplies. The room-based system makes it easy to organize different shopping projects with various team members.",
      avatar: "ET",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Freelancer",
      content: "The price tracking feature helps me make informed decisions when shopping with clients. Being able to filter by platform saves so much time when comparing options.",
      avatar: "DK",
      rating: 5
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who've transformed their shopping experience with VectoCart
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-gray-50 border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-gray-400 opacity-60" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>
                
                {/* User */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-black text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
