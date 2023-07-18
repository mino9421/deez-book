import { appRouter } from "~/server/api/root";
// import { prisma } from "~/server/db";
import { createServerSideHelpers } from '@trpc/react-query/server';
import { createContext } from '~/server/context';
import superjson from 'superjson';

const helpers = createServerSideHelpers({
  router: appRouter,
  ctx: await createContext(),
  transformer: superjson, // optional - adds superjson serialization
});
