import { Card, Flex, Button, Image, ThemeUIStyleObject } from "theme-ui";
import { EventType, HorizontalTimeline } from "../../../HorizontalTimeline";
import { Record } from "../../Record";
import { Actions } from "./actions/Actions";
import { BLusdAmmTokenIndex, Bond as BondType, SwapPressedPayload } from "../../context/transitions";
import { Label, SubLabel } from "../../../HorizontalTimeline";
import * as l from "../../lexicon";
import { statuses, useBondView } from "../../context/BondViewContext";
import { useBondAddresses } from "../../context/BondAddressesContext";

const getBondEvents = (bond: BondType): EventType[] => {
  return [
    {
      date: new Date(bond.startTime),
      label: (
        <>
          <Label description="bLUSD accrual starts off at 0 and increases over time.">
            {l.BOND_CREATED.term}
          </Label>
          <SubLabel>{`0.00 bLUSD`}</SubLabel>
        </>
      )
    },
    {
      date: new Date(bond.status === "PENDING" ? Date.now() : bond?.endTime ?? 0),
      label: (
        <>
          <Label
            description={
              bond.status === "PENDING"
                ? l.ACCRUED_AMOUNT.description
                : `The date you ${statuses[bond.status].toLowerCase()} your bond.`
            }
            style={{ fontWeight: 500 }}
          >
            {bond.status === "PENDING" ? l.ACCRUED_AMOUNT.term : statuses[bond.status]}
          </Label>
          <SubLabel style={{ fontWeight: 400 }}>
            {bond.status === "PENDING"
              ? `${bond.accrued.prettify(2)} bLUSD`
              : bond.status === "CLAIMED"
              ? `${bond?.claimedAmount?.prettify(2)} bLUSD`
              : ""}
          </SubLabel>
        </>
      ),
      isEndOfLife: true,
      isMilestone: bond.status !== "PENDING"
    },
    {
      date: new Date(bond.breakEvenTime),
      label: (
        <>
          <Label description={l.BREAK_EVEN_TIME.description}>{l.BREAK_EVEN_TIME.term}</Label>
          <SubLabel>{`${bond?.breakEvenAccrual?.prettify(2) ?? "?"} bLUSD`}</SubLabel>
        </>
      )
    },
    {
      date: new Date(bond.rebondTime),
      label: (
        <>
          <Label description={l.OPTIMUM_REBOND_TIME.description}>{l.OPTIMUM_REBOND_TIME.term}</Label>
          <SubLabel>{`${bond?.rebondAccrual?.prettify(2) ?? "?"} bLUSD`}</SubLabel>
        </>
      )
    }
  ];
};

type BondProps = { bond: BondType; style?: ThemeUIStyleObject };

export const Bond: React.FC<BondProps> = ({ bond, style }) => {
  const events = getBondEvents(bond);
  const { dispatchEvent } = useBondView();
  const { BOND_NFT_ADDRESS } = useBondAddresses();

  const handleSellBLusdPressed = () => {
    dispatchEvent("SWAP_PRESSED", { inputToken: BLusdAmmTokenIndex.BLUSD } as SwapPressedPayload);
  };

  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        ...style
      }}
    >
      <Flex
        sx={{
          flexShrink: 0,
          boxShadow: 2,
          borderRadius: 8.5,
          border: 1,
          borderColor: "muted",
          bg: "background"
        }}
      >
        <Image
          sx={{ cursor: "pointer", minWidth: "150px" }}
          src={bond.tokenUri}
          alt="NFT image representation of your bond."
          onClick={() => {
            window.open(
              `https://opensea.io/assets/ethereum/${BOND_NFT_ADDRESS}/${bond.id}`,
              "_blank"
            );
          }}
        />
      </Flex>
      <Card mt={[0, 0, 0, 0]} sx={{ borderRadius: 12, flexGrow: 1 }}>
        <Flex p={[2, 3]} sx={{ flexDirection: "column" }}>
          <HorizontalTimeline
            style={{ fontSize: "14.5px", justifyContent: "center", pt: 2, mx: 3 }}
            events={events}
          />

          <Flex mt={4} variant="layout.actions" sx={{ justifyContent: "flex-end" }}>
            <Flex
              sx={{
                justifyContent: "flex-start",
                flexGrow: 1,
                alignItems: "center",
                pl: 4,
                gap: "0 28px",
                fontSize: "14.5px"
              }}
            >
              <Record
                name={l.BOND_DEPOSIT.term}
                value={bond.deposit.prettify(2)}
                type="LUSD"
                description={l.BOND_DEPOSIT.description}
              />
              {bond.status === "PENDING" && (
                <Record
                  name={l.MARKET_VALUE.term}
                  value={bond?.marketValue?.prettify(2) ?? "0"}
                  type="LUSD"
                  description={l.MARKET_VALUE.description}
                />
              )}
            </Flex>
            {bond.status === "PENDING" && <Actions bondId={bond.id} />}
            {bond.status !== "PENDING" && bond.status === "CLAIMED" && (
              <Button variant="outline" sx={{ height: "44px" }} onClick={handleSellBLusdPressed}>
                Sell bLUSD
              </Button>
            )}
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};
