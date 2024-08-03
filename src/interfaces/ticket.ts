export interface TicketOverview {
  totalUnresolved: number;
  totalOverdue: number;
  totalOpen: number;
  totalHold: number;
}

export interface TicketGraph {
  month: string;
  totalData: number;
}

export interface Ticket {
  id: string;
  title: string;
  content: string;
  customerName: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
}
