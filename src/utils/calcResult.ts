const calcResult = (sentences: string, seconds: number): number => {
  const num = sentences.split(' ').length;

  return Math.floor(num / Math.floor(seconds / 100) * 60);
};

export default calcResult;
