import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

const StatCard = ({ title, value, subtitle, icon, trend, className = "" }: StatCardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-success";
      case "down":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className={`card-gradient p-6 hover:shadow-primary/10 transition-all duration-300 ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-2xl font-bold text-foreground mb-2">{value}</p>
          {subtitle && (
            <p className={`text-sm ${getTrendColor()}`}>{subtitle}</p>
          )}
        </div>
        {icon && (
          <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};

export default StatCard;