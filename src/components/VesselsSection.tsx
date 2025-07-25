import VesselCard from "./VesselCard";
import { Anchor } from "lucide-react";

const VesselsSection = () => {
  // Dados extraídos das imagens fornecidas
  const vesselsData = [
    {
      name: "Alexandre de Gusmão",
      totalHours: 349,
      averageMonthlyHours: 349,
      employeesCount: 3,
      topEmployees: [
        { name: "Willian Santanna de Araujo", hours: 181, role: "Encarregado Limpeza de Coifas e Dutos" },
        { name: "Alexandro da Silva Soares", hours: 84, role: "Técnico Sênior HVAC-R" },
        { name: "Washington Tiago Batista", hours: 84, role: "Técnico Sênior HVAC-R" }
      ],
      yearComparison: { "2024": 0, "2025": 349 },
      growth: 100
    },
    {
      name: "Almirante Tamandaré", 
      totalHours: 254,
      averageMonthlyHours: 254,
      employeesCount: 2,
      topEmployees: [
        { name: "Cleiton Sant Anna de Souza", hours: 182, role: "Encarregado Limpeza de Coifas e Dutos" },
        { name: "Fábio José de Aguiar Motta", hours: 72, role: "Técnico Sênior HVAC-R" }
      ],
      yearComparison: { "2024": 0, "2025": 254 },
      growth: 100
    },
    {
      name: "Capixaba",
      totalHours: 60,
      averageMonthlyHours: 60, 
      employeesCount: 1,
      topEmployees: [
        { name: "Jailton Ricardo de Jesus", hours: 60, role: "Técnico Sênior HVAC-R" }
      ],
      yearComparison: { "2024": 60, "2025": 0 },
      growth: -100
    },
    {
      name: "Cidade de Anchieta",
      totalHours: 913,
      averageMonthlyHours: 913,
      employeesCount: 8,
      topEmployees: [
        { name: "Washington Tiago Batista", hours: 168, role: "Encarregado Limpeza de Coifas e Dutos" },
        { name: "Allan Perenzin Marques da Silva", hours: 156, role: "Mecânico HVAC-R" },
        { name: "Fábio José de Aguiar Motta", hours: 156, role: "Técnico Sênior HVAC-R" }
      ],
      yearComparison: { "2024": 597, "2025": 316 },
      growth: -47
    },
    {
      name: "Cidade de Ilha Bela",
      totalHours: 1012,
      averageMonthlyHours: 1012,
      employeesCount: 5,
      topEmployees: [
        { name: "Fábio José de Aguiar Motta", hours: 600, role: "Técnico Sênior HVAC-R" },
        { name: "Cleiton Augusto Fraga Chaves", hours: 158, role: "Encarregado Limpeza de Coifas e Dutos" },
        { name: "Allan Perenzin Marques da Silva", hours: 156, role: "Técnico Sênior HVAC-R" }
      ],
      yearComparison: { "2024": 329, "2025": 683 },
      growth: 108
    },
    {
      name: "Cidade de Maricá",
      totalHours: 1342,
      averageMonthlyHours: 1342,
      employeesCount: 6,
      topEmployees: [
        { name: "Gabriel Souza da Silva", hours: 576, role: "Técnico Sênior HVAC-R" },
        { name: "Willian Santanna de Araujo", hours: 222, role: "Encarregado Limpeza de Coifas e Dutos" },
        { name: "Josilei Acacio Sabino", hours: 193, role: "Mecânico HVAC-R" }
      ],
      yearComparison: { "2024": 859, "2025": 483 },
      growth: -44
    },
    {
      name: "Cidade de Paraty",
      totalHours: 268,
      averageMonthlyHours: 268,
      employeesCount: 2,
      topEmployees: [
        { name: "Luis Felipe Azevedo de Souza", hours: 156, role: "Encarregado Limpeza de Coifas e Dutos" },
        { name: "Welton Candido Batista da Silva", hours: 112, role: "Técnico Sênior HVAC-R" }
      ],
      yearComparison: { "2024": 268, "2025": 0 },
      growth: -100
    },
    {
      name: "Cidade de Saquarema",
      totalHours: 692,
      averageMonthlyHours: 692,
      employeesCount: 4,
      topEmployees: [
        { name: "Alexandro da Silva Soares", hours: 256, role: "Técnico Sênior HVAC-R" },
        { name: "Antonio Marco Camilo", hours: 192, role: "Encarregado Limpeza de Coifas e Dutos" },
        { name: "Fernando Costa Souza", hours: 168, role: "Técnico Sênior HVAC-R" }
      ],
      yearComparison: { "2024": 332, "2025": 360 },
      growth: 8
    },
    {
      name: "Espírito Santo",
      totalHours: 689,
      averageMonthlyHours: 689,
      employeesCount: 6,
      topEmployees: [
        { name: "Allan Perenzin Marques da Silva", hours: 288, role: "Mecânico HVAC-R" },
        { name: "Antonio Marco Camilo", hours: 130, role: "Encarregado Limpeza de Coifas e Dutos" },
        { name: "Fernando Oliveira de Souza", hours: 84, role: "Técnico Sênior HVAC-R" }
      ],
      yearComparison: { "2024": 573, "2025": 116 },
      growth: -80
    },
    {
      name: "Sepetiba",
      totalHours: 624,
      averageMonthlyHours: 624,
      employeesCount: 7,
      topEmployees: [
        { name: "Victor Hugo Cezareth Mattos", hours: 181, role: "Encarregado Limpeza de Coifas e Dutos" },
        { name: "Philipe Gomes Pinto", hours: 120, role: "Técnico Sênior HVAC-R" },
        { name: "Welton Candido Batista da Silva", hours: 120, role: "Técnico Sênior HVAC-R" }
      ],
      yearComparison: { "2024": 328, "2025": 296 },
      growth: -10
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Anchor className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-primary-dark">
              Análise Detalhada por Embarcação
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Desempenho individual de cada embarcação, destacando os principais colaboradores, 
            distribuição de carga horária e tendências de crescimento operacional.
          </p>
        </div>

        {/* Vessels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {vesselsData.map((vessel, index) => (
            <VesselCard 
              key={vessel.name} 
              vessel={vessel} 
              index={index}
            />
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 text-center p-8 bg-white rounded-xl shadow-soft">
          <h3 className="text-2xl font-bold text-primary-dark mb-4">
            Resumo Consolidado
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-3xl font-bold text-primary">{vesselsData.reduce((sum, v) => sum + v.totalHours, 0).toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Total de Horas</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">{vesselsData.reduce((sum, v) => sum + v.employeesCount, 0)}</p>
              <p className="text-sm text-muted-foreground">Colaboradores Ativos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-light">{Math.round(vesselsData.reduce((sum, v) => sum + v.totalHours, 0) / vesselsData.length)}</p>
              <p className="text-sm text-muted-foreground">Média por Embarcação</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-dark">{vesselsData.length}</p>
              <p className="text-sm text-muted-foreground">Embarcações Ativas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VesselsSection;