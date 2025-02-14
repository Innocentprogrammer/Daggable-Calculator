import { Switch, Route } from "wouter";
import { queryClient } from "../src/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Calculator from "../src/pages/Calculator";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Calculator} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;