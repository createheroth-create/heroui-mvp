"use client";
import {Card, CardBody, CardHeader, Button, Input, Select, SelectItem, Chip, Textarea} from "@heroui/react";

const thb = (n:number)=> new Intl.NumberFormat("th-TH",{style:"currency",currency:"THB",maximumFractionDigits:0}).format(n);

export default function OfferBuilder(){
  return (
    <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <Card>
        <CardHeader className="text-lg font-semibold">Offer Builder</CardHeader>
        <CardBody className="grid md:grid-cols-3 gap-4 items-start">
          <div className="space-y-3">
            <Select label="Template" placeholder="Select" variant="bordered">
              {["Ulthera Prime","Profhilo","Radiesse","FUE Hair"].map(x=> <SelectItem key={x}>{x}</SelectItem>)}
            </Select>
            <Input type="number" label="Discount (THB)" placeholder="0" variant="bordered"/>
            <Chip color="success" size="lg" variant="flat" className="w-fit">Final: {thb(8900)}</Chip>
          </div>
          <div className="md:col-span-2 space-y-3">
            <Textarea label="Ad Copy" placeholder="Write compelling ad copy…" variant="bordered"/>
            <div className="flex gap-2">
              <Button color="primary">Copy</Button>
              <Button variant="bordered">Export TXT</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
