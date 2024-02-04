import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Form from "./components/Form";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="antialiased text-gray-900 px-6">
        <div className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
          <div className="py-1">
            <h1 className="text-4xl font-bold">Social Post Generator</h1>
          </div>
          <Form />
          <div className="py-1">
            <div className="mt-8 max-w-md">
              <div className="grid grid-cols-1 gap-6"></div>
            </div>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}
