"use client";
import {Card, CardHeader, CardBody} from "@heroui/react";
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar} from "recharts";
import {thb} from "./KPI";

export function RevLine({data}:{data:{d:string;v:number}[]}){
  return (
    <Card>
      <CardHeader className="text-sm text-default-500">Revenue (30d)</CardHeader>
      <CardBody style={{height:240}}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="d"/><YAxis hide/>
            <Tooltip formatter={(v)=>thb(Number(v))}/>
            <Line type="monotone" dataKey="v" stroke="#6A49FF" strokeWidth={2} dot={false}/>
          </LineChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
}

export function SpendBars({data}:{data:{name:string;value:number}[]}){
  return (
    <Card>
      <CardHeader className="text-sm text-default-500">Spend by Platform</CardHeader>
      <CardBody style={{height:240}}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name"/><YAxis hide/>
            <Tooltip formatter={(v)=>thb(Number(v))}/>
            <Bar dataKey="value" fill="#6A49FF" radius={[8,8,0,0]}/>
          </BarChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
}
