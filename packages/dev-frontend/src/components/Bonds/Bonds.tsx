import React from "react";
import { useBondView } from "./context/BondViewContext";
import { Idle } from "./views/idle/Idle";
import { Actioning } from "./views/actioning/Actioning";
import { Creating } from "./views/creating/Creating";
import { InfoMessage } from "../InfoMessage";
import { Container } from "theme-ui";
import { Swapping } from "./views/swapping/Swapping";
import { ManagingLiquidity } from "./views/managing/ManagingLiquidity";
import { AddingLiquidity } from "./views/managing/AddingLiquidity";

export const Bonds: React.FC = () => {
  const { view, hasFoundContracts } = useBondView();

  if (!hasFoundContracts) {
    return (
      <Container sx={{ position: "absolute", left: "30%", top: "40%" }}>
        <InfoMessage title="Unsupported network">
          MUSD Bonds don't seem to be deployed to this network.
        </InfoMessage>
      </Container>
    );
  }

  let View = null;
  switch (view) {
    case "CANCELLING":
    case "CLAIMING": {
      View = <Actioning />;
      break;
    }
    case "CREATING": {
      View = <Creating />;
      break;
    }
    case "SWAPPING": {
      View = <Swapping />;
      break;
    }
    case "ADDING_LIQUIDITY": {
      View = <AddingLiquidity />;
      break;
    }
    case "MANAGING_LIQUIDITY": {
      View = <ManagingLiquidity />;
      break;
    }
  }

  return (
    <>
      <Idle />
      {View}
    </>
  );
};
