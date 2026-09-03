import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { EnterSaudiSection } from './components/EnterSaudiSection';
import { BusinessLandscapeSection } from './components/BusinessLandscapeSection';
import { PillarsSection } from './components/PillarsSection';
import { SessionDetailsSection } from './components/SessionDetailsSection';
import { SpeakerProfile } from './components/SpeakerProfile';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleOpenReservation = () => {
    setReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setReservationOpen(false);
  };

  const handleScrollToWhySaudi = () => {
    const section = document.getElementById('why-saudi');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#05080c] text-[#f4f1e8] selection:bg-[#0b8f5a]/30 selection:text-[#f4f1e8] overflow-x-hidden">
      {/* Luxury Ambient Cursor Follower Spotlight */}
      <div
        className="fixed w-[460px] h-[460px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-30 transition-transform duration-100 ease-out opacity-25 filter blur-[85px] hidden md:block"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          background: 'radial-gradient(circle, rgba(200,164,93,0.3) 0%, rgba(11,143,90,0.2) 40%, transparent 70%)',
        }}
      />

      {/* Navigation */}
      <Navigation onOpenReservation={handleOpenReservation} />

      {/* Main Narrative Experience */}
      <main>
        {/* Section 1: Hero Composition (40% Left / 60% Right) */}
        <HeroSection
          onOpenReservation={handleOpenReservation}
          onExploreClick={handleScrollToWhySaudi}
        />

        {/* Section 2: Enter Saudi Arabia (Portal Transformation & Economic Horizon) */}
        <EnterSaudiSection />

        {/* Section 3: The Saudi Business Landscape (MISA, Company Formation, CR, Tax, SBC) */}
        <BusinessLandscapeSection />

        {/* Section 4: Why This Session Matters (Entry, Structure, Compliance, Growth) */}
        <PillarsSection />

        {/* Section 5: The Session (26 Sep 2026, 3:30 PM IST, Live Online, Free Access) */}
        <SessionDetailsSection onOpenReservation={handleOpenReservation} />

        {/* Host Section: Dr. Anil Gupta Profile */}
        <SpeakerProfile />

        {/* Final CTA Section: Unlock the Opportunity */}
        <FinalCtaSection onOpenReservation={handleOpenReservation} />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Luxury Reservation Modal */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={handleCloseReservation}
      />
    </div>
  );
}
