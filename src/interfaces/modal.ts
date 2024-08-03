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
  onClose: () => void;
  data: ColumnProps;
}
