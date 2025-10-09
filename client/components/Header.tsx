import { useState } from "react";
import {
  ChevronDown,
  Search,
  User,
  Globe,
  DollarSign,
  Info,
} from "lucide-react";

export default function Header() {
  return (
    <header className="w-full">
      {/* Travel Advisory Bar */}
      <div className="bg-cebu-secondary text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-yellow-400" />
              <span className="font-bold font-noto-sans">
                Travel Advisory:
              </span>
              <span className="font-noto-sans">
                Power Bank Usage and Carriage Guidelines
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <button className="p-1">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/fe14f4aeec14575a0f13c749dfcd2032814dfe1c?width=36"
                    alt="Previous"
                    className="w-4 h-4"
                  />
                </button>
                <button className="p-1">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/d75ebd537648fef1244abf5e30affefcd52300d7?width=36"
                    alt="Next"
                    className="w-4 h-4"
                  />
                </button>
                <button className="text-white hover:underline ml-2">
                  <span className="font-noto-sans">View all</span>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-gray-300" />
                  <span className="text-blue-200 font-noto-sans">PHP</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-300" />
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  <span className="font-noto-sans">English</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
                <button className="font-bold font-noto-sans hover:underline">
                  Help
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/00e6747c571eb8b3b4beadfb870bd87d2af5c26f?width=412"
                alt="Cebu Pacific"
                className="h-16 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#"
                className="text-cebu-blue-600 font-bold font-noto-sans text-sm hover:text-cebu-blue-500 transition-colors px-6 py-6"
              >
                Book
              </a>
              <a
                href="#"
                className="text-cebu-blue-600 font-bold font-noto-sans text-sm hover:text-cebu-blue-500 transition-colors px-6 py-6"
              >
                Manage
              </a>
              <a
                href="#"
                className="text-cebu-blue-600 font-bold font-noto-sans text-sm hover:text-cebu-blue-500 transition-colors px-6 py-6"
              >
                Travel Info
              </a>
              <a
                href="#"
                className="text-cebu-blue-600 font-bold font-noto-sans text-sm hover:text-cebu-blue-500 transition-colors px-6 py-6"
              >
                Explore
              </a>
              <a
                href="#"
                className="text-cebu-blue-600 font-bold font-noto-sans text-sm hover:text-cebu-blue-500 transition-colors px-6 py-6"
              >
                About
              </a>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center gap-2 text-cebu-blue-600 font-bold font-noto-sans text-sm hover:text-cebu-blue-500 transition-colors px-6 py-6">
                <User className="w-6 h-6" />
                Log in
              </button>
              <button className="p-2 text-cebu-blue-600 hover:text-cebu-blue-500 transition-colors">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
