'use client'
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
  const {setTheme} = useTheme();
  return (
    <div>
      <h1>Ayush Kush</h1>
      <Button>Click Me</Button>
      <Button onClick={() => setTheme('dark')}>Dark Mode</Button>
      <Button onClick={() => setTheme('light')}>Light Mode</Button>
    </div>
  );
}
