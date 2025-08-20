"use client";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Card, CardBody, Tabs, Tab, Input, Select, SelectItem} from "@heroui/react";
import {KPICard} from "@/components/KPI";
import {RevLine, SpendBars} from "@/components/Charts";
import {AdsTable} from "@/components/AdsTable";

const spend = [{name:"Facebook",value:42000},{name:"TikTok",value:51000},{name:"Instagram",value:33000},{name:"YouTube",value:12000}];
const rev = [{d:"08/01",v:120000},{d:"08/05",v:168000},{d:"08/10",v:149000},{d:"08/15",v:212000},{d:"08/20",v:239000}];
const rows = [
  {id:1,campaign:"Ulthera Prime | Q3-A",platform:"Facebook",ad:"UL-A1",spend:12000,impr:480000,clicks:8400,leads:240,rev:89000,date:"2025-08-20"},
  {id:2,campaign:"Hair FUE | Burst",platform:"TikTok",ad:"HF-B1",spend:29000,impr:800000,clicks:14200,leads:400,rev:199000,date:"2025-08-20"},
  {id:3,campaign:"Profhilo | IG-Story",platform:"Instagram",ad:"PF-C2",spend:17000,impr:520000,clicks:9600,leads:280,rev:158000,date:"2025-08-19"},
];

export default function Page(){
  const kSpend=12000+29000+17000, kRev=89000+199000+158000, kLeads=240+400+280;
  const roas=(kRev/kSpend).toFixed(2)+"×";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-soft/40">
      <Navbar isBordered maxWidth="xl">
        <NavbarBrand><div className="h-7 w-7 rounded-md bg-brand mr-2"/><span className="font-semibold">Beauty AI</span></NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem><Button variant="bordered" href="/scan">Scan</Button></NavbarItem>
          <NavbarItem><Button variant="flat" href="/ads">Ads</Button></NavbarItem>
          <NavbarItem><Button color="primary">Dashboard</Button></NavbarItem>
        </NavbarContent>
      </Navbar>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <Card><CardBody>
          <h1 className="text-3xl md:text-5xl font-semibold">Beauty & Anti-Aging <span className="text-brand">AI Agent</span></h1>
          <p className="mt-3 text-default-500">Scan → Advise → Offer → Book → ROAS</p>
          <div className="mt-6 flex gap-3 flex-wrap"><Button color="primary">Start Free Scan</Button><Button variant="bordered">View Ads Dashboard</Button></div>
        </CardBody></Card>

        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <KPICard label="Leads (today)" value={kLeads} kind="leads"/>
          <KPICard label="Clicks" value={18400} kind="clicks"/>
          <KPICard label="Revenue" value={kRev} kind="revenue"/>
          <KPICard label="ROAS" value={roas} kind="roas"/>
        </section>

        <Card><CardBody className="grid md:grid-cols-4 gap-3">
          <Input label="Search campaign" placeholder="Ulthera, FUE, Profhilo…" variant="bordered"/>
          <Select label="Platform" placeholder="All" variant="bordered">{["All","Facebook","Instagram","TikTok","YouTube"].map(p=><SelectItem key={p}>{p}</SelectItem>)}</Select>
          <Input type="date" label="From" variant="bordered"/><Input type="date" label="To" variant="bordered"/>
        </CardBody></Card>

        <Tabs variant="underlined" color="secondary">
          <Tab key="overview" title="Overview">
            <div className="grid md:grid-cols-3 gap-4">
              <RevLine data={rev}/>
              <SpendBars data={spend}/>
            </div>
          </Tab>
          <Tab key="ads" title="Ads">
            <Card><CardBody><AdsTable rows={rows}/></CardBody></Card>
          </Tab>
        </Tabs>
      </main>

      <footer className="max-w-7xl mx-auto px-4 py-10 text-sm text-default-500">© {new Date().getFullYear()} Beauty AI — MVP</footer>
    </div>
  );
}
