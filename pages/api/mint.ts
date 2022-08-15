import type { NextApiRequest, NextApiResponse } from 'next';
import { Blob } from 'nft.storage';
import { TokenInput } from 'nft.storage/dist/src/lib/interface';
import getRawBody from 'raw-body';
import { randomBigInt } from '../../utils/number';
import { client } from '../../utils/storage';

export const config = {
  api: {
    bodyParser: false,
  },
};

type Data = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const body = await getRawBody(req);

    const sampleNFT: TokenInput = {
      image: new Blob([body], { type: 'image/jpeg' }),
      name: `NFT STORAGE TEST #${randomBigInt()}`,
      description: 'GO WITH THE FLOW',
      properties: {
        type: 'blog-post',
        origins: {
          http: 'https://nft.storage/blog/post/2021-11-30-hello-world-nft-storage/',
          ipfs: 'ipfs://bafybeieh4gpvatp32iqaacs6xqxqitla4drrkyyzq6dshqqsilkk3fqmti/blog/post/2021-11-30-hello-world-nft-storage/',
        },
        authors: [{ name: 'David Choi' }],
        content: {
          'text/markdown':
            "The last year has witnessed the explosion of NFTs onto the world's mainstage. From fine art to collectibles to music and media, NFTs are quickly demonstrating just how quickly grassroots Web3 communities can grow, and perhaps how much closer we are to mass adoption than we may have previously thought. <... remaining content omitted ...>",
        },
      },
    };
    const metadata = await client.store(sampleNFT);
    // const metadata = {status: 'Ok'};
    console.log(JSON.stringify(metadata, null, 2));
    res.status(200).json(metadata);
  } else {
    res.status(400);
  }
}
