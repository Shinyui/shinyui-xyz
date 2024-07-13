interface FutureSizeData {
  principle: number;
  risk: number;
  entry: number;
  sl: number;
}

interface PropFirmSizeData extends FutureSizeData {
  contractSize: number;
}

export { FutureSizeData, PropFirmSizeData };
