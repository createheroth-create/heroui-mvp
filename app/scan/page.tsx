"use client";
import {Card, CardBody, Button, Input, Textarea} from "@heroui/react";
import {useState} from "react";

export default function ScanPage(){
  const [result,setResult] = useState<string>("");

  async function onAnalyze(){
    setResult("Analyzing…");
    const res = await fetch("/api/scan",{method:"POST",body:JSON.stringify({mock:true})});
    const data = await res.json();
    setResult(data.summary);
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <Card><CardBody className="space-y-4">
        <h1 className="text-2xl font-semibold">AI Skin/Face Scan</h1>
        <Input type="file" label="Upload face photo" variant="bordered" />
        <Textarea label="Notes (optional)" variant="bordered" />
        <div className="flex gap-3"><Button color="primary" onPress={onAnalyze}>Analyze</Button></div>
        {result && <div className="text-default-600">{result}</div>}
      </CardBody></Card>
    </main>
  );
}
