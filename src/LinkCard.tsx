import React from "react";

type LinkCardProps = {
  title: string;
  subtitle?: string;
  url?: string;
  thumbnail?: string;
  bgColor?: string;
  textColor?: string;
  iconHtml?: string;
  isOpen: boolean;
  onToggle: () => void;
  details?: React.ReactNode;
};

const LinkCard: React.FC<LinkCardProps> = ({
  title,
  subtitle,
  url,
  thumbnail,
  iconHtml,
  bgColor = "#fff",
  textColor = "#333",
  isOpen,
  onToggle,
  details,
}) => {
  return (
    <div
      className="rounded-lg shadow-md overflow-hidden"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full rounded-full min-h-24 flex items-center transition-transform opacity-90 hover:scale-[1.02] hover:opacity-100 focus:outline-none"
      >
        <div className="p-4 flex flex-col flex-1 text-center ">
          <span className="font-bold text-base">{title}</span>
          {subtitle && (
            <span className="text-sm mt-1 text-gray-600">{subtitle}</span>
          )}
        </div>
        {thumbnail && (
          <div className="w-24 h-24 flex justify-center flex-shrink-0">
            <img
              src={thumbnail}
              alt={title}
              className="w-10 h-10 object-cover m-auto"
            />
          </div>
        )}
        {iconHtml && (
          <div
            className="text-3xl text-blue-500 pr-4"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: iconHtml }}
          />
        )}
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 pt-2 border-t border-black/5">
            {details}
            {url && (
              <div className="mt-3">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium border border-black/10 hover:border-black/20 hover:bg-black/5"
                >
                  פתיחת קישור
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
