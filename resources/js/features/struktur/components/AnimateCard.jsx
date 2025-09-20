import React from 'react';
import { motion } from 'framer-motion';
import StaffCard from './StaffCard';

const AnimatedCard = ({ data }) => {
    const rows = [];
    let i = 0;
    if (data.length > 0) rows.push(data.slice(i, i + 1)); i += 1;
    if (data.length > 1) rows.push(data.slice(i, i + 2)); i += 2;
    while (i < data.length) {
        rows.push(data.slice(i, i + 3));
        i += 3;
    }
    if (rows.length > 2 && rows[rows.length - 1].length === 2) {
        const lastTwo = rows.pop();
        const prevThree = rows.pop();
        rows.push(prevThree);
        rows.push(lastTwo);
    }
    else if (rows.length > 2 && rows[rows.length - 1].length === 1) {
        const lastOne = rows.pop();
        if (rows[rows.length - 1].length === 3) {
            const prevThree = rows.pop();
            rows.push(prevThree.slice(0, 2));
            rows.push([prevThree[2], ...lastOne]);
        } else {
            rows.push(lastOne)
        }
    }

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const rowVariants = (index) => ({
        hidden: {
            opacity: 0,
            x: index % 2 === 0 ? '-100%' : '100%',
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    });

    const getRowLayout = (row) => {
        if (row.length === 1) return 'flex justify-center';
        if (row.length === 2) return 'flex flex-row gap-x-[8vw] items-center justify-center';
        if (row.length === 3) return 'flex flex-row items-center justify-between w-full';
        return '';
    };

    return (
        <motion.div
            className="w-full flex flex-col items-center gap-y-[3vw] md:px-[10vw] px-[5vw] pb-[3vw]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {rows.map((row, index) => (
                <motion.div
                    key={index}
                    className={getRowLayout(row)}
                    variants={rowVariants(index)}
                >
                    {row.map(staff => <StaffCard key={staff.id} {...staff} />)}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default AnimatedCard;