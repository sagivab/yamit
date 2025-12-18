import React, { useState } from "react";
import LinkCard from "./LinkCard";

function YamitPage() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const items = [
    {
      key: "herbal",
      title: "טיפול בצמחי מרפא",
      bgColor: "#CFC4B2",
      details: (
        <p className="text-lg leading-6">
          פורמולות צמחי מרפא הן תמציות המורכבות מצמחים פעילים, שנרקחים בקפידה
          ומשלבים ידע מסורתי עם הסתכלות הוליסטית על הגוף והנפש. כל פורמולה
          מותאמת באופן אישי לפי הצורך, השלב בחיים והאיזון שהגוף מבקש. הצמחים
          נבחרים לאחר תשאול והקשבה, ונרקחים במיוחד עבורך, במטרה לתמוך בתהליכי
          ריפוי טבעיים, לחזק מערכות גוף ולהשיב תחושת חיוניות ואיזון
        </p>
      ),
      iconHtml: '<span className="material-icons">eco</span>',
    },
    {
      key: "cosmetics",
      title: "קוסמטיקה טבעית",
      bgColor: "#935626",
      details: (
        <p className="text-lg leading-6">
          אני יוצרת מוצרי קוסמטיקה טבעית בעבודת יד, מתוך הקשבה לעור ולמה שהוא
          באמת צריך.כל מוצר נרקח במיוחד עבורך, משילוב מדויק של רכיבים טבעיים
          וצמחי מרפא, כדי להזין, להרגיע ולחזק את העור בצורה טבעית ובריאה.
        </p>
      ),
    },
    {
      key: "biz-community",
      title: "תוכנית ליווי תזונתי/בריאותי LYP",
      bgColor: "#686128",
      details: (
        <p className="text-lg leading-6">
          תוכנית LYP היא תוכנית ליווי המשלבת מיצוי מרוכז של פירות וירקות
          בקפסולות, יחד עם ליווי אישי וקבוצתי. המוצרים מבוססים על רכיבים מן
          הטבע, ומאפשרים תמיכה יומיומית בגוף גם בתוך שגרת החיים העמוסה. התוכנית
          מלווה אותך בצעדים פשוטים ומעשיים לשיפור התזונה, לאיזון מערכות הגוף
          ולחיזוק תחושת החיוניות, בליווי, הקשבה והכוונה לאורך כל הדרך.
        </p>
      ),
    },
    {
      key: "work-from-phone",
      title: "עסק מהנייד/עבודה מהבית",
      bgColor: "#81361A",
      details: (
        <p className="text-lg leading-6">
          אני מזמינה נשים שרוצות ליצור שינוי תעסוקתי, לבנות עסק עצמאי מהבית
          ולהיות חלק מעשייה עם ערך. ההזדמנות משלבת עבודה גמישה, ליווי אישי
          וקבוצתי, וכלים לבניית עסק מתוך חיבור, צמיחה והתפתחות אישית. העסק מתאים
          לנשים שמחפשות חופש, משמעות והכנסה, לצד קהילה תומכת וליווי צמוד לאורך
          הדרך
        </p>
      ),
    },
    {
      key: "lectures",
      title: "הרצאות וסדנאות",
      bgColor: "#935626",
      details: (
        <p className="text-lg leading-6">
          אני מעבירה הרצאות וסדנאות חווייתיות שמחברות ידע מעשי עם חיי היומיום.
          ההרצאות עוסקות באורח חיים בריא, תזונה, איזון והרגלים פשוטים שניתן
          ליישם כבר מהיום. הסדנאות מתמקדות בקוסמטיקה טבעית – היכרות עם חומרי גלם
          מן הטבע, רקיחה בעבודת יד ויצירה של מוצרי טיפוח טבעיים, תוך חוויה,
          למידה וחיבור לעצמנו
        </p>
      ),
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Open Sans",
        background: "linear-gradient(to bottom, #CFC4B2, #e9e2d6)",
        color: "#151515",
      }}
      className="min-h-screen max-w-screen-sm mx-auto flex flex-col items-center px-10 py-10 relative"
    >
      <div className="relative w-full" style={{ borderColor: "#686128" }}>
        <img
          src="/yamit.jpeg"
          alt="Yamit profile"
          className="rounded-full w-full h-[345px] object-cover"
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
          href="https://chat.whatsapp.com/L2Zkd9td5Fs5FDehcpnypD"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-md min-h-24 flex items-center transition-transform opacity-90 hover:scale-[1.02] hover:opacity-100 focus:outline-none"
          style={{ backgroundColor: "#686128", color: "#151515" }}
        >
          <div className="p-4 flex flex-col flex-1 text-center">
            <span className="font-bold text-base">
              להצטרפות לקהילת הבריאות החינמית שלי
            </span>
          </div>
        </a>

        {items.map((it) => (
          <LinkCard
            key={it.key}
            title={it.title}
            bgColor={it.bgColor}
            textColor="#151515"
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
        <div className="text-sm mb-4" style={{ color: "#151515" }}>
          טלפון:{" "}
          <a
            href="tel:+972546197799"
            className="underline underline-offset-4"
            style={{ color: "#935626" }}
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
              viewBox="0 0 32 32"
              width="24"
              height="24"
              fill="#CFC4B2"
              className="translate-x-[1px]"
            >
              <path d="M16 3C8.8 3 3 8.8 3 16c0 2.8.7 5.5 2.1 7.9L3 29l5.3-2.1A13 13 0 1 0 16 3z" />
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
