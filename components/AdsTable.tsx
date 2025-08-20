"use client";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip} from "@heroui/react";
import {thb} from "./KPI";

export function AdsTable({rows}:{rows:any[]}){
  return (
    <Table aria-label="Ads performance" isStriped removeWrapper>
      <TableHeader>
        <TableColumn>Campaign</TableColumn><TableColumn>Platform</TableColumn><TableColumn>Ad</TableColumn>
        <TableColumn>Spend</TableColumn><TableColumn>Impr.</TableColumn><TableColumn>Clicks</TableColumn>
        <TableColumn>Leads</TableColumn><TableColumn>Revenue</TableColumn><TableColumn>Date</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No data"}>
        {rows.map((r:any)=>(
          <TableRow key={r.id}>
            <TableCell>{r.campaign}</TableCell>
            <TableCell><Chip color="primary" variant="flat">{r.platform}</Chip></TableCell>
            <TableCell>{r.ad}</TableCell>
            <TableCell>{thb(r.spend)}</TableCell>
            <TableCell>{r.impr.toLocaleString("th-TH")}</TableCell>
            <TableCell>{r.clicks.toLocaleString("th-TH")}</TableCell>
            <TableCell>{r.leads}</TableCell>
            <TableCell>{thb(r.rev)}</TableCell>
            <TableCell>{r.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
