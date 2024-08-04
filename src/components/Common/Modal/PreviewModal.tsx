'use client';
import { FC, useEffect, useState } from 'react';

import { useAuth } from '@/hooks/useAuth';
import { PreviewModal as PreviewModalProps } from '@/interfaces/modal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Modal from './Modal';

const PreviewModal: FC<PreviewModalProps> = ({
  isOpen,
  data,
  onClose,
  onApproved,
  onRejected,
}) => {
  // Define state
  const [isMounted, setIsMounted] = useState(false);

  // Define Hooks
  const { user } = useAuth();

  // Trigger mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle if not mounted
  if (!isMounted) {
    return null;
  }

  // Format badge
  const formatPriority = (status: string) => {
    switch (status) {
      case 'low':
        return 'success';
      case 'medium':
        return 'warning';
      case 'high':
        return 'destructive';
      default:
        return 'default';
    }
  };

  const formatStatus = (status: string) => {
    switch (status) {
      case 'approved':
        return 'success';
      case 'pending':
        return 'warning';
      case 'rejected':
        return 'destructive';
      default:
        return 'default';
    }
  };

  return (
    <Modal
      title="Detail Tiket"
      description="Detail tiket yang Anda buat."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Nama</p>
              <p className="text-sm font-medium">{data.customerName}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Judul Tiket</p>
              <p className="text-sm font-medium">{data.title}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Prioritas</p>
              <Badge
                variant={formatPriority(data.priority)}
                className="text-sm font-medium capitalize"
              >
                {data.priority}
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <Badge
                variant={formatStatus(data.status)}
                className="text-sm font-medium capitalize"
              >
                {data.status}
              </Badge>
            </div>

            <div>
              <p className="text-sm text-gray-500">Dibuat Pada</p>
              <p className="text-sm font-medium">{data.createdAt as string}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Diperbarui Pada</p>
              <p className="text-sm font-medium">{data.updatedAt as string}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500">Konten Tiket</p>
          <p className="text-sm font-medium text-justify">{data.content}</p>
        </div>
      </div>
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button variant="outline" onClick={onClose}>
          Tutup
        </Button>
        {user && user.role === 'admin' && (
          <>
            <Button variant="destructive" onClick={onRejected}>
              Tolak
            </Button>
            <Button variant="success" onClick={onApproved}>
              Setujui
            </Button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default PreviewModal;
