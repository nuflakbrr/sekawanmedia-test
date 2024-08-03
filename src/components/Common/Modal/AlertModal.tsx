'use client';
import { FC, useEffect, useState } from 'react';

import { AlertModal as AlertModalProps } from '@/interfaces/modal';
import { Button } from '@/components/ui/button';
import Modal from './Modal';

const AlertModal: FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Apakah Anda yakin?"
      description="Tindakan ini tidak dapat dikembalikan."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Batalkan
        </Button>
        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          Lanjutkan
        </Button>
      </div>
    </Modal>
  );
};

export default AlertModal;
