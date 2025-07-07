import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

// ✅ Mobile dock: Bottom-right with left tooltips
const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // ✅ Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className={twMerge("fixed bottom-4 right-4 z-50 md:hidden", className)}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="mb-2 flex flex-col gap-2 items-end"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <DockIcon {...item} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        <IconLayoutNavbarCollapse className="h-6 w-6 text-neutral-600 dark:text-neutral-300" />
      </button>
    </div>
  );
};

// ✅ Desktop dock: Vertical center-right with left tooltips
const FloatingDockDesktop = ({ items, className }) => {
  return (
    <div
      className={twMerge(
        "hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col gap-4 p-4 rounded-2xl bg-white/80 dark:bg-neutral-900/80 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/30 z-50",
        className
      )}
    >
      {items.map((item) => (
        <DockIcon key={item.title} {...item} />
      ))}
    </div>
  );
};

function DockIcon({ title, icon, href }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      {...(title !== "Gmail" && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ scale: hovered ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800 relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
              className="absolute right-full mr-2 px-2 py-0.5 text-xs rounded-md bg-white dark:bg-neutral-900 text-black dark:text-white shadow border border-gray-200 dark:border-neutral-700 whitespace-nowrap"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-7 h-7">{icon}</div>
      </motion.div>
    </a>
  );
}
