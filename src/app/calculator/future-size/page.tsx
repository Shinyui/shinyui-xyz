"use client";

import { Input, Button } from "@nextui-org/react";
import calculateContractSize from "@/actions/calculator.action";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
  errors: {
    principle: [],
    risk: [],
    entry: [],
    sl: [],
    commision: [],
  },
  tradeSize: 0,
  percentageChange: 0,
};

const FutureSize = () => {
  const [formState, formAction] = useFormState(
    calculateContractSize,
    initialState
  );

  return (
    <>
      <h1 className="text-3xl mb-[24px]">倉位計算機</h1>
      <form action={formAction}>
        <div className="flex flex-col gap-[16px]">
          <Input
            name="principle"
            label="本金"
            style={{ color: "white" }}
            isInvalid={formState.errors.principle?.join(",") ? true : false}
            errorMessage={formState.errors.principle?.join(",")}
            endContent={"USDT"}
            size="lg"
          />

          <Input
            name="risk"
            label="單次本金損失比例"
            style={{ color: "white" }}
            isInvalid={formState.errors.risk?.join(",") ? true : false}
            errorMessage={formState.errors.risk?.join(",")}
            endContent={"%"}
            size="lg"
          />

          <Input
            name="entry"
            label="入場價"
            style={{ color: "white" }}
            isInvalid={formState.errors.entry?.join(",") ? true : false}
            errorMessage={formState.errors.entry?.join(",")}
            size="lg"
          />

          <Input
            name="sl"
            label="止損價"
            style={{ color: "white" }}
            isInvalid={formState.errors.sl?.join(",") ? true : false}
            errorMessage={formState.errors.sl?.join(",")}
            size="lg"
          />

          <Button color="primary" type="submit">
            計算
          </Button>

          <Input
            label="實盤變動比例"
            style={{ color: "white" }}
            size="lg"
            isReadOnly={true}
            value={`${formState.percentageChange}`}
            endContent={"%"}
          />

          <Input
            label="倉位價值"
            style={{ color: "white" }}
            size="lg"
            isReadOnly={true}
            value={`${formState.tradeSize}`}
            endContent={"USDT"}
          />
        </div>
      </form>
    </>
  );
};

export default FutureSize;
