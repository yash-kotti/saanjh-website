import { motion } from 'framer-motion';
import { InstagramIcon } from '../components/shared/InstagramIcon';
import { AnimatedSection } from '../components/shared/AnimatedSection';
import { SectionHeader } from '../components/shared/SectionHeader';
import { events } from '../data/events';
import { INSTAGRAM } from '../lib/utils';

export default function Events() {
  const upcomingEvents = events.filter((e) => e.isUpcoming);
  const pastEvents = events.filter((e) => !e.isUpcoming);

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-cream py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">MEET US IN PERSON</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-brand-dark mb-4">
              Exhibitions & Events 💫
            </h1>
            <p className="text-brand-muted text-lg max-w-xl mx-auto">
              Come say hi! Browse hampers in person, taste our brownies, and experience the Saanjh magic live.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-16 bg-brand-warmWhite px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="UPCOMING EVENTS" title="Where to find us next" />
          {upcomingEvents.length === 0 ? (
            <AnimatedSection>
              <div className="text-center py-12 rounded-3xl bg-brand-cream border-2 border-dashed border-brand-gold/40">
                <span className="text-6xl block mb-4">🌸</span>
                <h3 className="font-heading text-2xl font-bold text-brand-dark mb-2">Stay tuned!</h3>
                <p className="text-brand-muted mb-6">No upcoming exhibitions announced yet. Follow us on Instagram for updates!</p>
                <a
                  href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-rose px-6 py-3 text-white font-semibold hover:bg-brand-roseLight transition-colors"
                >
                  <InstagramIcon className="h-4 w-4" /> Follow @saanjh.by.gayatri
                </a>
              </div>
            </AnimatedSection>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <AnimatedSection key={event.id}>
                  <div className="rounded-2xl overflow-hidden bg-white shadow-md border-2 border-brand-rose">
                    <div className="relative">
                      <img src={event.image} alt={event.title} className="w-full aspect-video object-cover" />
                      <span className="absolute top-3 left-3 rounded-full bg-brand-rose text-white text-xs font-bold px-3 py-1.5">
                        🔴 UPCOMING
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold text-brand-dark mb-2">{event.title}</h3>
                      <p className="text-brand-gold font-semibold text-sm mb-1">📅 {event.date}</p>
                      <p className="text-brand-muted text-sm mb-1">📍 {event.venue}</p>
                      {event.stall && <p className="text-brand-rose font-semibold text-sm">🏷️ Stall: {event.stall}</p>}
                      <p className="text-brand-muted text-sm mt-3 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past events */}
      {pastEvents.length > 0 && (
        <section className="py-16 bg-brand-cream px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader label="PAST EVENTS" title="Our exhibition journey ✨" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, i) => (
                <AnimatedSection key={event.id} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="rounded-2xl overflow-hidden bg-white shadow-md group"
                  >
                    <div className="overflow-hidden aspect-video">
                      <img src={event.image} alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-brand-muted font-medium">Past event</span>
                      <h3 className="font-heading text-lg font-bold text-brand-dark mt-1 mb-2">{event.title}</h3>
                      <p className="text-brand-gold text-sm font-semibold mb-1">{event.date}</p>
                      <p className="text-brand-muted text-xs">{event.venue}</p>
                      {event.stall && <p className="text-brand-rose text-xs font-medium mt-1">Stall: {event.stall}</p>}
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
