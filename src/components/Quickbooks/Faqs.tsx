import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
  question: string;
  answer: string;
  icon: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does NextGen Financial redefine finance?",
    answer: "We blend AI-powered analytics with visual storytelling, transforming complex financial data into clear, actionable insights for your business.",
    icon: "🚀"
  },
  {
    question: "What's unique about your AI-powered analytics?",
    answer: "Our AI doesn't just analyze past data—it predicts future trends, helping you make proactive decisions to stay ahead in your market.",
    icon: "🤖"
  },
  {
    question: "How does visual financial storytelling work?",
    answer: "We turn your numbers into vibrant, interactive visuals that reveal the narrative behind your finances, making complex data accessible to all stakeholders.",
    icon: "🎨"
  },
  {
    question: "Can your predictive modeling really see the future?",
    answer: "While we can't promise time travel, our models use advanced algorithms to forecast potential scenarios, helping you prepare for various financial futures.",
    icon: "🔮"
  },
  {
    question: "How do you tailor your approach to different industries?",
    answer: "Our innovative methods adapt to any sector. We learn your industry's unique challenges and customize our tools to address your specific needs.",
    icon: "🌐"
  },
  {
    question: "What makes your collaborative strategy sessions special?",
    answer: "We don't just present data—we engage in dynamic, interactive sessions where your team and ours co-create financial strategies using real-time insights.",
    icon: "🤝"
  }
];

const FAQSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-800">Unveiling Financial Clarity - FAQ&apos;s</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{faq.icon}</span>
                  <h3 className="text-xl font-semibold text-indigo-700">{faq.question}</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600 pl-12">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;