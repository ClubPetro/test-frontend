import Dashboard from "components/Dashboard";
import { EditDestinationModal } from "components/EditDestinationModal";
import Header from "components/Header";
import Menu from "components/Menu";
import { useState } from "react";

export default function Home() {
  const [isEditDestinationModalOpen, setIsEditDestinationModalOpen] =
    useState(false);

  function handleOpenEditDestinationModal() {
    setIsEditDestinationModalOpen(true);
  }

  function handleCloseEditDestinationModal() {
    setIsEditDestinationModalOpen(false);
  }

  return (
    <>
      <Header />
      <Menu />
      <Dashboard onOpenEditModalDestination={handleOpenEditDestinationModal} />
      <EditDestinationModal
        isOpen={isEditDestinationModalOpen}
        onRequestClose={handleCloseEditDestinationModal}
      />
    </>
  );
}
