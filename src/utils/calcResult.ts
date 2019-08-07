const calcResult = (sentences: string, seconds: number): number => {
  const num = sentences.split(' ').length;
  const sec = seconds < 100 ? 100 : seconds;

  return Math.floor(num / Math.floor(sec / 100) * 60);
};

export default calcResult;
