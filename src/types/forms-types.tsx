export interface FormType {
  control: any;
  onSubmit: any;
  errors: any;
  isLoading: boolean;
  register: any;
  handleSubmit: any;
}

export interface RegisterFormFieldsType {
  email: string;
  password: string;
  how_did_hear: string;
}
export interface LoginFormFieldsType {
  email: string;
  password: string;
}
export interface ForgetFormFieldsType {
  email: string;
}
