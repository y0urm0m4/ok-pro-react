// App.jsx – Landing Hub (видео-фон фикс)
import React from "react";
import "./index.css";


// источники видео
import heroVidSm from "./assets/hero-vid.mp4";     // ~5‑10 МБ
import heroVidLg from "./assets/hero-vid-lg.mp4";
import Navbar from "./Navbar.jsx"; // 140 МБ
// лёгкое превью (1‑й кадр) — покажется до старта видео
// добавь файл, если понадобятся лоадеры
// import heroPoster from "./assets/hero-frame.jpg";

function App() {
    return (
        <div className="bg-[var(--color-primary)] text-white">
            <Navbar />
            <div className="scroll-wrapper">
            <div className="scroll-smoother">
            {/* ───────────────────────── Hero ───────────────────────── */}
            <section
                id="hero"
                className="relative h-screen flex items-center justify-center"
            >
                {/* Видео‑фон — две версии.
            1️⃣ Первая <source> для маленьких экранов (до 639 px) — лёгкий файл.
            2️⃣ Вторая — для ≥640 px. Потому что браузер выбирает ПЕРВУЮ подходящую
               (<source> перебираются сверху вниз), сначала ставим mobile.
        */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    // poster={heroPoster}
                    disableRemotePlayback
                >
                    <source src={heroVidSm} type="video/mp4" media="(max-width: 639px)" />
                    <source src={heroVidLg} type="video/mp4" media="(min-width: 640px)" />
                    Ваш браузер не поддерживает воспроизведение видео.
                </video>

                {/* полупрозрачный оверлей для контраста */}
                <div className="absolute inset-0 bg-black/60 pointer-events-none blur-md" />

                {/* контент Hero */}
                <div className="relative z-10 px-4 text-center">
                    <h1 className="text-5xl sm:text-7xl font-poppins">Заголовок Hero</h1>
                </div>
            </section>

            {/* ────────────────────── About Teaser ───────────────────── */}
            <section id="about" className="py-16 container mx-auto px-4">
                <h2 className="text-3xl font-poppins mb-4">О нас</h2>
                <p className="text-[var(--color-subtext)]">Краткое описание компании…</p>
            </section>

            {/* ───────────────────── Services Teaser ─────────────────── */}
            <section id="services" className="py-16 bg-[var(--color-primary-2)]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-poppins mb-8 text-white">Услуги</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div id="service-video" className="bg-white p-6 rounded-lg text-black">
                            Видео-продакшн
                        </div>
                        <div id="service-event" className="bg-white p-6 rounded-lg text-black">
                            Организация мероприятий
                        </div>
                        <div id="service-pr" className="bg-white p-6 rounded-lg text-black">
                            PR и продвижение
                        </div>
                    </div>
                </div>
            </section>

            {/* ────────────────── Portfolio Carousel ─────────────────── */}
            <section id="portfolio-teaser" className="py-16 container mx-auto px-4">
                <h2 className="text-3xl font-poppins mb-8">Портфолио</h2>
                <div className="h-64 bg-[var(--color-primary-2)] rounded-lg flex items-center justify-center text-white">
                    Portfolio‑carousel Placeholder
                </div>
            </section>

            {/* ────────────────── Clients Logos ─────────────────── */}
            <section id="clients-teaser" className="py-16 bg-[var(--color-primary-2)]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-poppins mb-8 text-white">Клиенты</h2>
                    <div className="h-32 bg-white rounded-lg flex items-center justify-center text-black">
                        Clients‑logos Placeholder
                    </div>
                </div>
            </section>

            {/* ───────────────── Testimonials Slider ───────────────── */}
            <section id="testimonials-teaser" className="py-16 container mx-auto px-4">
                <h2 className="text-3xl font-poppins mb-8">Отзывы</h2>
                <div className="h-64 bg-[var(--color-primary-2)] rounded-lg flex items-center justify-center text-white">
                    Testimonials‑slider Placeholder
                </div>
            </section>

            {/* ──────────────────── Metrics Section ─────────────────── */}
            <section id="metrics" className="py-16 bg-[var(--color-primary-2)]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-poppins mb-8 text-white">Мы в цифрах</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                        <div>100+ проектов</div>
                        <div>50+ клиентов</div>
                        <div>10 стран</div>
                        <div>5 лет на рынке</div>
                    </div>
                </div>
            </section>

            {/* ──────────────────── Process Overview ─────────────────── */}
            <section id="process" className="py-16 container mx-auto px-4">
                <h2 className="text-3xl font-poppins mb-8">Процесс</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {[1, 2, 3, 4, 5].map((step) => (
                        <div key={step} className="flex flex-col items-center text-white">
                            <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                                {step}
                            </div>
                            <p className="mt-4 text-center text-[var(--color-subtext)]">Шаг {step}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─────────────────────── FAQ mini ─────────────────────── */}
            <section id="faq-teaser" className="py-16 bg-[var(--color-primary-2)]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-poppins mb-8 text-white">FAQ</h2>
                    <div className="space-y-4">
                        <div id="faq-item-1" className="bg-white p-4 rounded text-black">Вопрос 1</div>
                        <div id="faq-item-2" className="bg-white p-4 rounded text-black">Вопрос 2</div>
                        <div id="faq-item-3" className="bg-white p-4 rounded text-black">Вопрос 3</div>
                    </div>
                </div>
            </section>

            {/* ────────────────── Contact Snippet ──────────────────── */}
            <section id="contact-mini" className="py-16 container mx-auto px-4">
                <h2 className="text-3xl font-poppins mb-8">Контакты</h2>
                <div className="h-32 bg-[var(--color-primary-2)] rounded-lg flex items-center justify-center text-white">
                    Contact‑snippet Placeholder
                </div>
            </section>
        </div>
        </div>
        </div>
    );
}

export default App;


