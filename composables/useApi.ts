import { Data } from '~/types/accordionContent';

export default () => {
  const config = useRuntimeConfig();
  const endPointUri = config.public.url;

  const get = async <T>(endpoint: string) => {
    return useFetch<T>(endpoint);
  };

  const getAllData = async () => {
    return get<Data>(endPointUri);
  };

  return {
    get,
    getAllData,
  };
};
