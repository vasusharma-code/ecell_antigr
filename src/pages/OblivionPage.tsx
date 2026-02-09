import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

// Oblivion images in order
const oblivionImages = [
  '/OBLIVION CAROUSEL/41.png',
  '/OBLIVION CAROUSEL/42.png',
  '/OBLIVION CAROUSEL/43.png',
  '/OBLIVION CAROUSEL/44.png',
  '/OBLIVION CAROUSEL/45.png',
  '/OBLIVION CAROUSEL/46.png',
  '/OBLIVION CAROUSEL/47.png',
  '/OBLIVION CAROUSEL/48.png',
  '/OBLIVION CAROUSEL/49.png',
  '/OBLIVION CAROUSEL/50.png',
  '/OBLIVION CAROUSEL/51.png',
  '/OBLIVION CAROUSEL/52.png',
  '/OBLIVION CAROUSEL/53.png',
  '/OBLIVION CAROUSEL/54.png',
  '/OBLIVION CAROUSEL/55.png',
  '/OBLIVION CAROUSEL/56.png',
  '/OBLIVION CAROUSEL/57.png',
  '/OBLIVION CAROUSEL/58.png',
  '/OBLIVION CAROUSEL/59.png',
];


// Chaotic random layouts - each image gets unique styling
const randomLayouts = [
  { width: '95vw', left: '-5%', rotate: -2, marginTop: 0 },
  { width: '60vw', left: '35%', rotate: 3, marginTop: -40 },
  { width: '75vw', left: '-8%', rotate: -1, marginTop: 20 },
  { width: '100vw', left: '-2%', rotate: 0, marginTop: 60 },
  { width: '55vw', left: '40%', rotate: -3, marginTop: -30 },
  { width: '80vw', left: '15%', rotate: 2, marginTop: 40 },
  { width: '70vw', left: '-10%', rotate: 1, marginTop: -20 },
  { width: '98vw', left: '0%', rotate: 0, marginTop: 80 },
  { width: '50vw', left: '45%', rotate: -2, marginTop: -50 },
  { width: '85vw', left: '-5%', rotate: 3, marginTop: 30 },
  { width: '65vw', left: '30%', rotate: -1, marginTop: -10 },
  { width: '90vw', left: '5%', rotate: 1, marginTop: 50 },
  { width: '58vw', left: '-12%', rotate: -3, marginTop: -40 },
  { width: '100vw', left: '-3%', rotate: 0, marginTop: 70 },
  { width: '72vw', left: '25%', rotate: 2, marginTop: -25 },
  { width: '78vw', left: '-6%', rotate: -2, marginTop: 45 },
  { width: '62vw', left: '38%', rotate: 1, marginTop: -35 },
  { width: '95vw', left: '2%', rotate: 0, marginTop: 55 },
  { width: '68vw', left: '-15%', rotate: 3, marginTop: -15 },
];

// Event Gallery Component with chaotic layout
const EventGallery = ({
  title,
  subtitle,
  images,
}: {
  title: string;
  subtitle: string;
  images: string[];
}) => (
  <section className="py-8 overflow-hidden">
    {/* Event Header */}
    <motion.div
      className="text-center mb-12 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-3">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-violet-400">
          {title}
        </span>
      </h2>
      <p className="text-neutral-500 text-sm tracking-widest uppercase">
        {subtitle}
      </p>
    </motion.div>

    {/* Chaotic Gallery - Random Placements */}
    <div className="relative">
      {images.map((image, index) => {
        const layout = randomLayouts[index % randomLayouts.length];
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80, rotate: layout.rotate * 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: layout.rotate }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.23, 0.86, 0.39, 0.96],
            }}
            style={{
              width: image.includes('59.png') ? 'calc(68vw * 1.2)' : layout.width,
              marginLeft: image.includes('59.png') ? 'calc(-15% + 260px)' : layout.left,
              marginTop: `${layout.marginTop}px`,
              transform: `rotate(${layout.rotate}deg)`,
            }}
            className="relative mb-4"
          >
            <motion.div
              className="relative transition-all duration-500"
              whileHover={{ scale: 1.03, rotate: 0, zIndex: 50 }}
            >
              <img
                src={image}
                alt={`${title} ${index + 1}`}
                className="w-full h-auto rounded-lg md:rounded-2xl object-cover shadow-2xl shadow-black/60"
                style={image.includes('59.png') ? { objectPosition: 'calc(50% + 150px) center', zoom: 0.2 } : undefined}
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default function OblivionPage() {
  return (
    <PageWrapper>
      {/* Main Hero */}
      <section className="pt-28 pb-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            className="text-neutral-500 text-xs tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            E-Cell VIPS-TC Presents
          </motion.p>
        </div>
      </section>

      {/* Oblivion Gallery */}
      <EventGallery
        title="OBLIVION'25"
        subtitle="The E-Summit of VIPS-TC"
        images={oblivionImages}
      />

      {/* Bottom spacer */}
      <div className="h-20" />
    </PageWrapper>
  );
}
