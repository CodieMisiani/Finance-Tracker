import React from "react";
import { DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <>
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side: Logo and app title */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  FinanceTracker
                </h1>
                <p className="text-sm text-slate-500">
                  Manage your finances with ease
                </p>
              </div>
            </div>
            {/* Right side: Current month/year badge */}
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-700 hover:bg-blue-200"
            >
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </Badge>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
