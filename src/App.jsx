import HeroPrologue from './components/HeroPrologue';
import JourneyTimeline from './components/JourneyTimeline';
import CreationsShowcase from './components/CreationsShowcase';
import NextChapterCTA from './components/NextChapterCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white antialiased">
      {/* Minimal floating nav */}
      <header className="fixed top-0 z-50 w-full">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur">
            <a href="#top" className="text-sm font-medium text-white/90">My Story</a>
            <div className="hidden gap-4 text-xs text-white/70 sm:flex">
              <a className="hover:text-white" href="#journey">Journey</a>
              <a className="hover:text-white" href="#creations">Creations</a>
              <a className="hover:text-white" href="#next">Next</a>
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        <HeroPrologue />
        <JourneyTimeline />
        <CreationsShowcase />
        <NextChapterCTA />
      </main>

      <footer className="border-t border-white/10 bg-black py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} • Crafted as a narrative experience.
      </footer>
    </div>
  );
}

export default App;
