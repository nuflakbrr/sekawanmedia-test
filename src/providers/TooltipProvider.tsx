import { FC, ReactNode } from 'react';

import { TooltipProvider as Tooltip } from '@/components/ui/tooltip';

type Props = {
  children: ReactNode;
};

const TooltipProvider: FC<Props> = ({ children }) => {
  return <Tooltip>{children}</Tooltip>;
};

export default TooltipProvider;
