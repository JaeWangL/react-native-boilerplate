export const getBGImage = (coverColor: string): string => {
  if (coverColor === '#863b3b') {
    return 'https://smartgeo.blob.core.windows.net/test/background1.png';
  }
  if (coverColor === '#47377d') {
    return 'https://smartgeo.blob.core.windows.net/test/background2.png';
  }

  return 'https://smartgeo.blob.core.windows.net/test/background3.png';
};

export const getBGThumbnail = (coverColor: string): string => {
  if (coverColor === '#863b3b') {
    return 'https://smartgeo.blob.core.windows.net/test/thumbnail1.png';
  }
  if (coverColor === '#47377d') {
    return 'https://smartgeo.blob.core.windows.net/test/thumbnail2.png';
  }

  return 'https://smartgeo.blob.core.windows.net/test/thumbnail3.png';
};

export const getBGIndex = (coverColor?: string): number => {
  if (coverColor === '#47377d') {
    return 1;
  }
  if (coverColor === '#204e99') {
    return 2;
  }

  return 0;
};
