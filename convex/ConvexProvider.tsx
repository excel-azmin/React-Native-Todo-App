import { CONVEX_URL } from '@env';
import { ConvexProvider, ConvexReactClient } from 'convex/react';

const convex = new ConvexReactClient(CONVEX_URL);

export default function ConvexProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}