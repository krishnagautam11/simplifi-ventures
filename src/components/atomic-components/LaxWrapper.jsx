import { useEffect, useRef } from 'react';
import lax from 'lax.js';

const LaxWrapper = ({ children, laxPresets = '', ...props }) => {
  const elRef = useRef(null);

  useEffect(() => {
    // Initialize lax.js and add the element once the component mounts
    if (elRef.current) {
      // lax.addElement takes the DOM element and optional animation data/options
      // For reusable presets via props, you might pass the class names or configuration
      lax.addElement(elRef.current);
    }

    // A cleanup function to remove the element when the component unmounts
    return () => {
      if (elRef.current) {
        // Remove the element to prevent memory leaks and issues on re-renders
        lax.removeElement(elRef.current);
      }
    };
  }, []); // The empty dependency array ensures this runs once on mount and once on unmount

  // Combine any additional class names with the lax presets class name
  const className = `${props.className || ''} ${laxPresets}`.trim();

  // Render a div that wraps the children and attaches the ref and class names
  return (
    <div ref={elRef} className={className} {...props}>
      {children}
    </div>
  );
};

export default LaxWrapper;
