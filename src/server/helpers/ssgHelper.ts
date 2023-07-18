import { appRouter } from "~/server/api/root";
import { createServerSideHelpers } from '@trpc/react-query/server';
// import { createContext } from '~/server/context';
import superjson from 'superjson';
import { prisma } from "~/server/db";

const helpers = createServerSideHelpers({
  router: appRouter,
  ctx: { prisma, userId: null },
  transformer: superjson, // optional - adds superjson serialization
});
