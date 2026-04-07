"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <div key={pathname}>
                {children}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: {
                            delay: 0.5,
                            duration: 0.3,
                            ease: "easeInOut"
                        },
                    }}
                    className="h-screen w-screen fixed bg-primary top-0 left-0 pointer-events-none z-50"
                />
            </div>
        </AnimatePresence>
    );
};

export default PageTransition;