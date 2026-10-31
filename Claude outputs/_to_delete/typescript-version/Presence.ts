import type React from "react";
import { AnimatePresence, AnimatePresenceProps } from "framer-motion";

/**
 * framer-motion 11 types AnimatePresence as returning `Element | undefined`,
 * which TypeScript < 5.1 rejects as a JSX component. Re-type it for TS 4.9 (CRA).
 */
const Presence = AnimatePresence as unknown as React.FC<React.PropsWithChildren<AnimatePresenceProps>>;

export default Presence;
