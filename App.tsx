
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Rocket, 
  Briefcase, 
  Target, 
  MessageCircle, 
  ArrowLeft,
  Award,
  BookOpen,
  MousePointerClick,
  Smartphone,
  Handshake,
  Star
} from 'lucide-react';

// --- Types ---

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPro?: boolean;
}

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center text-slate-900 font-bold text-xl">DF</div>
        <span className="font-bold text-xl tracking-tighter">Dir Future</span>
      </div>
      <a 
        href="#cta" 
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full font-bold flex items-center gap-2 transition-all"
      >
        <MessageCircle size={18} />
        <span>ابدا دابا</span>
      </a>
    </div>
  </nav>
);

// Fix: Make children optional to resolve TS missing property errors in some environments
const SectionHeading = ({ children, subtitle }: { children?: React.ReactNode; subtitle?: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{children}</h2>
    {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-20 h-1.5 gradient-gold mx-auto mt-4 rounded-full"></div>
  </div>
);

const PricingCard = ({ title, price, features, isPro }: PricingCardProps) => (
  <div className={`relative p-8 rounded-3xl border-2 transition-all hover:scale-105 ${isPro ? 'border-amber-400 bg-white shadow-2xl scale-105 z-10' : 'border-slate-100 bg-slate-50 shadow-lg'}`}>
    {isPro && (
      <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-amber-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
        الأكثر طلباً
      </div>
    )}
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <div className="flex items-baseline gap-1 mb-6">
      <span className="text-4xl font-extrabold">{price}</span>
      <span className="text-slate-500 font-semibold">درهم</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3">
          <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
          <span className="text-slate-700">{f}</span>
        </li>
      ))}
    </ul>
    <a 
      href="#cta"
      className={`block text-center py-4 rounded-xl font-bold transition-all ${isPro ? 'gradient-gold text-slate-900' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
    >
      اختار هاد الباك
    </a>
  </div>
);

const App: React.FC = () => {
  const [whatsappMsg, setWhatsappMsg] = useState('');

  const handleWhatsApp = () => {
    const phone = "212600000000"; // Placeholder
    const text = encodeURIComponent("السلام عليكم سي يوسف، شفت الفيديو وبغيت نجاوب على الأسئلة باش نبدا مع Dir Future:\n1. هدفي هو: \n2. أكيد فهمت بلي المخاطرة 0%.\n3. المبلغ اللي باغي نوصل ليه هو: ");
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full font-bold text-sm">
              <Rocket size={16} />
              <span>مستقبل جديد كيتسناك فالمغرب</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              ابني مشروعك <span className="text-gradient-gold">الرقمي الخاص</span> من الصفر وبلا مخاطرة
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              تعلم كيفاش تحول الهاتف ديالك لماكينة ديال الفلوس مع أكاديمية <span className="font-bold">Dir Future</span>. بلا ما تحتاج راس مال كبير ولا خبرة مسبقة.
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleWhatsApp}
                  className="px-10 py-5 gradient-gold text-slate-900 rounded-2xl font-extrabold text-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
                >
                  بغا نبدا دابا <ArrowLeft size={24} />
                </button>
              </div>

              {/* Updated Social Proof Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <div className="flex -space-x-3 rtl:space-x-reverse">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                      src={`https://i.pravatar.cc/100?u=user${i}`}
                      alt="Entrepreneur avatar"
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs shadow-sm">
                    +1k
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-slate-900">موثوق من طرف أكثر من 1,000 مقاول مغربي</p>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={12} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500 font-semibold">(تقييمات 4.9/5 نجوم)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Placeholder for Video/Hero Image */}
              <img 
                src="https://picsum.photos/800/600" 
                alt="Youssef Abida" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:scale-110 transition-all">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-900">
                    <MousePointerClick size={32} />
                  </div>
                </button>
              </div>
            </div>
            {/* Floating Badges */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-float">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <Award size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">13 سنة خبرة</p>
                <p className="text-xs text-slate-500">في المقاولة الرقمية</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Story Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading>قصة "يوسف عبيدا"</SectionHeading>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed text-right md:text-center">
            <p>
              "السلام عليكم. سميتي يوسف عبيدا. مقاول في المجال الرقمي لأكثر من 13 سنة، ومؤسس أكاديمية Dir Future. مهمتي اليوم هي نساعد الشباب المغاربة الطموحين يبداو مشاريعهم التجارية عبر الإنترنت من الصفر."
            </p>
            <p className="italic text-slate-400">
              "قصتي ما بداتش بالنجاح، بدات من 'القاع'. كبرت فأسرة بسيطة، عايشين فالكراء، وكنشوف الوالدين ديالي كيتقاتلو باش يوفروا لينا لقمة العيش. أكثر حاجة كانت كضرني فخاطري، هي نشوف الأم ديالي كتمشي تخدم كعاملة نظافة."
            </p>
            <p>
              "سديت ودنيا على كلام المحبطين، واكتشفت نموذج 'المقاولة الحرة'. وبفضل الله، قدرت فظرف وجيز نخقق نجاحات كبيرة، ونخلي الوالدة ديالي ترتاح من الخدمة، ونبني فريق Eagle No Limits."
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="حنا حلينا ليك المعادلة الصعبة باش تركز غير على النجاح">السيستيم ديال Dir Future</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">مشكل الخبرة؟</h3>
              <p className="text-slate-600">حنا كنعلموك التسويق الرقمي والبيع من الصفر بأساليب حديثة ومغربية 100%.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">مشكل الأدوات؟</h3>
              <p className="text-slate-600">كنعطيوك صور، فيديوهات، وسكريبتات واجدة (Copier/Coller) باش تخدم بكل سهولة.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">مشكل التوجيه؟</h3>
              <p className="text-slate-600">كتكون عندك مواكبة شخصية مني ومن قادة فريق Eagle No Limits باش ما تغلطش.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 bg-slate-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-white rounded-full text-slate-900 font-bold border border-slate-200 shadow-sm">
                شريكنا الاستراتيجي
              </div>
              <h2 className="text-4xl font-extrabold">Forever Living Products</h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <ShieldCheck className="text-emerald-500 shrink-0" size={24} />
                  <div>
                    <p className="font-bold">شركة عملاقة ومستقرة</p>
                    <p className="text-slate-600">45 عام من التواجد فـ 160 دولة. ظهرك محمي.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Award className="text-amber-500 shrink-0" size={24} />
                  <div>
                    <p className="font-bold">المصداقية مع الدكتور نبيل العياشي</p>
                    <p className="text-slate-600">أخصائي التغذية الأول فالمغرب هو المكون الرسمي ديال المنتجات ديالنا.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Briefcase className="text-blue-500 shrink-0" size={24} />
                  <div>
                    <p className="font-bold">تهنينا من اللوجيستيك</p>
                    <p className="text-slate-600">الشركة هي اللي كتهز السلعة، التخزين، والتوصيل. نتا ركز غير على الماركتينغ.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {/* Partner Image 1 Placeholder -> Briefcase Icon */}
               <div className="rounded-3xl shadow-lg bg-white aspect-square flex items-center justify-center text-amber-500 border border-slate-100">
                  <Briefcase size={80} strokeWidth={1.5} />
               </div>
               {/* Partner Image 2 Placeholder -> Handshake Icon */}
               <div className="rounded-3xl shadow-lg bg-white aspect-square flex items-center justify-center text-blue-500 mt-8 border border-slate-100">
                  <Handshake size={80} strokeWidth={1.5} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>من بائع إلى رجل أعمال</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <TrendingUp className="text-blue-500" />
                البيع المباشر
              </h3>
              <p className="text-slate-600 leading-relaxed">
                كتشري بسعر الجملة، كتبيع بسعر العموم، وكتربح هامش ربح فوري. هادشي زوين وكيدخل مصروف يومي، ولكن فيه مشكل واحد: الوقت ديالك محدود بـ 24 ساعة.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-amber-50 border-2 border-amber-200">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Users className="text-amber-600" />
                نظام الفروع (Franchise)
              </h3>
              <p className="text-slate-900 font-medium leading-relaxed">
                إلا دربتي 5 دالناس وعلمتيهم ينجحو، الشركة كتجازيك بمدخول على رقم معاملات الفروع ديالك. نتا ما كتبقاش مجرد بائع، نتا كتولي رجل أعمال عندو شبكة تجارية عالمية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Income Ladder Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="سلم وظيفي واضح ومكافآت مجزية">شحال تقدر تدخل ديال الفلوس؟</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-700 rounded-3xl hover:bg-slate-800 transition-all text-center">
              <div className="text-emerald-400 text-sm font-bold mb-2">مرحلة الانطلاقة</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-200">Animateur Adjoint</h3>
              <div className="text-3xl font-extrabold text-gradient-gold mb-4">1,500 - 3,000 DH</div>
              <p className="text-slate-400">كتعلم، كتبيع، وكتحط أول حجرة فالمشروع ديالك.</p>
            </div>
            <div className="p-8 border border-slate-700 rounded-3xl hover:bg-slate-800 transition-all text-center">
              <div className="text-blue-400 text-sm font-bold mb-2">مرحلة المشرف</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-200">Animateur</h3>
              <div className="text-3xl font-extrabold text-gradient-gold mb-4">4,000 - 8,000 DH</div>
              <p className="text-slate-400">عندك فريق صغير (5-10 أشخاص) وكتسير السيستيم.</p>
            </div>
            <div className="p-8 gradient-gold rounded-3xl text-slate-900 text-center transform scale-105 shadow-2xl">
              <div className="bg-slate-900 text-white text-xs px-3 py-1 rounded-full inline-block mb-2 font-bold uppercase tracking-wider">الحرية المالية</div>
              <h3 className="text-2xl font-bold mb-4">Manager</h3>
              <div className="text-4xl font-black mb-4">15,000 - 25,000+ DH</div>
              <p className="font-semibold">عندك فريق كبير ومنظومة كتمشي لراسها. تقدر توصل ليها فـ 6 أشهر.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-20 px-4 bg-white" id="offer">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="استثمارك الوحيد هو السلعة اللي غاتبدا تخدم بها">العرض الذي لا يقاوم (Grand Slam Offer)</SectionHeading>
          
          <div className="bg-emerald-50 border-2 border-emerald-200 p-8 rounded-3xl mb-12 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-emerald-800">الهدايا اللي غاتاخد فابور:</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-emerald-100 pb-2">
                <span className="text-slate-700">تدريب الأكاديمية</span>
                <span className="font-bold line-through text-slate-400 ml-2">5,000 DH</span>
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-lg text-sm">FREE</span>
              </div>
              <div className="flex justify-between items-center border-b border-emerald-100 pb-2">
                <span className="text-slate-700">أدوات العمل والتصاميم</span>
                <span className="font-bold line-through text-slate-400 ml-2">2,000 DH</span>
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-lg text-sm">FREE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">المواكبة الشخصية</span>
                <span className="font-bold text-emerald-600">بدون ثمن</span>
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-lg text-sm">FREE</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard 
              title="باك الانطلاق (Start)"
              price="3,000"
              features={[
                "مخزون بداية من المنتجات",
                "عضوية Forever العالمية",
                "الولوج لأكاديمية Dir Future",
                "أدوات التصوير والسكريبتات"
              ]}
            />
            <PricingCard 
              isPro
              title="الباك الاحترافي (Pro)"
              price="3,700"
              features={[
                "مخزون أكبر من المنتجات",
                "ربح فوري أكبر",
                "مواكبة خاصة ومكثفة",
                "أولوية في جلسات التخطيط",
                "امتيازات الفريق القيادي"
              ]}
            />
          </div>

          <div className="mt-16 text-center bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
             <h3 className="text-3xl font-black mb-6">نسبة المخاطرة = 0%</h3>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
               المعادلة واضحة: نتا حطيتي الفلوس = خديتي السلعة. أسوأ سيناريو: ربحتي صحتك ومنتجات عالمية. أحسن سيناريو: بعتي سلعتك، رجعتي راس مالك، وربحتي مشروع العمر فابور.
             </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-slate-50" id="cta">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-2 border-slate-200 rounded-[3rem] p-10 md:p-16 shadow-xl relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 gradient-gold rounded-full flex items-center justify-center text-slate-900 shadow-lg">
              <Target size={40} />
            </div>
            
            <SectionHeading>أثبت لي أنك جاد</SectionHeading>
            
            <div className="space-y-8 text-right">
              <div className="p-6 bg-amber-50 rounded-2xl border-r-4 border-amber-400">
                <p className="text-slate-800 font-medium">
                  أنا ففريق Eagle No Limits، عندي قاعدة صارمة: ماكنخدمش مع كلشي. كنخدم غير مع الناس 'الجادين'.
                </p>
              </div>

              <div className="space-y-6">
                <p className="font-bold text-xl text-slate-900">باش تحجز الموعد ديالك غداً، صيفط ليا فواتساب:</p>
                <div className="space-y-4">
                  {[
                    "علاش بغيتي دير هاد المشروع بالضبط؟ (بش تعاون داركم؟ تشري طوموبيل؟)",
                    "واش فهمتي أن المخاطرة 0%؟ (أكد ليا أنك فهمتي بللي فلوسك كاينة فالسلعة)",
                    "شحال هو المبلغ الشهري اللي باغي توصل ليه فـ 3 شهور الأولى؟"
                  ].map((q, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center text-slate-900 font-bold shrink-0">{i+1}</div>
                      <p className="text-slate-700 font-semibold pt-1">{q}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button 
                  onClick={handleWhatsApp}
                  className="w-full py-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-black text-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-4 group"
                >
                  <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
                  جاوب وصيفط دابا
                </button>
                <p className="text-center text-slate-500 mt-4 text-sm font-medium">
                   القرار بيدك.. كنتسنى الأجوبة ديالك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-200 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 gradient-gold rounded flex items-center justify-center text-slate-900 font-bold">DF</div>
            <span className="font-bold text-lg">Dir Future Academy</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Dir Future Academy by Youssef Abida. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <button 
          onClick={handleWhatsApp}
          className="w-full py-4 gradient-gold text-slate-900 rounded-2xl font-bold text-lg shadow-2xl flex items-center justify-center gap-2 border-2 border-white/20"
        >
          <MessageCircle size={24} />
          تواصل مع يوسف دابا
        </button>
      </div>
    </div>
  );
};

export default App;
