import type { TeamMember } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/data/team";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

interface TeamSectionProps {
  standalone?: boolean;
}

export function TeamSection({ standalone = false }: TeamSectionProps) {
  const validTeam = team.filter(
    (m): m is TeamMember & { name: string; role: string } =>
      !!m.name && !!m.role && !m.name.startsWith("[") && !m.role.startsWith("[")
  );

  return (
    <section id="team" className="bg-warm-white theme-transition">
      <div
        className={
          standalone
            ? "mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:px-12 lg:px-8 lg:py-28"
            : "mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:px-12 lg:px-8 lg:py-28"
        }
      >
        <Reveal>
          <SectionHeading
            eyebrow="OUR TEAM"
            title="People who listen, guide, and walk with you."
            description="BMS Wellnest is a small, thoughtful team of practitioners who share one belief: wellness is a conversation, not a prescription."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        {validTeam.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {validTeam.map((member, idx) => (
              <Reveal
                key={member.id}
                delay={((idx % 3) * 100) as 0 | 100 | 200}
                as="article"
                className="group overflow-hidden rounded-3xl border border-soft-sand bg-warm-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md theme-transition"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-soft-sand theme-transition">
                  <div className="flex h-full w-full items-center justify-center text-center text-sm text-muted">
                    Team portrait coming soon
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-xs font-medium uppercase tracking-wider text-deep-sage">
                    {member.role}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-charcoal">
                    {member.name}
                  </h3>
                  {member.bio && (
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {member.bio}
                    </p>
                  )}
                  {member.specialties && member.specialties.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {member.specialties
                        .filter((s) => !s.startsWith("["))
                        .map((s) => (
                          <li
                            key={s}
                            className="rounded-full bg-deep-sage/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-deep-sage"
                          >
                            {s}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-lg rounded-3xl border-2 border-dashed border-soft-sand bg-warm-white/50 px-8 py-14 text-center theme-transition">
              <p className="text-sm font-medium uppercase tracking-wider text-deep-sage">
                TEAM
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-charcoal">
                Profiles coming soon
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We&apos;re putting the finishing touches on our team profiles. Check back shortly to meet the people behind BMS Wellnest.
              </p>
            </div>
          </div>
        )}

        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Button href="/programs" variant="primary">
              Explore programs
            </Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
