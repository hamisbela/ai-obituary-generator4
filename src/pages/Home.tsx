import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Copy, Coffee, Check, Sparkles, Flower2, Heart, Pen } from 'lucide-react';
import { genAI } from '@/lib/gemini';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const SupportBox = () => (
  <Card className="p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 border-2 border-neutral-200 mb-8">
    <div className="text-center space-y-4">
      <Coffee className="h-12 w-12 mx-auto text-amber-500" />
      <h2 className="text-2xl font-bold">Support Our Work ❤️</h2>
      <p className="text-neutral-600 max-w-xl mx-auto">
        Help us maintain and improve our AI tools by supporting our API & hosting costs. 
        Your contribution helps keep this tool free for everyone! 🙏
      </p>
      <a
        href="https://roihacks.gumroad.com/coffee"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Button 
          size="lg" 
          className="text-lg px-8 bg-amber-500 hover:bg-amber-600 text-white"
        >
          <Coffee className="mr-2 h-5 w-5" />
          Buy Us a Coffee ☕
        </Button>
      </a>
    </div>
  </Card>
);

export default function Home() {
  const [context, setContext] = useState('');
  const [obituary, setObituary] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateObituary = async () => {
    if (!context.trim()) return;
    
    setLoading(true);
    setError(null);
    try {
      if (!genAI) {
        throw new Error("API key not configured. Please add your Gemini API key to continue.");
      }
      
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Create a respectful and dignified obituary based on this information: ${context}. 
      The obituary should be well-structured, compassionate, and appropriate for publication.
      Include key life events, family relationships, and personal characteristics.
      Maintain a tone of respect and reverence throughout.`;
      
      const result = await model.generateContent(prompt);
      setObituary(result.response.text().trim());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while generating the obituary');
      setObituary('');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(obituary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 py-4">
          <h1 className="text-5xl font-bold mb-6 text-neutral-800 leading-tight">
            AI Obituary Generator 🌹
          </h1>
          <p className="text-xl text-neutral-600">
            Create dignified, meaningful obituaries to honor your loved ones 🕊️
          </p>
        </div>
        
        <div className="gradient-border mb-8">
          <div className="p-8">
            <div className="space-y-6">
              <Textarea
                placeholder="✍️ Share information about your loved one, including their life story, achievements, family relationships, and any specific details you'd like to include..."
                value={context}
                onChange={(e) => setContext(e.target.value)}
                className="min-h-[200px] text-lg border-2 focus:border-neutral-400"
              />
              
              <Button 
                onClick={generateObituary}
                disabled={loading || !context.trim()}
                className="w-full text-lg py-6 bg-neutral-800 hover:bg-neutral-900 text-white"
              >
                {loading ? (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                    Creating Obituary...
                  </>
                ) : (
                  <>
                    <Pen className="mr-2 h-5 w-5" />
                    Generate Obituary 🌹
                  </>
                )}
              </Button>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>

        {obituary && (
          <div className="space-y-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-neutral-200">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Generated Obituary</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 hover:bg-neutral-50"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </Button>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {obituary}
                  </ReactMarkdown>
                </div>
              </div>
            </Card>
          </div>
        )}

        <SupportBox />

        <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl shadow-xl p-8 mb-16">
          <article className="prose prose-neutral max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-neutral-800">
              AI Obituary Generator: Create Dignified Tributes with Care 🌹
            </h2>
            
            <div className="space-y-8">
              <p className="text-neutral-600 leading-relaxed">
                Welcome to the AI Obituary Generator, a compassionate tool designed to help you
                create meaningful and respectful tributes for your loved ones. Our advanced AI
                technology assists in crafting obituaries that honor life stories with dignity
                and grace.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Heart className="h-6 w-6 text-neutral-600" />
                  Why Choose Our AI Obituary Generator? 🕊️
                </h2>
                <ul className="space-y-3 text-neutral-600">
                  <li className="flex items-start">
                    <span className="mr-2">🌹</span>
                    <span>Compassionate and respectful tone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✨</span>
                    <span>Professional formatting for publications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">💝</span>
                    <span>Personalized tributes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">📝</span>
                    <span>Easy-to-use interface</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🤝</span>
                    <span>Supportive guidance throughout the process</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Flower2 className="h-6 w-6 text-neutral-600" />
                  Features of Our Obituary Generator 🌟
                </h2>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Thoughtful structure and formatting</li>
                  <li>• Appropriate tone and language</li>
                  <li>• Family-focused narratives</li>
                  <li>• Achievement highlights</li>
                  <li>• Personal tributes</li>
                  <li>• Publication-ready format</li>
                  <li>• Customizable content</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Perfect for All Memorial Needs 🕊️
                </h2>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Newspaper Publications</li>
                  <li>• Online Memorial Sites</li>
                  <li>• Funeral Programs</li>
                  <li>• Memorial Services</li>
                  <li>• Social Media Tributes</li>
                  <li>• Family Records</li>
                  <li>• Memorial Websites</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Writing with Dignity and Respect 🌹
                </h2>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Compassionate tone</li>
                  <li>• Respectful language</li>
                  <li>• Cultural sensitivity</li>
                  <li>• Personal touch</li>
                  <li>• Professional format</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Tips for Better Obituaries 💭
                </h2>
                <ol className="list-decimal pl-5 space-y-2 text-neutral-600">
                  <li>Include key life events and achievements</li>
                  <li>Mention family relationships</li>
                  <li>Add personal characteristics</li>
                  <li>Include funeral/memorial service details</li>
                  <li>Consider including a favorite quote or saying</li>
                </ol>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Why Professional Obituaries Matter 🌟
                </h2>
                <p className="text-neutral-600">
                  A well-crafted obituary serves multiple purposes:
                </p>
                <ul className="mt-4 space-y-2 text-neutral-600">
                  <li>• Honors the deceased's memory</li>
                  <li>• Informs the community</li>
                  <li>• Provides historical record</li>
                  <li>• Helps with grief processing</li>
                  <li>• Creates lasting tributes</li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        <SupportBox />
      </div>
    </div>
  );
}