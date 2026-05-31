import React from "react";
import { IconType } from "react-icons";

type LinkCardProps = {
  title: string;
  subtitle?: string;
  url?: string;
  bgColor?: string;
  textColor?: string;
  accentColor?: string;
  // הטיפוס תומך כעת ברכיב, אלמנט JSX מוכן, או פונקציה שמחזירה רכיב
  icon?:
    | IconType
    | React.ComponentType
    | React.ReactNode
    | (() => React.ReactNode);
  isOpen: boolean;
  onToggle: () => void;
  details?: React.ReactNode;
};

const LinkCard: React.FC<LinkCardProps> = ({
  title,
  subtitle,
  url,
  bgColor = "#efe7da",
  textColor = "#1f1f1f",
  accentColor = "#5a5a2a",
  icon,
  isOpen,
  onToggle,
  details,
}) => {
  // פונקציית עזר חכמה שמפענחת ומציגה את האייקון לפי הסוג שלו
  const renderIcon = () => {
    if (!icon) return null;

    // מקרה 1: אם מדובר בפונקציה (למשל פונקציית SVG: () => <svg>...</svg>)
    if (typeof icon === "function") {
      // בודקים אם זו קומפוננטת ריאקט (מתחילה באות גדולה או פונקציה רגילה)
      // ליתר ביטחון, ננסה לרנדר כקומפוננטה, ואם לא - נפעיל כפונקציה
      const IconComponent = icon as React.ComponentType;
      // אם השם של הפונקציה ריק או מתחיל באות קטנה, נפעיל אותה ישירות
      if (icon.name && icon.name[0] === icon.name[0].toUpperCase()) {
        return <IconComponent />;
      }
      return (icon as Function)();
    }

    // מקרה 2: אם זה כבר אלמנט ריאקט מוכן (למשל <FaAppleAlt /> או <svg>...)
    if (React.isValidElement(icon)) {
      return icon;
    }

    // מקרה מילוט (Fallback)
    return null;
  };

  return (
    <div
      className="w-full overflow-hidden rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_16px_32px_rgba(0,0,0,0.10)]"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between px-4 py-4"
      >
        <div className="flex items-center gap-3">
          <div
            className="h-12 w-[10px] rounded-full"
            style={{ backgroundColor: accentColor }}
          />

          {icon ? (
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm border border-black/10"
              style={{ backgroundColor: "rgba(255,255,255,0.65)" }}
            >
              <div
                className="text-xl flex items-center justify-center"
                style={{ color: accentColor }}
              >
                {renderIcon()}
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex-1 text-center">
          <div className="text-lg font-bold tracking-tight">{title}</div>
          {subtitle ? (
            <div className="mt-1 text-sm text-black/50">{subtitle}</div>
          ) : null}
        </div>

        <div className="flex items-center justify-center w-8 text-4xl font-bold text-black/70">
          ›
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-2 border-t border-black/5 text-right">
            {details}
            {url ? (
              <div className="mt-4">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-2 text-sm font-semibold border border-black/10 hover:border-black/20 hover:bg-black/5"
                >
                  פתיחת קישור
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
