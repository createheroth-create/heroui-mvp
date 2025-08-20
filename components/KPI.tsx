"use client";
import {Card, CardBody, Avatar} from "@heroui/react";
import {UserPlus2, MousePointerClick, CircleDollarSign, TrendingUp} from "lucide-react";

export type KPIKind = "leads" | "clicks" | "revenue" | "roas";
const ICON: Record<KPIKind, any> = {leads:UserPlus2, clicks:MousePointerClick, revenue:CircleDollarSign, roas:TrendingUp};
export const thb = (n:number)=> new Intl.NumberFormat("th-TH",{style:"currency",currency:"THB",maximumFractionDigits:0}).format(n);

export function KPICard({label,value,kind}:{label:string;value:number|string;kind:KPIKind}){
  const Icon = ICON[kind];
  const v = typeof value==="number"
    ? (kind==="revenue"? thb(value) : value.toLocaleString("th-TH"))
    : value;
  return (
    <Card radius="lg" shadow="sm" className="h-full">
      <CardBody className="flex items-center gap-4">
        <Avatar isBordered radius="lg" className="bg-brand-soft text-brand border-brand/20" icon={<Icon size={18}/>}/>
        <div>
          <div className="text-xs uppercase text-default-500">{label}</div>
          <div className="text-xl font-semibold">{v}</div>
        </div>
      </CardBody>
    </Card>
  );
}
