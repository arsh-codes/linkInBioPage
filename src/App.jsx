import { useState } from "react";

const links = [
    {
        id: "enroll",
        label: "Enroll Now",
        sublabel: "Start your PTE journey today",
        icon: "🎓",
        href: "#",
        primary: true,
    },
    {
        id: "whatsapp",
        label: "Chat on WhatsApp",
        sublabel: "Quick enquiries & free consultation",
        icon: "💬",
        href: "https://api.whatsapp.com/send?phone=917888938551",
        primary: false,
    },
    {
        id: "instagram",
        label: "Follow on Instagram",
        sublabel: "Tips, results & updates",
        icon: "📸",
        href: "https://instagram.com/blueful_institute",
        primary: false,
    },
    {
        id: "courses",
        label: "Our PTE Courses",
        sublabel: "Academic • UKVI • Core • Express • Home",
        icon: "📝",
        href: "#",
        primary: false,
    },
];

const exams = ["Academic", "UKVI", "Core", "Express", "Home"];
const countries = [
    { flag: "🇦🇺", name: "Australia" },
    { flag: "🇬🇧", name: "UK" },
    { flag: "🇨🇦", name: "Canada" },
    { flag: "🇺🇸", name: "USA" },
    { flag: "🇳🇿", name: "New Zealand" },
];

export default function App() {
    const [pressed, setPressed] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 flex items-start justify-center px-4 py-8 sm:py-12 md:py-16 font-sans">
            <link
                href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700&display=swap"
                rel="stylesheet"
            />

            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
                {/* Logo */}
                <img
                    src="/favicon.webp"
                    alt="Blueful Institute Logo"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover block mx-auto mb-3 sm:mb-4"
                />

                {/* Institute name */}
                <h1 className="text-center text-xl sm:text-2xl font-bold text-blue-900 mb-1 tracking-tight">
                    Blueful Institute
                </h1>
                <p className="text-center text-sm sm:text-base text-slate-500 mb-4 sm:mb-5">
                    PTE Coaching · Ludhiana
                </p>

                {/* Exam type badges */}
                <div className="flex flex-wrap gap-2 justify-center mb-5 sm:mb-6">
                    {exams.map((e) => (
                        <span
                            key={e}
                            className="bg-white border border-blue-200 rounded-full px-3 py-1 text-xs sm:text-sm text-blue-800 font-medium"
                        >
                            PTE {e}
                        </span>
                    ))}
                </div>

                {/* Country flags */}
                <div className="flex justify-center gap-3 sm:gap-5 mb-7 sm:mb-8">
                    {countries.map((c) => (
                        <div key={c.name} className="text-center">
                            <div className="text-xl sm:text-2xl">{c.flag}</div>
                            <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                                {c.name}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onMouseDown={() => setPressed(link.id)}
                            onMouseUp={() => setPressed(null)}
                            onTouchStart={() => setPressed(link.id)}
                            onTouchEnd={() => setPressed(null)}
                            className={[
                                "flex items-center gap-3 sm:gap-4 rounded-2xl px-4 py-3.5 sm:py-4 no-underline cursor-pointer transition-all duration-150",
                                link.primary
                                    ? "bg-gradient-to-br from-blue-600 to-blue-950 shadow-lg shadow-blue-300/40 border-0"
                                    : "bg-white border border-blue-100 shadow-sm shadow-blue-100/60",
                                pressed === link.id ? "scale-[0.98]" : "scale-100",
                            ].join(" ")}
                        >
                            {/* Icon bubble */}
                            <span
                                className={[
                                    "w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-lg sm:text-xl flex-shrink-0",
                                    link.primary ? "bg-white/15" : "bg-blue-50",
                                ].join(" ")}
                            >
                                {link.icon}
                            </span>

                            {/* Text */}
                            <div className="flex-1 min-w-0">
                                <div
                                    className={[
                                        "text-sm sm:text-base font-semibold leading-tight mb-0.5 truncate",
                                        link.primary ? "text-white" : "text-blue-950",
                                    ].join(" ")}
                                >
                                    {link.label}
                                </div>
                                <div
                                    className={[
                                        "text-xs sm:text-sm truncate",
                                        link.primary ? "text-white/70" : "text-slate-400",
                                    ].join(" ")}
                                >
                                    {link.sublabel}
                                </div>
                            </div>

                            {/* Chevron */}
                            <span
                                className={[
                                    "text-lg flex-shrink-0",
                                    link.primary ? "text-white/50" : "text-blue-300",
                                ].join(" ")}
                            >
                                ›
                            </span>
                        </a>
                    ))}
                </div>

                {/* Footer */}
                <p className="text-center text-xs text-slate-400 mt-8">
                    © 2026 Blueful Institute · All rights reserved
                </p>
            </div>
        </div>
    );
}