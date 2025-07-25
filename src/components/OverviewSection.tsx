import { Card } from "@/components/ui/card";
import { BarChart3, TrendingUp, Clock, Award } from "lucide-react";

const OverviewSection = () => {
  const totalHours = 6248; // Soma aproximada de todas as embarcações
  const avgHoursPerVessel = 625;
  const topPerformer = "Cidade de Ilha Bela";
  const totalEmployees = 47;

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-primary-dark">
            Visão Geral das Operações
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma análise consolidada do desempenho operacional em todas as embarcações 
            durante o período 2024-2025, destacando eficiência e produtividade da equipe técnica.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-gradient-primary text-white shadow-medium border-0">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <p className="text-white/80 text-sm font-medium">Total de Horas</p>
                <p className="text-3xl font-bold">{totalHours.toLocaleString()}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-accent text-white shadow-medium border-0">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <BarChart3 className="w-8 h-8" />
              </div>
              <div>
                <p className="text-white/80 text-sm font-medium">Média por Embarcação</p>
                <p className="text-3xl font-bold">{avgHoursPerVessel}h</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-primary-light text-white shadow-medium border-0">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <p className="text-white/80 text-sm font-medium">Maior Produtividade</p>
                <p className="text-lg font-bold">{topPerformer}</p>
                <p className="text-2xl font-bold">1012h</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-primary-dark text-white shadow-medium border-0">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <p className="text-white/80 text-sm font-medium">Técnicos Ativos</p>
                <p className="text-3xl font-bold">{totalEmployees}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Insights Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-primary-dark mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-3" />
              Principais Insights
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Cidade de Ilha Bela</strong> apresenta o maior volume 
                  de horas trabalhadas com 1012h, indicando alta demanda operacional.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Crescimento consistente</strong> observado entre 2024 e 2025 
                  na maioria das embarcações.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-light rounded-full mt-2"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Distribuição equilibrada</strong> de carga horária 
                  entre diferentes perfis técnicos (HVAC-R, Limpeza, etc.).
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-primary-dark mb-6 flex items-center">
              <BarChart3 className="w-6 h-6 mr-3" />
              Distribuição por Categoria
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Técnico Sênior HVAC-R</span>
                  <span className="text-sm text-muted-foreground">65%</span>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Mecânico HVAC-R</span>
                  <span className="text-sm text-muted-foreground">20%</span>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Limpeza e Coifas</span>
                  <span className="text-sm text-muted-foreground">15%</span>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full">
                  <div className="bg-primary-light h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;