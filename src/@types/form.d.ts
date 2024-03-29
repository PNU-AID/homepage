declare module 'form' {
  export interface InputFormProps {
    size?: 'md' | 'lg';
    type: string;
    name: string;
    label: string;
    value?: string;
    error: boolean;
    className?: string;
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onBlur: (
      e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
  }

  export interface UseFormProps {
    initialValues: UserForm;
    validate: (values: UserForm) => FormState;
    onSubmit: (values: UserForm) => void;
  }

  export interface UserForm {
    [key: string]: string;
    name: string;
    major: string;
    number: string;
    email: string;
    phone: string;
    url: string;
    bio: string;
  }

  export interface FormState {
    [key: string]: boolean;
  }
}
