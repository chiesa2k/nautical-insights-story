import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ship, Users, Clock, TrendingUp } from "lucide-react";

interface Employee {
  name: string;
  hours: number;
  role: string;
}

interface VesselData {
  name: string;
  totalHours: number;
  averageMonthlyHours: number;
  employeesCount: number;
  topEmployees: Employee[];
  yearComparison: {
    "2024": number;
    "2025": number;
  };
  growth: number;
}

interface VesselCardProps {
  vessel: VesselData;
  index: number;
}

const VesselCard = ({ vessel, index }: VesselCardProps) => {
  const isPositiveGrowth = vessel.growth > 0;
  
  return (
    <Card className="p-8 shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 border-l-primary">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-primary rounded-lg">
              <Ship className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-dark">{vessel.name}</h3>
              <Badge variant="secondary" className="mt-1">
                Embarcação #{index + 1}
              </Badge>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-3xl font-bold text-primary">{vessel.totalHours}h</p>
            <p className="text-sm text-muted-foreground">Total de Horas</p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-secondary/30 rounded-lg">
            <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-xl font-bold text-primary">{vessel.averageMonthlyHours}</p>
            <p className="text-xs text-muted-foreground">Média Mensal</p>
          </div>
          
          <div className="text-center p-4 bg-secondary/30 rounded-lg">
            <Users className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-xl font-bold text-primary">{vessel.employeesCount}</p>
            <p className="text-xs text-muted-foreground">Colaboradores</p>
          </div>
          
          <div className="text-center p-4 bg-secondary/30 rounded-lg">
            <TrendingUp className={`w-6 h-6 mx-auto mb-2 ${isPositiveGrowth ? 'text-green-600' : 'text-red-600'}`} />
            <p className={`text-xl font-bold ${isPositiveGrowth ? 'text-green-600' : 'text-red-600'}`}>
              {isPositiveGrowth ? '+' : ''}{vessel.growth}%
            </p>
            <p className="text-xs text-muted-foreground">Crescimento</p>
          </div>
        </div>

        {/* Top Employees */}
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-4">Principais Colaboradores</h4>
          <div className="space-y-3">
            {vessel.topEmployees.slice(0, 3).map((employee, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                    idx === 0 ? 'bg-primary' : idx === 1 ? 'bg-accent' : 'bg-primary-light'
                  }`}>
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{employee.name}</p>
                    <p className="text-sm text-muted-foreground">{employee.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{employee.hours}h</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Year Comparison */}
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-4">Comparação Anual</h4>
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">2024</span>
                <span className="text-sm text-muted-foreground">{vessel.yearComparison["2024"]}h</span>
              </div>
              <div className="w-full bg-secondary h-3 rounded-full">
                <div 
                  className="bg-primary-light h-3 rounded-full transition-all duration-500" 
                  style={{ width: `${(vessel.yearComparison["2024"] / Math.max(vessel.yearComparison["2024"], vessel.yearComparison["2025"])) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">2025</span>
                <span className="text-sm text-muted-foreground">{vessel.yearComparison["2025"]}h</span>
              </div>
              <div className="w-full bg-secondary h-3 rounded-full">
                <div 
                  className="bg-primary h-3 rounded-full transition-all duration-500" 
                  style={{ width: `${(vessel.yearComparison["2025"] / Math.max(vessel.yearComparison["2024"], vessel.yearComparison["2025"])) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VesselCard;