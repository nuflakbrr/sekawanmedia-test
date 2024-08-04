import { ColumnProps } from '@/components/Containers/Tickets/components/Columns';

export interface Modal {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export interface AlertModal {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export interface PreviewModal {
  isOpen: boolean;
  data: ColumnProps;
  onClose: () => void;
  onRejected?: () => void;
  onApproved?: () => void;
}

export interface CreateTicketModal {
  isOpen: boolean;
  onClose: () => void;
}
