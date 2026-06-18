"use client"

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/jerusalem-hero.png"
      >
        <source src="/media/video1.mp4" type="video/mp4" />
      </video>

      {/* Overlays: lighter so the video stays bright and visible */}
      <div className="absolute inset-0 bg-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      {/* Cinematic vignette for depth */}
      <div className="absolute inset-0 [background:radial-gradient(120%_80%_at_50%_40%,transparent_40%,oklch(0.15_0.012_265/0.7)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
        <div className="mb-7" style={{ animation: "fade-up 0.8s ease both" }}>
          <span className="text-sm tracking-[0.3em] text-gold-soft">מחלקת A-Z, קבוצת אורן כהן</span>
        </div>

        <h1
          className="font-heading text-5xl font-bold leading-[1.1] tracking-[-0.04em] text-balance text-gold-shimmer drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)] sm:text-7xl md:text-[5.25rem]"
          style={{ animation: "fade-up 0.9s ease 0.1s both" }}
        >
          חולמים לרכוש נכס
          <br />
          יוקרה בירושלים?
        </h1>

        <p
          className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-foreground/90 sm:text-lg"
          style={{ animation: "fade-up 0.9s ease 0.25s both" }}
        >
          <span className="font-semibold">A-Z</span> מבית קבוצת אורן כהן הוא שירות מקיף ובלעדי שמלווה אתכם בכל שלב במסע
          לרכישת נכס יוקרה בירושלים. משפטי, עיצובי, פיננסי, ספקים ויבואנים, אנחנו אתכם בכל היבט.
        </p>
        <p
          className="mt-4 font-heading text-lg text-gold-soft sm:text-xl"
          style={{ animation: "fade-up 0.9s ease 0.32s both" }}
        >
          והמזוזה? עלינו.
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animation: "fade-up 0.9s ease 0.4s both" }}
        >

          <a
            href="#solution"
            className="inline-flex items-center justify-center rounded-full border border-gold/40 bg-gold/5 px-8 py-4 text-base font-medium text-gold transition-colors hover:bg-gold hover:text-white"
          >
            מה זה A-Z?
          </a>
        </div>
      </div>
    </section>
  )
}
