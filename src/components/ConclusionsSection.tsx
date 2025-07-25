import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Target, Users, BarChart3 } from "lucide-react";

const ConclusionsSection = () => {
  return (
    <div className="min-h-screen bg-gradient-hero p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 text-white">
          <h2 className="text-4xl font-bold">
            Conclusões e Recomendações Estratégicas
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto">
            Análise consolidada dos resultados operacionais e direcionamentos 
            para otimização da gestão de recursos humanos e operacional.
          </p>
        </div>

        {/* Key Findings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Positive Trends */}
          <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-strong border-0">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-green-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">Pontos Positivos</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800">Alto Crescimento</p>
                    <p className="text-sm text-green-700">
                      <strong>Cidade de Ilha Bela</strong> apresentou crescimento de 108% (329h → 683h)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800">Produtividade Elevada</p>
                    <p className="text-sm text-green-700">
                      Fábio José de Aguiar Motta lidera com <strong>600h</strong> em uma única embarcação
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800">Diversificação Técnica</p>
                    <p className="text-sm text-green-700">
                      Equilibrio entre especialidades: HVAC-R, Mecânica e Limpeza
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Areas for Improvement */}
          <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-strong border-0">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-orange-800">Pontos de Atenção</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
                  <TrendingDown className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-orange-800">Redução Significativa</p>
                    <p className="text-sm text-orange-700">
                      <strong>Espírito Santo</strong> teve queda de 80% (573h → 116h)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-orange-800">Operações Suspensas</p>
                    <p className="text-sm text-orange-700">
                      <strong>Capixaba e Cidade de Paraty</strong> sem atividade em 2025
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
                  <Users className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-orange-800">Dependência Crítica</p>
                    <p className="text-sm text-orange-700">
                      Concentração de horas em poucos técnicos especializados
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Strategic Recommendations */}
        <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-strong border-0">
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark">Recomendações Estratégicas</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <Badge className="bg-primary text-white">Gestão de Recursos</Badge>
                <div className="space-y-3">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary-dark mb-2">Redistribuição Estratégica</h4>
                    <p className="text-sm text-muted-foreground">
                      Realocar equipe das embarcações inativas para as de alta demanda
                    </p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary-dark mb-2">Backup de Especialistas</h4>
                    <p className="text-sm text-muted-foreground">
                      Desenvolver equipe de reserva para técnicos críticos
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Badge className="bg-accent text-white">Capacitação</Badge>
                <div className="space-y-3">
                  <div className="p-4 bg-accent/5 rounded-lg">
                    <h4 className="font-semibold text-primary-dark mb-2">Treinamento Cruzado</h4>
                    <p className="text-sm text-muted-foreground">
                      Capacitar técnicos em múltiplas especialidades
                    </p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg">
                    <h4 className="font-semibold text-primary-dark mb-2">Mentoria Técnica</h4>
                    <p className="text-sm text-muted-foreground">
                      Programa de mentoria com top performers
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Badge className="bg-primary-light text-white">Monitoramento</Badge>
                <div className="space-y-3">
                  <div className="p-4 bg-primary-light/5 rounded-lg">
                    <h4 className="font-semibold text-primary-dark mb-2">KPIs Mensais</h4>
                    <p className="text-sm text-muted-foreground">
                      Acompanhamento mensal de produtividade por embarcação
                    </p>
                  </div>
                  <div className="p-4 bg-primary-light/5 rounded-lg">
                    <h4 className="font-semibold text-primary-dark mb-2">Alertas Proativos</h4>
                    <p className="text-sm text-muted-foreground">
                      Sistema de alertas para quedas de performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Final Summary */}
        <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-strong border-0 text-center">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <BarChart3 className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary-dark">Próximos Passos</h3>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A análise evidencia um cenário operacional dinâmico com oportunidades claras de otimização. 
                A implementação das recomendações estratégicas, focada na redistribuição eficiente de recursos 
                e no desenvolvimento contínuo da equipe técnica, permitirá maximizar a produtividade operacional 
                e garantir a continuidade dos serviços em todas as embarcações da frota SUPPLYMARINE.
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-4 pt-6">
              <Badge variant="outline" className="text-primary border-primary">
                Implementação: Q1 2025
              </Badge>
              <Badge variant="outline" className="text-primary border-primary">
                Revisão: Trimestral
              </Badge>
              <Badge variant="outline" className="text-primary border-primary">
                Meta: +15% Eficiência
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ConclusionsSection;