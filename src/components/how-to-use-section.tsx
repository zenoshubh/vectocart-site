import { Card, CardContent } from "@/components/ui/card"
import { Download, UserPlus, ShoppingCart, Share } from "lucide-react"

export function HowToUseSection() {
  const steps = [
    {
      icon: Download,
      title: "Install Extension",
      description: "Download and install VectoCart from the Chrome Web Store. Enable developer mode and load the extension.",
      step: "01"
    },
    {
      icon: UserPlus,
      title: "Create or Join Room",
      description: "Create a new shopping room with a custom name or join an existing room using a 6-digit code.",
      step: "02"
    },
    {
      icon: ShoppingCart,
      title: "Add Products",
      description: "Browse supported e-commerce sites and click 'Add to VectoCart' on any product page.",
      step: "03"
    },
    {
      icon: Share,
      title: "Collaborate & Share",
      description: "See real-time updates as your friends add products. Sort, filter, and manage your shared cart together.",
      step: "04"
    }
  ]

  return (
    <section className="py-24 relative bg-gray-50">
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            How to Get Started
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Set up VectoCart in minutes and start collaborative shopping with your friends and family
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-sm">
              <CardContent className="p-8 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                
                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className="w-16 h-16 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-black mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Connection Lines */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gray-200 transform -translate-y-1/2" />
      </div>
    </section>
  )
}
