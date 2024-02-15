import { API_URL, IS_DEV } from './constants';
import { removeParamsIfNull } from './utils';

interface HeaderResult {
  url: string;
  headers: {
    ssid: string | null;
    'Content-Type': string;
    'X-Developed-By': string;
  };
}

const header = async ({
  method,
  path,
  withFiles
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  withFiles?: boolean;
}): Promise<HeaderResult> => {
  const options = <any>{
    method
  };

  // TODO: Add your API URL
  const apiUrl = IS_DEV ? 'your-api-url' : API_URL;

  options.url = `${apiUrl}${removeParamsIfNull(path)}`;

  options.headers = {
    ssid: 'your-ssid-token',
    'X-Developed-By': 'Miguel Vega | (atleugim)'
  };

  if (!withFiles) {
    options.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };
  }

  return options;
};

export const call = async ({
  method,
  path,
  data = null,
  withFiles = false
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  data?: any;
  withFiles?: boolean;
}) => {
  const logPath = removeParamsIfNull(path);
  try {
    const options = await header({ method, path, withFiles });
    console.info(`REQUEST: ${logPath} | STATUS: pending`);

    const body = data ? JSON.stringify(data) : null;
    const bodyWithFiles = withFiles ? data : null;

    const response = await fetch(options.url, {
      method,
      body: withFiles ? bodyWithFiles : body,
      headers: options.headers as HeadersInit
    });

    const res = await response.json();

    if (!response.ok) {
      throw new Error(res?.info ?? 'Error al realizar la petición');
    }

    console.info(`REQUEST: ${logPath} | STATUS: completed`);
    return res;
  } catch (err) {
    console.error(`REQUEST: PATH: ${logPath} | STATUS: error`);
    console.error(err);
    throw err;
  }
};
