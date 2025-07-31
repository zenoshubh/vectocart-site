import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Globe, 
  Shield, 
  Zap, 
  Filter, 
  TrendingUp, 
  Smartphone, 
  Lock 
} from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "Share shopping carts with multiple users and see updates instantly as friends add or remove products."
    },
    {
      icon: Globe,
      title: "Multi-platform Support",
      description: "Works seamlessly across Amazon, Flipkart, Myntra, AJIO, and Meesho with automatic product detection."
    },
    {
      icon: Zap,
      title: "Smart Product Detection",
      description: "Automatically extracts product details including name, price, and images from supported e-commerce sites."
    },
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "Firebase-powered authentication ensures your shopping data is secure and synced across devices."
    },
    {
      icon: Filter,
      title: "Advanced Filtering",
      description: "Sort products by price or recency, and filter by specific e-commerce platforms for better organization."
    },
    {
      icon: TrendingUp,
      title: "Price Tracking",
      description: "View and compare product prices across different platforms to make informed shopping decisions."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Clean, modern interface optimized for Chrome sidebar with mobile-friendly responsive layouts."
    },
    {
      icon: Lock,
      title: "Room-based Privacy",
      description: "Create private shopping rooms with unique codes - only invited members can access your shared carts."
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-black/5 backdrop-blur-sm border-black/10 text-black">
            Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Everything You Need for
            <br />
            <span className="text-gray-600">
              Collaborative Shopping
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to make shopping with friends and family seamless and enjoyable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group relative bg-white border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-black text-white p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-black text-lg font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Supported Platforms */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-black mb-8">Supported E-commerce Platforms</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['Amazon', 'Flipkart', 'Myntra', 'AJIO', 'Meesho'].map((platform) => (
              <div key={platform} className="px-6 py-3 bg-black/5 backdrop-blur-sm rounded-full border border-black/10">
                <span className="text-black font-medium">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
