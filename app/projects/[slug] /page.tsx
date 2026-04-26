import { notFound } from "next/navigation"
import ChargeupDetails from "@/components/Projects/Chargeup_details"
import EstateAgentDetails from "@/components/Projects/Estate_agent_details"
import TrafficDetails from "@/components/Projects/Traffic_details"
import UIDetails from "@/components/Projects/UI_details"
import React from "react"

interface Props {
  params: Promise<{ slug: string }>
}

const pageMap: Record<string, React.ComponentType> = {
  chargeup: ChargeupDetails,
  "estate-agent": EstateAgentDetails,
  "traffic-data": TrafficDetails,
  "chargeup-ui": UIDetails,
}

export function generateStaticParams() {
  return Object.keys(pageMap).map((slug) => ({ slug }))
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const Component = pageMap[slug]
  if (!Component) notFound()
  return <Component />
}