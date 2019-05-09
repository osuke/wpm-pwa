const calcResult = (sentences: string, seconds: number): number => {
  const num = sentences.split(' ').length;

  return Math.floor(num / seconds * 60);
};

export default calcResult;
