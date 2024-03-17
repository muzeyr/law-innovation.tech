import { PrmResponseWeather } from "@/app/services/types/weather.type";
import { ApiService } from "@/app/services/api.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParmas = request.nextUrl.searchParams;
  const prm: PrmResponseWeather = {
    lat: Number(searchParmas.get("lat")),
    lon: Number(searchParmas.get("long")),
  };
  const service = new ApiService();
  const result = await service.fetchCurrentWeather(prm);
  return NextResponse.json(result);
}
