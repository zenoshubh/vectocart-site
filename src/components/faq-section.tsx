import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How do I install the VectoCart extension?",
      answer: "Download the extension files, enable Developer mode in Chrome (chrome://extensions/), click 'Load unpacked' and select the dist folder. The extension will be ready to use immediately."
    },
    {
      question: "Which e-commerce sites are supported?",
      answer: "VectoCart currently supports Amazon (amazon.in, amazon.com), Flipkart, Myntra, AJIO, and Meesho. We automatically detect product pages and extract product information from these platforms."
    },
    {
      question: "How does real-time collaboration work?",
      answer: "When you create or join a room, all participants can add products to the shared cart. Changes are synced instantly using Firebase Firestore, so everyone sees updates in real-time."
    },
    {
      question: "Is my shopping data secure?",
      answer: "Yes, we use Firebase Authentication for secure sign-in and Firestore for encrypted data storage. Your shopping data is private to your room members and protected by enterprise-grade security."
    },
    {
      question: "Can I use VectoCart on mobile devices?",
      answer: "VectoCart is designed as a Chrome extension for desktop browsers. However, the interface is responsive and works well on Chrome for Android when the extension is supported."
    },
    {
      question: "How do I share my shopping room with others?",
      answer: "After creating a room, you'll receive a unique 6-digit code. Share this code with friends or family, and they can join your room by entering the code in their VectoCart extension."
    },
    {
      question: "What happens if I remove a product from the cart?",
      answer: "When you remove a product, it's instantly removed from the shared cart for all room members. All changes are synchronized in real-time across all connected users."
    },
    {
      question: "Can I filter and sort products in my cart?",
      answer: "Yes, you can sort products by date added, price (low to high or high to low), and filter products by specific e-commerce platforms to better organize your shared shopping list."
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about VectoCart and collaborative shopping
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-black font-medium py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
