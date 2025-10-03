import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

// A reusable component to animate the count-up effect
function AnimatedCounter({ to }) {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  // The number to animate to (we parse it to handle characters like '+', '%', 'M')
  const numericTo = parseInt(to.replace(/[^0-9]/g, ''));
  const suffix = to.replace(/[0-9,]/g, '');

  useEffect(() => {
    if (!isInView) return;

    const node = nodeRef.current;

    // Framer Motion's animate function handles the count-up
    const controls = animate(0, numericTo, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        // Format the number with commas and add the suffix back on
        node.textContent = value.toLocaleString('en-US', {
            maximumFractionDigits: 0
        }) + suffix;
      },
    });

    return () => controls.stop();
  }, [isInView, numericTo, suffix]);

  return <span ref={nodeRef} />;
}


// Updated stats data with reduced numbers
const statsData = [
  { value: "150+", label: "Projects Completed" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "1M+", label: "KWh Green Energy Generated" },
  { value: "8+", label: "Years of Experience" }
];

const Stats = () => {
  return (
    <div className="bg-brand-teal text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-brand-gold font-serif">
                {/* The new AnimatedCounter component is used here */}
                <AnimatedCounter to={stat.value} />
              </h3>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;