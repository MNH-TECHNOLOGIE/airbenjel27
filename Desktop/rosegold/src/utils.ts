export const getImagePath = (filename: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanFilename = filename.startsWith('/') ? filename.slice(1) : filename;
  // Always use absolute path from root
  return `/${cleanFilename}`;
};

export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
