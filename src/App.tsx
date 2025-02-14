import { Switch, Route } from "wouter";
import { queryClient } from "/Projects/All Practice/React Practice/DragCalulator/src/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "/Projects/All Practice/React Practice/DragCalulator/src/components/ui/toaster";
import Calculator from "/Projects/All Practice/React Practice/DragCalulator/src/pages/Calculator";
import NotFound from "/Projects/All Practice/React Practice/DragCalulator/src/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Calculator} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;