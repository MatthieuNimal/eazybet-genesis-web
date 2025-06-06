
import React from "react";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface LanguageSwitcherProps {
  onChangeLanguage: (lang: string) => void;
  currentLanguage: string;
}

const LanguageSwitcher = ({ onChangeLanguage, currentLanguage }: LanguageSwitcherProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex gap-1 items-center bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/10">
          <Globe className="w-4 h-4" />
          <span>{currentLanguage === 'en' ? 'EN' : 'FR'}</span>
          <img 
            src={currentLanguage === 'en' 
              ? "https://flagcdn.com/w20/gb.png" 
              : "https://flagcdn.com/w20/fr.png"} 
            alt={currentLanguage === 'en' ? "English" : "Français"} 
            className="w-4 h-auto ml-1" 
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black/80 backdrop-blur-md border border-white/20 text-white">
        <DropdownMenuItem 
          onClick={() => onChangeLanguage('en')}
          className={`hover:bg-white/10 ${currentLanguage === 'en' ? 'text-eazybet-purple' : ''} flex items-center gap-2`}
        >
          <img src="https://flagcdn.com/w20/gb.png" alt="English" className="w-4 h-auto" />
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => onChangeLanguage('fr')}
          className={`hover:bg-white/10 ${currentLanguage === 'fr' ? 'text-eazybet-purple' : ''} flex items-center gap-2`}
        >
          <img src="https://flagcdn.com/w20/fr.png" alt="Français" className="w-4 h-auto" />
          Français
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
