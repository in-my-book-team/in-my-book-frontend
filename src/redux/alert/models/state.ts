import type { AlertType } from '../../../types';

export type State = {
  isOpen: boolean;
  message: string;
  type: AlertType;
  timeout?: number;
};
