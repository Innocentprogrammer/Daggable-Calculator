import { Switch, Route } from "wouter";
import { queryClient } from "/Projects/All Practice/React Practice/DragCalulator/src/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Calculator from "/Projects/All Practice/React Practice/DragCalulator/src/pages/Calculator";

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