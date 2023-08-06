// fetch end point data configuration
interface AccordionItems {
  text: string;
  image: string;
  title: string;
}

interface Data {
  tag: string;
  title: string;
  items: AccordionItems[];
}

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
