export const PENDING_BONDS = {
  term: "Pending bonds",
  description: "Your active bonds which are accruing bMUSD and can be claimed or cancelled."
};

export const BONDS = {
  term: "Bonds",
  description: "List of your pending bonds and bonds you have claimed or cancelled in the past."
};

export const NOT_BONDED_YET = {
  term: "You don't have any pending bonds.",
  description:
    "You can bond MUSD to obtain Boosted MUSD (bMUSD) - a yield-amplified derivative of MUSD."
};

export const BONDS_NAVIGATION = {
  term: "Bonds"
};

export const BOND_CREATED = {
  term: "Bond created",
  description: "The date you created your bond."
};

export const AVAILABLE_BONDS = {
  term: "Available bonds",
  description: "The types of bonds you can create."
};

export const BOND_ASSET = {
  term: "Asset",
  description: "The type of token accepted for bonding."
};

export const BOND_NFT = {
  term: "NFT",
  description:
    "Bonds are represented as unique visual NFTs. The NFT image evolves when your bond is claimed or cancelled."
};

export const BREAK_EVEN_TIME = {
  term: "Break-even time",
  description:
    "Estimated time at which the bond will have accrued enough bMUSD to offset the MUSD cost of the bond, under current market prices."
};

export const OPTIMUM_REBOND_TIME = {
  term: "Rebond time",
  description:
    "Estimated optimum time to claim the bond, sell the bMUSD for MUSD, and then bond again, to maximize your return under current market prices."
};

export const REBOND_RETURN = {
  term: `${OPTIMUM_REBOND_TIME.term} return`,
  description: `Estimated return from selling your accrued bMUSD to MUSD at the ${OPTIMUM_REBOND_TIME.term}, minus the initial MUSD cost of the bond, under current market prices.`
};

export const REBOND_TIME_ROI = {
  term: `${OPTIMUM_REBOND_TIME.term} ROI`,
  description: `Estimated ROI of selling your accrued bMUSD to MUSD at the ${OPTIMUM_REBOND_TIME.term}, minus the initial MUSD cost of the bond, under current market prices.`
};

export const OPTIMUM_APY = {
  term: "Max APR",
  description: `Estimated APY of continuously bonding and claiming at the ${OPTIMUM_REBOND_TIME.term}, under current market prices. Rebonding at other times could lead to a lower APY.`
};

export const OPTIMUM_ACCRUAL = {
  term: "Rebond accrual",
  description: `The required amount of bMUSD to accrue for the ${OPTIMUM_REBOND_TIME.term}, under current market prices.`
};

export const BOND_DEPOSIT = {
  term: "Deposit",
  description:
    "The amount deposited into the bond, which can be fully recovered by cancelling the bond."
};

export const ACCRUED_AMOUNT = {
  term: "Accruing",
  description: "The amount of bMUSD this bond has accrued so far."
};

export const MARKET_VALUE = {
  term: "Accrued value",
  description:
    "Current market value of the accrued bMUSD. The bMUSD market price can fluctuate but will always be higher than the floor price under rational market conditions."
};

export const BOND_AGE = {
  term: "Age",
  description: "Time elapsed since the creation of the bond."
};

export const BOND_RETURN = {
  term: "Claim-now return",
  description:
    "Expected MUSD gained from claiming the bond now and selling the bMUSD for MUSD and deducting the initial cost of the bond, under current market prices."
};

export const BOND_STATUS = {
  term: "Status",
  description: "One of three values: Pending, Cancelled, or Claimed."
};

export const PENDING_STATUS = {
  term: "Pending",
  description: "An active bond which is accruding bMUSD and can be cancelled or claimed."
};

export const CANCELLED_STATUS = {
  term: "Cancelled",
  description: "A bond which you cancelled."
};

export const CLAIMED_STATUS = {
  term: "Claimed",
  description: "A bond which you claimed."
};

export const CANCEL_BOND = {
  term: "Cancel bond",
  description:
    "A bond can be cancelled at any time to recover the initially deposited MUSD amount while forgoing the accrued bMUSD."
};

export const CLAIM_BOND = {
  term: "Claim bond",
  description:
    "A bond can be claimed at any time to forgo the initially deposited MUSD amount and gain the accrued bMUSD."
};

export const BLUSD_MARKET_PRICE = {
  term: "Market price",
  description:
    "The current price of bMUSD according to the bMUSD Curve pool. As long as the bMUSD pool is empty, the market price shown corresponds to the initial Curve v2 price parameter used to initalize the pool."
};

export const BLUSD_FAIR_PRICE = {
  term: "Fair price",
  description:
    "An estimated range of the market price of bMUSD based on the current yield amplification. The lower bound excludes the Pending bucket, the upper bound factors all buckets."
};

export const TOTAL_BONDS_STATISTIC = {
  term: "Total bonds",
  description: "The total number of bonds including: cancelled, claimed and pending."
};

export const PENDING_BONDS_STATISTIC = {
  term: "Pending bonds",
  description:
    "The current number of active bonds in the system which are not yet claimed or cancelled."
};

export const CANCELLED_BONDS_STATISTIC = {
  term: "Cancelled bonds",
  description: "The total number of bonds which were cancelled."
};

export const CLAIMED_BONDS_STATISTIC = {
  term: "Claimed bonds",
  description: "The total number of bonds which were claimed."
};

export const BLUSD_SUPPLY = {
  term: "Total supply",
  description: "The total amount of bMUSD in circulation. Not including pending bonds accrued bMUSD."
};

export const BLUSD_FLOOR_PRICE = {
  term: "Floor price",
  description:
    "The amount of MUSD that an arbitrageur could redeem bMUSD for thus creating a lower bound bMUSD market price."
};

export const BLUSD_APR = {
  term: "APR",
  description: "The APR of bMUSD, based on the yield generated from each bucket in the Treasury."
};

export const BLUSD_YIELD_AMPLIFICATION = {
  term: "Yield amplification",
  description:
    "The bMUSD token generates a yield which is a multiple of the Stability Pool yield. It is derived from the total protocol yield which is being diverted to the Reserve bucket."
};

export const TREASURY_TOTAL = {
  term: "Total",
  description:
    "The total amount of MUSD held by the protocol within the three buckets (Pending, Reserve, Permanent)."
};

export const TREASURY_PENDING = {
  term: "Pending",
  description:
    "Contains the deposited MUSD of the users while they bond. Pending bonds can be claimed or cancelled any time, moving the MUSD into the Reserve and Permanent buckets, or back to the bonder, respectively."
};

export const TREASURY_ACQUIRED = {
  term: "Reserve",
  description:
    "Contains a portion of the MUSD obtained from claimed bonds and captures the yield from the entire Treasury. It acts as a reserve backing the bMUSD supply. bMUSD can be redeemed for a pro-rata share of the MUSD held in the acquired bucket."
};

export const TREASURY_PERMANENT = {
  term: "Permanent",
  description:
    "Contains a portion of the MUSD obtained from claimed bonds which contributes a permanent price premium over MUSD. The MUSD in this bucket is not redeemable."
};

export const ESTIMATES_ONLY_NOTICE = {
  description: "These metrics are estimations based on the current bMUSD market price"
};
