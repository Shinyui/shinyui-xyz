"use server";

import z from "zod";
import { FutureSizeData, PropFirmSizeData } from "@/actions/type";

const futureSizeZod = z
  .object({
    principle: z
      .number({
        required_error: "請輸入數字",
        invalid_type_error: "請輸入數字",
      })
      .gt(0, "本金必須大於 0")
      .safe()
      .finite(),
    risk: z
      .number({
        required_error: "請輸入數字",
        invalid_type_error: "請輸入數字",
      })
      .gt(0, "勝率必須大於 0%")
      .lte(100, "本金必須等於或小於 100%"),
    entry: z
      .number({
        required_error: "請輸入數字",
        invalid_type_error: "請輸入數字",
      })
      .gt(0, "入場價必須大於 0")
      .safe()
      .finite(),
    sl: z
      .number({
        required_error: "請輸入數字",
        invalid_type_error: "請輸入數字",
      })
      .gt(0, "止損價必須大於 0")
      .safe()
      .finite(),
  })
  .required();

const propfirmSizeZod = z
  .object({
    principle: z
      .number({
        required_error: "請輸入數字",
        invalid_type_error: "請輸入數字",
      })
      .gt(0, "本金必須大於 0")
      .safe()
      .finite(),
    risk: z
      .number({
        required_error: "請輸入數字",
        invalid_type_error: "請輸入數字",
      })
      .gt(0, "勝率必須大於 0%")
      .lte(100, "本金必須等於或小於 100%"),
    entry: z
      .number({
        required_error: "請輸入數字",
        invalid_type_error: "請輸入數字",
      })
      .gt(0, "入場價必須大於 0")
      .safe()
      .finite(),
    sl: z
      .number({
        required_error: "請輸入數字",
        invalid_type_error: "請輸入數字",
      })
      .gt(0, "止損價必須大於 0")
      .safe()
      .finite(),
    contractSize: z
      .number({
        required_error: "請輸入數字",
        invalid_type_error: "請輸入數字",
      })
      .gt(0, "合約大小必須大於 0")
      .safe()
      .finite(),
  })
  .required();

const calculatePrincipleAtRisk = (data: FutureSizeData | PropFirmSizeData) => {
  return data.principle * (data.risk / 100);
};

const calculatePercentageChange = (data: FutureSizeData | PropFirmSizeData) => {
  return Math.abs(((data.entry - data.sl) / data.entry) * 100).toFixed(2);
};

const calculateFutureSize = (data: FutureSizeData) => {
  const principleAtRisk: number = calculatePrincipleAtRisk(data);
  const percentageChange: string = calculatePercentageChange(data);

  const tradeSize: number = principleAtRisk / (Number(percentageChange) / 100);

  return { percentageChange, tradeSize };
};

const calculatePropfirmSize = (data: PropFirmSizeData) => {
  const principleAtRisk: number = data.principle * (data.risk / 100);

  const percentageChange: string = Math.abs(
    ((data.entry - data.sl) / data.entry) * 100
  ).toFixed(2);

  const pipSpread: number = Math.abs(data.entry - data.sl);
  const quantity: number = principleAtRisk / pipSpread;
  const tradeSize: number = quantity / data.contractSize;

  return { percentageChange, tradeSize };
};

const futureSize = (prevState: any, formdata: FormData) => {
  const result = futureSizeZod.safeParse({
    principle: Number(formdata.get("principle")),
    risk: Number(formdata.get("risk")),
    entry: Number(formdata.get("entry")),
    sl: Number(formdata.get("sl")),
  });

  if (!result.success) {
    ({ errors: result.error.flatten().fieldErrors });

    return { ...prevState, errors: result.error.flatten().fieldErrors };
  }

  const { tradeSize, percentageChange } = calculateFutureSize(result.data);

  return {
    ...prevState,
    errors: { principle: [], risk: [], entry: [], sl: [] },
    tradeSize,
    percentageChange,
  };
};

const propFirmSize = (prevState: any, formdata: FormData) => {
  const result = propfirmSizeZod.safeParse({
    principle: Number(formdata.get("principle")),
    risk: Number(formdata.get("risk")),
    entry: Number(formdata.get("entry")),
    sl: Number(formdata.get("sl")),
    contractSize: Number(formdata.get("contractSize")),
  });

  if (!result.success) {
    ({ errors: result.error.flatten().fieldErrors });

    return { ...prevState, errors: result.error.flatten().fieldErrors };
  }

  const { tradeSize, percentageChange } = calculatePropfirmSize(result.data);

  return {
    ...prevState,
    errors: { principle: [], risk: [], entry: [], sl: [], contractSize: [] },
    tradeSize,
    percentageChange,
  };
};

export { futureSize, propFirmSize };
