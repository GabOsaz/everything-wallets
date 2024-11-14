import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../appLevelState/DataContext";
import useCreateAccount from "../model/mutations/useCreateAccount";
import useGetWallets from "../model/queries/useGetWallets";

function useAddWalletModalLogic(
  handleCloseModal: () => void
) {
  const [selectedWalletValue, setSelectedWalletValue] = useState("");
  const { setFetchedAccounts } = useContext(DataContext);

  const {
    data: wallets,
    loading: isFetchingWallets,
    error: walletsFetchError,
    refetch: refetchWallets,
  } = useGetWallets();

  useEffect(() => {
    if(wallets?.length) {
      setSelectedWalletValue(wallets[0].name)
    }
    return () => {};
  }, [wallets]);

  const onCreateWalletSuccess = (res: any) => {
    const newWallet = {
      ...res,
      currency: res?.currency ?? selectedWalletValue,
      balance: Math.random().toFixed(1),
      name: selectedWalletValue,
    }
    handleCloseModal();
    setFetchedAccounts((initialAccounts: any) => [...initialAccounts, newWallet])
  };

  const {
    loading: creatingAccount,
    error: errorCreatingAccount,
    createWallet,
  } = useCreateAccount(onCreateWalletSuccess);

  return {
    creatingAccount,
    errorCreatingAccount,
    createWallet,
    wallets,
    isFetchingWallets,
    walletsFetchError,
    refetchWallets,
    selectedWalletValue,
    setSelectedWalletValue
  };
}

export default useAddWalletModalLogic;
