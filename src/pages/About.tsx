import { Card } from "@/components/ui/card";
import { Flower2, Heart, Pen, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
            About Us 🌹
          </h1>
          <p className="text-xl text-gray-600">
            Helping families honor their loved ones with dignity and respect
          </p>
        </div>
        
        <div className="gradient-border mb-16">
          <div className="p-8 text-center">
            <p className="text-xl leading-relaxed text-gray-700">
              Welcome to AI Obituary Generator, where we combine compassionate writing with
              advanced technology to help you create meaningful tributes for your loved ones.
              Our platform provides a sensitive and respectful way to honor the memory of those
              who have passed, ensuring their legacy lives on. 🕊️
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <Flower2 className="h-8 w-8 text-blue-500" />
              </div>
              <h2 className="text-2xl font-semibold">Our Mission 🕊️</h2>
              <p className="text-gray-600">
                Providing families with a compassionate tool to create meaningful obituaries
                that honor and celebrate the lives of their loved ones.
              </p>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-blue-500" />
              </div>
              <h2 className="text-2xl font-semibold">Our Values ❤️</h2>
              <p className="text-gray-600">
                We believe in treating every life story with respect, dignity, and care,
                helping families preserve precious memories with grace.
              </p>
            </div>
          </Card>
        </div>

        <div className="space-y-12 mb-16">
          <section className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Pen className="h-8 w-8 text-blue-500" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">How It Works 🌟</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our AI-powered platform combines compassionate writing with customizable templates
              to help you create beautiful tributes. We ensure each obituary captures the essence
              of your loved one's life while maintaining appropriate tone and format for your
              chosen publication.
            </p>
          </section>

          <section className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-blue-500" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">Our Commitment 🤝</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We're dedicated to providing a supportive, respectful service that helps families
              during difficult times. Our tool is continuously refined based on feedback from
              families and funeral professionals to ensure we meet the highest standards of
              dignity and care.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}