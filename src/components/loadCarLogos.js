// src/utils/loadCarLogos.js

const importAll = (requireContext) => {
    let logos = {};
    requireContext.keys().forEach((item) => {
      const name = item.replace('./', '').replace(/\.(jpg|jpeg|png|svg)$/, ''); // Remove path and extension
      logos[name.toLowerCase()] = requireContext(item); // Use lowercase for matching
    });
    return logos;
  };
  
  const carLogos = importAll(require.context('../images/carLogos', false, /\.(jpg|jpeg|png|svg)$/)); // Adjust the path as necessary
  
  export default carLogos;
  