import { motion } from "framer-motion";

export default function ResponsiveCarousel() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-3 py-20 mb-4">
      <div className="relative max-w-5xl w-full rounded-xl overflow-hidden shadow-xl ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="aspect-video w-full"
        >
          <video
            src="/videoes/zonomo.mp4" // Replace with your video path
            loop
            autoPlay
            muted
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
