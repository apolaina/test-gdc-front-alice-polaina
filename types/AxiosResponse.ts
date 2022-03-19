export type AxiosResponse<T> = {
  data?: T;
  error: string;
  isLoading: boolean;
  loadData: (email: string) => void;
};
