import React from "react";
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Summary cards component displays financial overview with balance, income, and expenses
const SummaryCards = ({ balance = 0, totalIncome = 0, totalExpenses = 0 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Total Balance Card - Shows current financial status */}
      <Card className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium opacity-90">
            Total Balance
          </CardTitle>
          <DollarSign className="h-4 w-4 opacity-90" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${balance.toLocaleString()}</div>
          <p className="text-xs opacity-90 mt-1">Current financial status</p>
        </CardContent>
      </Card>

      {/* Total Income Card - Shows money earned */}
      <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium opacity-90">
            Total Income
          </CardTitle>
          <TrendingUp className="h-4 w-4 opacity-90" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${totalIncome.toLocaleString()}
          </div>
          <p className="text-xs opacity-90 mt-1">Money earned this period</p>
        </CardContent>
      </Card>

      {/* Total Expenses Card - Shows money spent */}
      <Card className="bg-gradient-to-r from-rose-500 to-pink-600 text-white border-0 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium opacity-90">
            Total Expenses
          </CardTitle>
          <TrendingDown className="h-4 w-4 opacity-90" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${totalExpenses.toLocaleString()}
          </div>
          <p className="text-xs opacity-90 mt-1">Money spent this period</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCards;
