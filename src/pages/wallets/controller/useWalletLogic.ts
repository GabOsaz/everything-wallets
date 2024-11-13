import { useState } from "react";
import useGetAccounts from "../model/queries/useGetAccounts";

function useWalletLogic() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: accounts,
    loading: isFetchingAccounts,
    error: accountsFetchError,
    refetch: refetchAccounts,
  } = useGetAccounts();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    accounts,
    isFetchingAccounts,
    accountsFetchError,
    refetchAccounts,
  };
}

export default useWalletLogic;
