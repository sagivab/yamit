import React, { useState } from "react";
import LinkCard from "./LinkCard";

function YafitnessLiinksPage() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const items = [
    {
      key: "whatsapp-community",
      title: "להצטרפות לקהילת הבריאות החינמית שלי",
      thumbnail: "/whatsapp.png",
      url: "https://chat.whatsapp.com/L2Zkd9td5Fs5FDehcpnypD",
      bgColor: "#e1f1f5",
      details: (
        <p className="text-sm leading-6">
          קהילה חינמית עם טיפים יומיומיים, מתכונים בריאים, אתגרים חודשיים ומענה לשאלות.
        </p>
      ),
    },
    {
      key: "personal-program",
      title: "תוכנית ליווי מותאמת אישית",
      bgColor: "#d7e5ca",
      details: (
        <ul className="text-sm leading-6 list-disc pr-5">
          <li>אבחון תזונתי והגדרת מטרות</li>
          <li>תפריט מותאם והרגלים יומיומיים קלים ליישום</li>
          <li>ליווי, מעקב ותמיכה לאורך הדרך</li>
        </ul>
      ),
    },
    {
      key: "herbal",
      title: "טיפול בצמחי מרפא",
      bgColor: "#cfe3c2",
      details: (
        <p className="text-sm leading-6">
          התאמה אישית של צמחי מרפא לאיזון עיכול, שינה ואנרגיה, בשילוב תזונה נכונה.
        </p>
      ),
    },
    {
      key: "lyp",
      title: "הצטרפות לתוכנית LYP",
      bgColor: "#ffe0d3",
      details: (
        <p className="text-sm leading-6">
          מסגרת תהליכית עם ליווי, צעדים ברורים ותמיכה קבוצתית לשינוי אמיתי לאורך זמן.
        </p>
      ),
    },
    {
      key: "cosmetics",
      title: "קוסמטיקה טבעית",
      bgColor: "#dce8c6",
      details: (
        <p className="text-sm leading-6">
          מוצרים טבעיים לעור זוהר ובריא, בהתאמה לצרכים אישיים ולרגישויות.
        </p>
      ),
    },
    {
      key: "biz-community",
      title: "להצטרפות לקהילת העסק שלי",
      bgColor: "#ffe0d3",
      details: (
        <p className="text-sm leading-6">
          מסלול לנשים שרוצות להצטרף לעשייה שלי, לקבל כלים ולבנות הכנסה מהבית.
        </p>
      ),
    },
    {
      key: "work-from-phone",
      title: "סק מהנייד / עבודה מהבית",
      bgColor: "#ffe0d3",
      details: (
        <p className="text-sm leading-6">
          ליווי לבניית תהליך עבודה פשוט מהנייד עם משימות קצרות ושיטת עבודה ברורה.
        </p>
      ),
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Open Sans",
        backgroundColor: "#fff",
        color: "#333",
        background: "linear-gradient(to bottom, #f0f9f6, #e0f2e9)",
      }}
      className="min-h-screen max-w-screen-sm mx-auto flex flex-col items-center px-10 py-10 relative"
    >
      <img src="/cover-img.jpg" alt="Yafitness profile" className="rounded-full w-full h-72" />
      <img
        src="/logo.jpg"
        alt="Yafitness logo"
        className="rounded-full w-72 h-36 object-cover absolute right-10 top-28"
      />
      <h1 className="text-xl font-bold">ימית קדוש</h1>
      <p className="text-center text-sm mt-2 whitespace-pre-line">
        אני ימית אסתר קדוש בת 45, נשואה ואמא לשלוש בנות מקסימות. יועצת לתזונה נכונה ומלווה לאורח חיים בריא, מטפלת בצמחי מרפא וקוסמטיקה טבעית. חיה ונושמת אורח חיים בריא ויודעת שהשליחות האמיתית שלי היא לעזור לנשים להגיע לבריאות מיטבית ולהרגיש טוב בגוף שלהן. הגישה שלי מבוססת על פשטות ושינויים הדרגתיים – בלי דיאטות קיצוניות. אני כאן כדי ללוות אותך בדרך לבריאות מאוזנת, עם כלים מעשיים שיעזרו לך להרגיש טוב יותר, לישון טוב יותר ולחיות באנרגיה גבוהה
      </p>

      <div className="mt-6 w-full max-w-md space-y-4">
        {items.map((it) => (
          <LinkCard
            key={it.key}
            title={it.title}
            // subtitle={it.subtitle}
            url={it.url}
            thumbnail={it.thumbnail}
            bgColor={it.bgColor}
            textColor="#000"
            isOpen={openKey === it.key}
            onToggle={() => setOpenKey(openKey === it.key ? null : it.key)}
            details={it.details}
          />
        ))}
      </div>

      <footer className="mt-10 text-sm text-gray-500">
        כל הזכויות שמורות לימית קדוש © 2025
      </footer>
    </div>
  );
}

export default YafitnessLiinksPage;