import React, { useEffect, useState } from "react";
import LinkCard from "./LinkCard";
import "./Home.css";

function YamitPage() {
  const [animateWA, setAnimateWA] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setAnimateWA(true), 650);
    const t2 = setTimeout(() => setAnimateWA(false), 1600);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  const LeafIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path
        d="M21 3c-6.5 0-11 2.6-13.2 7C6.4 13.1 7 17 7 17s3.9.6 7-0.8C18.4 14 21 9.5 21 3Z"
        opacity="0.95"
      />
      <path
        d="M7 21c2.8-5.8 8.4-9.8 14-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  const DropIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 2s7 8 7 13a7 7 0 1 1-14 0c0-5 7-13 7-13Z" />
    </svg>
  );

  const AppleIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path
        d="M16.5 13.2c0 4.3-3.2 8.3-7.7 8.3C5.2 21.5 3 18.7 3 15c0-4.6 3-7.6 7.4-7.6c2.6 0 4.3 1.2 5.1 2.1c1.3 1.4 1 3.3.9 3.7Z"
        opacity="0.95"
      />
      <path d="M13.7 2.8c.7 1.7-.3 3.7-2.3 4.4c-.4-1.6.7-3.5 2.3-4.4Z" />
      <path
        d="M16.6 8.8c1.1-.7 2.6-.6 3.4.2c-1.2 1-1.7 2.4-1.5 3.6c.1.9.6 1.8 1.3 2.4c-.6 1.5-1.7 2.8-3.4 3.3c-1.7.5-2.9-.3-4.2-.3c-1.3 0-2.6.9-4.1.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );

  const ChartIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path
        d="M4 20V5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M7 20V12" />
      <path d="M11 20V9" />
      <path d="M15 20V6" />
      <path d="M19 20V14" />
    </svg>
  );

  const BoardIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path
        d="M4 6h16v10H4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 20h8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 16v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
  const items = [
    {
      key: "herbal",
      title: "טיפול בצמחי מרפא",
      bgColor: "#efe7da",
      accentColor: "#5a5a2a",
      icon: <LeafIcon />,
      details: (
        <p className="text-lg leading-7 text-black/80">
          פורמולות צמחי מרפא הן תמציות המורכבות מצמחים פעילים, שנרקחים בקפידה
          ומשלבים ידע מסורתי עם הסתכלות הוליסטית על הגוף והנפש. כל פורמולה
          מותאמת באופן אישי לפי הצורך, השלב בחיים והאיזון שהגוף מבקש. הצמחים
          נבחרים לאחר תשאול והקשבה, ונרקחים במיוחד עבורך, במטרה לתמוך בתהליכי
          ריפוי טבעיים, לחזק מערכות גוף ולהשיב תחושת חיוניות ואיזון
        </p>
      ),
    },
    {
      key: "cosmetics",
      title: "קוסמטיקה טבעית",
      bgColor: "#efe7da",
      accentColor: "#8b5a2b",
      icon: <DropIcon />,
      details: (
        <p className="text-lg leading-7 text-black/80">
          אני יוצרת מוצרי קוסמטיקה טבעית בעבודת יד, מתוך הקשבה לעור ולמה שהוא
          באמת צריך. כל מוצר נרקח במיוחד עבורך, משילוב מדויק של רכיבים טבעיים
          וצמחי מרפא, כדי להזין, להרגיע ולחזק את העור בצורה טבעית ובריאה.
        </p>
      ),
    },
    {
      key: "biz-community",
      title: "תוכנית ליווי תזונתי/בריאותי LYP",
      bgColor: "#efe7da",
      accentColor: "#5a5a2a",
      icon: <AppleIcon />,
      details: (
        <p className="text-lg leading-7 text-black/80">
          תוכנית LYP היא תוכנית ליווי המשלבת מיצוי מרוכז של פירות וירקות
          בקפסולות, יחד עם ליווי אישי וקבוצתי. המוצרים מבוססים על רכיבים מן
          הטבע, ומאפשרים תמיכה יומיומית בגוף גם בתוך שגרת החיים העמוסה.
        </p>
      ),
    },
    {
      key: "work-from-phone",
      title: "עסק מהנייד/עבודה מהבית",
      bgColor: "#efe7da",
      accentColor: "#7a2f1e",
      icon: <ChartIcon />,
      details: (
        <p className="text-lg leading-7 text-black/80">
          אני מזמינה נשים שרוצות ליצור שינוי תעסוקתי, לבנות עסק עצמאי מהבית
          ולהיות חלק מעשייה עם ערך. ההזדמנות משלבת עבודה גמישה, ליווי אישי
          וקבוצתי, וכלים לבניית עסק מתוך חיבור, צמיחה והתפתחות אישית.
        </p>
      ),
    },
    {
      key: "lectures",
      title: "הרצאות וסדנאות",
      bgColor: "#efe7da",
      accentColor: "#8b5a2b",
      icon: <BoardIcon />,
      details: (
        <p className="text-lg leading-7 text-black/80">
          אני מעבירה הרצאות וסדנאות חווייתיות שמחברות ידע מעשי עם חיי היומיום.
          ההרצאות עוסקות באורח חיים בריא, תזונה, איזון והרגלים פשוטים שניתן
          ליישם כבר מהיום.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen max-w-screen-sm mx-auto flex flex-col items-center px-10 py-10 relative bg-[#e7dfd1] text-[#1f1f1f]">
      <div className="relative w-full" style={{ borderColor: "#686128" }}>
        <img
          src="/yamit.jpeg"
          alt="Yamit profile"
          className="rounded-full w-full h-[322px] object-cover"
        />

        <img
          src="/logo.jpeg"
          alt="Yamit logo"
          className="
            absolute
            bottom-2 right-2
            w-28 h-28
            opacity-75
            object-contain
            rounded-full
            p-2
            shadow-md
          "
          style={{ backgroundColor: "rgba(207,196,178,0.85)" }}
        />
      </div>

      <h1 className="text-xl font-bold mt-2" style={{ color: "#81361A" }}>
        ימית אסתר קדוש
      </h1>

      <p
        className="text-center text-sm mt-2 whitespace-pre-line"
        style={{ color: "#151515" }}
      >
        הרבליסטית - מטפלת בצמחי מרפא, רוקחת פורמולות ריפוי וקוסמטיקה טבעית.
        מלווה נשים לאורח חיים בריא, איזון הורמונלי וירידה במשקל. חיה ונושמת אורח
        חיים בריא, יודעת שהשליחות האמיתית שלי היא לעזור לנשים להגיע לבריאות
        מיטבית ולהרגיש טוב בגוף שלהן בדגש על איזון הורמונלי בתקופת המחזור ובגיל
        המעבר. הגישה שלי מבוססת על פשטות ושינויים הדרגתיים - בלי דיאטות
        קיצוניות. אני כאן כדי ללוות אותך בדרך לבריאות מאוזנת, עם כלים מעשיים
        שיעזרו לך להרגיש טוב יותר, לישון טוב יותר ולחיות באנרגיה גבוהה
      </p>

      <div className="mt-6 w-full max-w-md space-y-4">
        <a
          href="https://wa.me/972546197799"
          target="_blank"
          rel="noopener noreferrer"
          className={`
    w-11/12
    mx-auto
    rounded-2xl
    min-h-[64px]
    flex items-center justify-center gap-3
    shadow-[0_10px_25px_rgba(0,0,0,0.10)]
    transition-all duration-200
    hover:-translate-y-[2px]
    hover:shadow-[0_16px_32px_rgba(0,0,0,0.12)]
    bg-[#8b5a2b]
    text-white
    ${animateWA ? "wa-wobble" : ""}`}
        >
          <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center m-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 16 16"
              fill="white"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </div>

          <div className="text-center">
            <div className="text-xl font-bold leading-5">
              להצטרפות לקהילת הבריאות החינמית שלי
            </div>
          </div>
        </a>

        {items.map((it) => (
          <LinkCard
            key={it.key}
            title={it.title}
            bgColor={it.bgColor}
            accentColor={it.accentColor}
            icon={it.icon}
            textColor="#1f1f1f"
            isOpen={openKey === it.key}
            onToggle={() => setOpenKey(openKey === it.key ? null : it.key)}
            details={it.details}
          />
        ))}
      </div>

      <footer
        className="mt-12 w-full max-w-md rounded-2xl p-6 text-center border shadow-sm"
        style={{
          backgroundColor: "rgba(207,196,178,0.7)",
          borderColor: "#686128",
        }}
      >
        {/* Name */}
        <div className="text-lg font-bold mb-1" style={{ color: "#81361A" }}>
          ימית אסתר קדוש
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center gap-2 text-sm mb-4 text-[#151515]">
          <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-sm border border-black/10 bg-white/50">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="#81361A">
              <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3c1.2.4 2.5.6 3.9.6c.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1c0 1.4.2 2.7.6 3.9c.1.4 0 .8-.3 1.1l-2.2 1.8Z" />
            </svg>
          </div>

          <a
            href="tel:+972546197799"
            className="font-semibold underline underline-offset-4 text-[#935626]"
          >
            054-619-7799
          </a>
        </div>

        {/* Icons */}
        <div className="flex justify-center gap-4">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/yamit_ester_kadosh?igsh=MTl4aG9kZXcxY2lyeQ%3D%3D&utm_source=website"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full flex items-center justify-center transition hover:scale-110"
            style={{ backgroundColor: "#81361A" }}
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="#CFC4B2"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5z" />
              <path d="M12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7z" />
              <circle cx="17.2" cy="6.8" r="1.2" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1BoHdVGrhU/?mibextid=wwXIfr"
            target="_bla;nk"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full flex items-center justify-center transition hover:scale-110"
            style={{ backgroundColor: "#686128" }}
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" width="27" height="27" fill="#CFC4B2">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7c1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4v1.7H16l-.4 2.9h-2.1v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/972546197799"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full flex items-center justify-center transition hover:scale-110"
            style={{ backgroundColor: "#935626" }}
            aria-label="WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#CFC4B2"
              className="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:yamitty27@gmail.com"
            className="w-11 h-11 rounded-full flex items-center justify-center transition hover:scale-110"
            style={{ backgroundColor: "#151515" }}
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#CFC4B2">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-xs" style={{ color: "#935626" }}>
          כל הזכויות שמורות © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

export default YamitPage;
