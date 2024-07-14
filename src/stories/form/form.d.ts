export interface formProps {
  state?: 'error' | 'warning' | 'success',
  value?: string;
  onChange?: (value: string) => void;
  validText?: string;
}