import React, { useState } from "react";
import { BookOpen, Check, ArrowLeft } from "lucide-react";

// عدّل هذا الرابط لما تجهز رابط الدفع من Stripe (Payment Link)
const STRIPE_PAYMENT_LINK = "";

const PRODUCT = {
  title: "إنشاء متجر إلكتروني",
  desc: "خدمة تصميم وبناء متجر إلكتروني كامل يناسب نشاطك، مع صفحة منتجات وسلة شراء وربط دفع.",
  price: 25,
  details: "تسليم خلال أيام",
};

export default function App() {
  const [showNotice, setShowNotice] = useState(false);

  const handleBuy = () => {
    if (STRIPE_PAYMENT_LINK) {
      window.location.href = STRIPE_PAYMENT_LINK;
    } else {
      setShowNotice(true);
    }
  };

  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <BookOpen size={22} color="#B9834E" />
          <h1>هدفك للتجارة</h1>
        </div>
      </header>

      <main className="main">
        <div className="card">
          <span className="badge">خدمة</span>
          <h2 className="title">{PRODUCT.title}</h2>
          <p className="desc">{PRODUCT.desc}</p>
          <p className="meta">{PRODUCT.details}</p>
          <div className="row">
            <span className="price">{PRODUCT.price} ر.س</span>
            <button className="buyBtn" onClick={handleBuy}>
              اشترِ الآن <ArrowLeft size={16} />
            </button>
          </div>
        </div>

        {showNotice && (
          <div className="notice">
            <Check size={16} />
            رابط الدفع غير مفعّل بعد — سيتم تفعيله قريباً.
          </div>
        )}
      </main>

      <footer className="footer">© هدفك للتجارة</footer>
    </div>
  );
}
