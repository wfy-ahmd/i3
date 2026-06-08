import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done &&
      <motion.div
        exit={{
          opacity: 0
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
        
          <div className="flex flex-col items-center gap-6">
            <motion.div
            initial={{
              scale: 0.8,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="font-heading text-6xl font-bold text-white">
            
              IN<span className="text-[#FF3E7A]">.</span>
            </motion.div>
            <div className="h-px w-40 overflow-hidden bg-white/10">
              <motion.div
              className="h-full bg-gradient-to-r from-[#FF3E7A] to-[#FFB3C8]"
              initial={{
                x: '-100%'
              }}
              animate={{
                x: '0%'
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }} />
            
            </div>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}