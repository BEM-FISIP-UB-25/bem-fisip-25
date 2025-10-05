import React from 'react';
import { motion } from 'framer-motion';

const EntryAnimation = ({
    children,
    type = 'slide', 
    direction = 'up',
    duration = 0.8,
    delay = 0,
    className,
    amount = 0.01,
    animateOnLoad = false,
}) => {
    let hiddenState = {};
    if (type === 'scale') {
        hiddenState = { opacity: 0, scale: 0.5 };
    } else if (type === 'fade') {
        hiddenState = { opacity: 0 };
    } else { 
        hiddenState = {
            opacity: 0,
            x: direction === 'left' ? -75 : direction === 'right' ? 75 : 0,
            y: direction === 'up' ? 75 : direction === 'down' ? -75 : 0,
        };
    }

    const variants = {
        hidden: hiddenState,
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
        },
    };

        const animationProps = animateOnLoad
        ? { animate: "visible" } 
        : { whileInView: "visible", viewport: { amount, once: true } }; 
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            transition={{ duration, delay, ease: 'easeOut' }}
            className={className}
            {...animationProps}
        >
            {children}
        </motion.div>
    );
};

export default EntryAnimation;