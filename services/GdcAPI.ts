import { API_URL } from '@env';

export class GdcAPI {
  static async get(email: string): Promise<any> {
    console.log('url', API_URL);
    const response: Response = await fetch(
      `${process.env.API_URL}?email=${email}`,
      {
        method: 'GET',
      },
    );

    const assetProps = await response.json();

    if (assetProps.error) {
      console.log('ERROR---', assetProps.error);
      return;
    }
  }
}
