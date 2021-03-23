export const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.75 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
