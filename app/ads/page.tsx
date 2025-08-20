"use client";
import {Card, CardBody} from "@heroui/react";
import {AdsTable} from "@/components/AdsTable";

const rows = [
  {id:1,campaign:"Ulthera Prime | Q3-A",platform:"Facebook",ad:"UL-A1",spend:12000,impr:480000,clicks:8400,leads:240,rev:89000,date:"2025-08-20"},
  {id:2,campaign:"Hair FUE | Burst",platform:"TikTok",ad:"HF-B1",spend:29000,impr:800000,clicks:14200,leads:400,rev:199000,date:"2025-08-20"},
  {id:3,campaign:"Profhilo | IG-Story",platform:"Instagram",ad:"PF-C2",spend:17000,impr:520000,clicks:9600,leads:280,rev:158000,date:"2025-08-19"},
];

export default function AdsPage(){
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <Card><CardBody><h1 className="text-2xl font-semibold">Ads Performance</h1></CardBody></Card>
      <Card><CardBody><AdsTable rows={rows}/></CardBody></Card>
    </main>
  );
}
