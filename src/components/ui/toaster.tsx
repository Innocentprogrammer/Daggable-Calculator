import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
}

const Toast: React.FC<ToastProps> = ({ message }) => (
  <div className="p-4 bg-gray-800 text-white rounded-md shadow-lg">{message}</div>
);

export const Toaster: React.FC = () => {
  const [toasts, setToasts] = useState<string[]>([]);

  useEffect(() => {
    // Mock toast event
    const id = setInterval(() => {
      setToasts((prev) => [...prev, "New Notification!"]);
    }, 10000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {toasts.map((toast, index) => (
        <Toast key={index} message={toast} />
      ))}
    </div>
  );
};
