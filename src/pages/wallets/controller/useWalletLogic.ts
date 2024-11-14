import { useContext, useState } from "react";
import { DataContext } from "../../../appLevelState/DataContext";

function useWalletLogic() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    accounts,
    isFetchingAccounts,
    accountsFetchError,
    refetchAccounts,
  } = useContext(DataContext);

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
