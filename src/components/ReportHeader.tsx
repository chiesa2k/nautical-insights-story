import { Card } from "@/components/ui/card";
import { Ship, Calendar, Users } from "lucide-react";

const ReportHeader = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-8">
      <Card className="max-w-4xl w-full bg-white/95 backdrop-blur-sm shadow-strong border-0 p-12 text-center">
        <div className="space-y-8">
          {/* Logo placeholder */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-medium">
              <Ship className="w-12 h-12 text-white" />
            </div>
          </div>
          
          {/* Company Name */}
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-primary-dark">
              SUPPLYMARINE
            </h1>
            <p className="text-xl text-primary-light font-medium">
              HVAC-R Naval & Offshore
            </p>
          </div>
          
          {/* Report Title */}
          <div className="space-y-4 py-8">
            <h2 className="text-3xl font-bold text-foreground">
              Relatório de Carga Horária por Funcionário
            </h2>
            <p className="text-lg text-muted-foreground">
              Análise Detalhada das Operações Técnicas em Embarcações
            </p>
          </div>
          
          {/* Key Metrics Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="flex items-center justify-center space-x-3 p-4 bg-secondary/30 rounded-lg">
              <Ship className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Embarcações</p>
                <p className="text-xl font-bold text-primary">10</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4 bg-secondary/30 rounded-lg">
              <Calendar className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Período</p>
                <p className="text-xl font-bold text-primary">2024/2025</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4 bg-secondary/30 rounded-lg">
              <Users className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Técnicos</p>
                <p className="text-xl font-bold text-primary">50+</p>
              </div>
            </div>
          </div>
          
          {/* Date */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground">
              Relatório gerado em {new Date().toLocaleDateString('pt-BR', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ReportHeader;