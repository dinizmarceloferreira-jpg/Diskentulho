import { Truck } from "lucide-react";

type LogoProps = {
  light?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function Logo({ light = false, size = "md", className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg sm:text-xl",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
  };

  const iconSizes = {
    sm: "w-5 h-5 sm:w-6 sm:h-6",
    md: "w-6 h-6 sm:w-7 sm:h-7",
    lg: "w-8 h-8 sm:w-9 sm:h-9",
  };

  return (
    <div className={`inline-flex items-center gap-2.5 font-display font-extrabold ${sizeClasses[size]} ${className}`}>
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30">
        <Truck className={iconSizes[size]} />
      </div>
      <div className="flex flex-col leading-none">
        <span className={light ? "text-white" : "text-slate-900"}>
          DISK<span className="text-emerald-500">ENTULHO</span>
        </span>
        <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold text-emerald-400 mt-0.5">
          ITAÚNA • DESDE 1997
        </span>
      </div>
    </div>
  );
}
