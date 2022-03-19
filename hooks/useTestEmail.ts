import { useState } from 'react';
import { AxiosResponse } from '../types/AxiosResponse';
import { API } from '../helpers/API';

export type TestEmailState = {
  emailExists: boolean;
};

const useTestEmail = (): AxiosResponse<TestEmailState> => {
  const [data, setData] = useState<TestEmailState>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async (email: string) => {
    setIsLoading(true);
    setError('');

    try {
      if (email) {
        const resp = await fetchData(email);
        if (resp.data) {
          setData({ emailExists: resp.data.exists });
        }
        setIsLoading(false);
      } else {
        setError('email is not defined');
        setIsLoading(false);
      }
    } catch (e) {
      setError('Ooops, something went wrong!');
      setIsLoading(false);
    }
  };

  const fetchData = (email: string): Promise<any> => {
    return API.get(`/?email=${email}`);
  };

  return { data, isLoading, error, loadData };
};

export default useTestEmail;
