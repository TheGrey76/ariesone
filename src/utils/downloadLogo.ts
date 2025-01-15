export const downloadGradientLogo = () => {
  const logoElement = document.querySelector('.aires-logo-text');
  if (!logoElement) return;

  // Create a canvas with the same dimensions as the logo
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return;

  // Use html2canvas to capture the gradient text
  import('html2canvas').then((html2canvas) => {
    html2canvas.default(logoElement as HTMLElement).then((canvas) => {
      // Create a download link
      const link = document.createElement('a');
      link.download = 'aires-logo.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  });
};