import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ReportHeader from "@/components/ReportHeader";
import OverviewSection from "@/components/OverviewSection";
import VesselsSection from "@/components/VesselsSection";
import ConclusionsSection from "@/components/ConclusionsSection";

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    { component: <ReportHeader />, title: "Capa" },
    { component: <OverviewSection />, title: "Visão Geral" },
    { component: <VesselsSection />, title: "Análise por Embarcação" },
    { component: <ConclusionsSection />, title: "Conclusões" }
  ];

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="relative">
      {/* Navigation - Moved to bottom right */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col items-center space-y-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-6 shadow-strong">
          <Button 
            variant="outline" 
            size="sm"
            onClick={prevSection}
            disabled={currentSection === 0}
            className="rounded-full w-10 h-10 p-0"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex flex-col space-y-2">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSection(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSection 
                    ? 'bg-primary scale-110' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="sm"
            onClick={nextSection}
            disabled={currentSection === sections.length - 1}
            className="rounded-full w-10 h-10 p-0"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Section Content */}
      <div className="transition-all duration-500 ease-in-out">
        {sections[currentSection].component}
      </div>
      
      {/* Section Indicator */}
      <div className="fixed bottom-6 left-6 z-50 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-soft">
        <p className="text-sm font-medium text-primary">
          {currentSection + 1} / {sections.length} - {sections[currentSection].title}
        </p>
      </div>
    </div>
  );
};

export default Index;
