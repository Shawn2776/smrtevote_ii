import { clerkClient } from "@clerk/nextjs";
import { WebhookEvent } from "@clerk/nextjs/nextserver";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

import { createUser } from "@/lib/actions";

export async function POST() {}
