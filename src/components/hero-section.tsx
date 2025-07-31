import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Chrome, Users, ShoppingCart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge variant="outline" className="px-4 py-2 bg-black/5 backdrop-blur-sm border-black/10 text-black">
              <Chrome className="w-4 h-4 mr-2" />
              Chrome Extension
            </Badge>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight">
            Collaborative
            <br />
            <span className="text-gray-600">
              Shopping Extension
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Share and collaborate on shopping carts across multiple e-commerce sites with friends and family in real-time
          </p>
          
          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full border border-black/10">
              <Users className="w-4 h-4 text-black" />
              <span className="text-gray-700 text-sm">Real-time Collaboration</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full border border-black/10">
              <ShoppingCart className="w-4 h-4 text-black" />
              <span className="text-gray-700 text-sm">Multi-platform Support</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Extension
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-black/20 text-black hover:bg-black/5 backdrop-blur-sm px-8 py-6 text-lg rounded-xl"
            >
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Browser Mockup */}
        <div className="mt-16 relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/5 backdrop-blur-sm rounded-t-2xl border border-black/10 p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-gray-500 rounded-full" />
                <div className="w-3 h-3 bg-gray-400 rounded-full" />
                <div className="w-3 h-3 bg-gray-300 rounded-full" />
              </div>
              <div className="bg-black/5 rounded-lg h-64 flex items-center justify-center">
                <div className="text-gray-600 text-lg">VectoCart Extension Preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
