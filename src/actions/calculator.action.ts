"use server";

import z from "zod";

interface Data {
  principle: number;
  risk: number;
  entry: number;
  sl: number;
}

const calculateResult = (data: Data) => {
  const principleAtRisk: number = data.principle * (data.risk / 100);

  const percentageChange: string = Math.abs(
    ((data.entry - data.sl) / data.entry) * 100
  ).toFixed(2);

  const tradeSize: number = principleAtRisk / (Number(percentageChange) / 100);

  return { percentageChange, tradeSize };
};

const calculateContractSize = (prevState: any, formdata: FormData) => {
  const principle = Number(formdata.get("principle"));
  const risk = Number(formdata.get("risk"));
  const entry = Number(formdata.get("entry"));
  const sl = Number(formdata.get("sl"));

  const dataObj = z
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

  const result = dataObj.safeParse({ principle, risk, entry, sl });

  if (!result.success) {
    ({ errors: result.error.flatten().fieldErrors });

    return { ...prevState, errors: result.error.flatten().fieldErrors };
  }

  const { tradeSize, percentageChange } = calculateResult({
    principle,
    risk,
    entry,
    sl,
  });

  return {
    ...prevState,
    errors: { principle: [], risk: [], entry: [], sl: [] },
    tradeSize,
    percentageChange,
  };
};

export default calculateContractSize;
