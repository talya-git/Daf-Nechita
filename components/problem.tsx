import { Reveal } from "@/components/reveal"
import { Users, HelpCircle, Languages, ShieldAlert, MapPin, Briefcase } from "lucide-react"

const pains = [
  { icon: ShieldAlert, text: "רגולציות מקומיות מורכבות שקשה לפענח לבד" },
  { icon: Users, text: "מספר רב של אנשי מקצוע שונים שצריך לתאם ביניהם" },
  { icon: Languages, text: "אתגרים ייחודיים שעומדים בפני רוכשים זרים" },
  { icon: HelpCircle, text: "חוסר ודאות לגבי אמינות בעלי המקצוע" },
  { icon: MapPin, text: "החלטות מורכבות שצריך לקבל מרחוק" },
  { icon: Briefcase, text: "הצורך להיות ״מנהל הפרויקט״ בעצמכם" },
]

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 -z-10 bg-card/40" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-3 text-base font-semibold uppercase tracking-[0.3em] text-gold sm:text-lg">
            <span className="h-px w-6 bg-gold" />
            האתגר
            <span className="h-px w-6 bg-gold" />
          </span>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-[-0.04em] text-balance text-gold-gradient sm:text-4xl md:text-5xl">
            רכישת נכס יוקרתי בירושלים שונה מרכישה בכל מקום אחר.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            השילוב של רגולציות מקומיות מורכבות והאתגרים שעומדים בפני רוכשים זרים יוצר מרכיב ייחודי שדורש מומחיות מעמיקה
            והכוונה מהימנה. לכן חשוב שיהיה לכם האדם הנכון במקום הנכון.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.text} delay={i * 70}>
              <div className="group flex h-full items-start gap-4 rounded-xl border border-border/70 bg-background/60 p-6 transition-colors hover:border-gold/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <p className="pt-1.5 leading-relaxed text-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center" delay={120}>
          <p className="font-heading text-xl text-balance text-gold-soft sm:text-2xl">
            מישהו שאפשר לסמוך עליו, גם מהימן וגם בעל ניסיון רב בעיר הזו.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
