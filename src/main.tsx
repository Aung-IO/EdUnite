import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode="wait">

      <RouterProvider router={router} />
      </AnimatePresence>
    </QueryClientProvider>
  // </StrictMode>
);
