/**
 * generate a random 64 bit int for the art work name
 * @returns {BigInt}
 */
export const randomBigInt = () => {
  const hexString = Array(16)
    .fill(0)
    .map(() => Math.round(Math.random() * 0xf).toString(16))
    .join('');

  return BigInt(`0x${hexString}`);
};
