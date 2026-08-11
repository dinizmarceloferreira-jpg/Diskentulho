import * as React from "react";
import { ChevronDown } from "lucide-react";

type AccordionContextType = {
  activeItem: string | null;
  toggleItem: (value: string) => void;
};

const AccordionContext = React.createContext<AccordionContextType>({
  activeItem: null,
  toggleItem: () => {},
});

export function Accordion({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  const toggleItem = (value: string) => {
    setActiveItem((prev) => (prev === value ? null : value));
  };

  return (
    <AccordionContext.Provider value={{ activeItem, toggleItem }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

type AccordionItemProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
};

const ItemContext = React.createContext<string>("");

export function AccordionItem({ value, children, className = "" }: AccordionItemProps) {
  const { activeItem } = React.useContext(AccordionContext);
  const isOpen = activeItem === value;

  return (
    <ItemContext.Provider value={value}>
      <div className={`${className} ${isOpen ? "data-[state=open]" : "data-[state=closed]"}`}>
        {children}
      </div>
    </ItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { activeItem, toggleItem } = React.useContext(AccordionContext);
  const itemValue = React.useContext(ItemContext);
  const isOpen = activeItem === itemValue;

  return (
    <button
      type="button"
      onClick={() => toggleItem(itemValue)}
      className={`w-full flex items-center justify-between transition-all cursor-pointer ${className}`}
    >
      <span>{children}</span>
      <ChevronDown
        className={`w-5 h-5 flex-shrink-0 text-emerald-400 transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}

export function AccordionContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { activeItem } = React.useContext(AccordionContext);
  const itemValue = React.useContext(ItemContext);
  const isOpen = activeItem === itemValue;

  if (!isOpen) return null;

  return <div className={`animate-fadeIn ${className}`}>{children}</div>;
}
