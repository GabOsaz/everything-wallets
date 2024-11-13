const returnFallbackLogo = (accountName: string) => {
  switch (accountName) {
    case "Naira":
      return "/wallet/accountLogos/naira.svg";
    case "Ethereum":
      return "/wallet/accountLogos/ethereum.svg";
    case "Bitcoin":
      return "/wallet/accountLogos/bitcoin.svg";
    case "Stellar":
      return "/wallet/accountLogos/litecoin.svg";
    default: return ""
  }
};

export default returnFallbackLogo;
