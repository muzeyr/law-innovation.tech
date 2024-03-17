import { PrmResponseCapital } from "@/app/services/types/capital.type";
import { PrmResponseWeather } from "@/app/services/types/weather.type";
import { ApiService } from "@/app/services/api.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParmas = request.nextUrl.searchParams;
  const prm: PrmResponseCapital = {
    term: searchParmas.get("term") || "",
  };
  const service = new ApiService();
  const result = await service.fetchCities(prm);
  return NextResponse.json(result);
}
