import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

import Creatures from "./creatures/components/Creatures";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <div>
        <h1 className="text-center display-1">Elden Ring</h1>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Creatures />} />
          </Routes>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
