import { useState } from 'react';
import { Paw, Heart, Info, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const DogBreeds = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {['Labrador Retriever', 'German Shepherd', 'Golden Retriever', 'French Bulldog', 'Bulldog', 'Poodle'].map((breed, index) => (
      <motion.div
        key={breed}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              {breed}
              <Badge variant="secondary"><Paw className="h-3 w-3 mr-1" /> Popular</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img src={`https://source.unsplash.com/400x300/?${breed.toLowerCase().replace(' ', '-')}`} alt={breed} className="w-full h-48 object-cover rounded-md mb-4" />
            <CardDescription>A beloved dog breed known for its friendly nature and adaptability.</CardDescription>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Learn More <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    ))}
  </div>
);

const FunFacts = () => (
  <motion.ul 
    className="grid grid-cols-1 md:grid-cols-2 gap-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {[
      "Dogs have a sense of time and can tell how long you've been gone.",
      "A dog's nose print is unique, much like a human's fingerprint.",
      "Dalmatians are born completely white and develop their spots as they grow older.",
      "The Basenji is the only breed of dog that can't bark, but they can yodel!",
      "A dog's average body temperature is 101.2°F (38.4°C).",
      "Dogs can understand up to 250 words and gestures."
    ].map((fact, index) => (
      <motion.li 
        key={index}
        className="bg-secondary p-4 rounded-lg shadow"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <Info className="h-5 w-5 inline-block mr-2 text-primary" />
        {fact}
      </motion.li>
    ))}
  </motion.ul>
);

const CareTips = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-semibold text-center mb-4">Essential Dog Care Tips</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "Balanced Diet", content: "Provide a balanced diet appropriate for your dog's age, size, and activity level." },
        { title: "Regular Exercise", content: "Ensure your dog gets regular exercise through walks, playtime, and activities." },
        { title: "Veterinary Check-ups", content: "Schedule regular check-ups with a veterinarian for vaccinations and health screenings." },
        { title: "Grooming", content: "Groom your dog regularly, including brushing their coat and teeth." },
        { title: "Mental Stimulation", content: "Offer mental stimulation through training, puzzles, and interactive toys." },
        { title: "Love and Attention", content: "Spend quality time with your dog, showing affection and building a strong bond." }
      ].map((tip, index) => (
        <motion.div
          key={index}
          className="bg-primary/5 p-6 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            <Heart className="h-5 w-5 mr-2 text-primary" />
            {tip.title}
          </h4>
          <p>{tip.content}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const Index = () => {
  const [activeTab, setActiveTab] = useState("breeds");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Paw-some Dog World
        </motion.h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="breeds" className="text-lg"><Paw className="mr-2 h-5 w-5" /> Dog Breeds</TabsTrigger>
            <TabsTrigger value="facts" className="text-lg"><Info className="mr-2 h-5 w-5" /> Fun Facts</TabsTrigger>
            <TabsTrigger value="care" className="text-lg"><Heart className="mr-2 h-5 w-5" /> Care Tips</TabsTrigger>
          </TabsList>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TabsContent value="breeds" className="mt-6">
              <DogBreeds />
            </TabsContent>
            <TabsContent value="facts" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Fascinating Dog Facts</CardTitle>
                </CardHeader>
                <CardContent>
                  <FunFacts />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="care" className="mt-6">
              <Card>
                <CardContent>
                  <CareTips />
                </CardContent>
              </Card>
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
