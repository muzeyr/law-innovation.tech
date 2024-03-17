import { PrmResponseCoordinate } from "@/app/services/types/coordinate.type";
import { ApiService } from "@/app/services/api.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParmas = request.nextUrl.searchParams;
  const prm: PrmResponseCoordinate = {
    city: searchParmas.get("city") || "",
    countryCode: searchParmas.get("countryCode") || "",
  };

  const service = new ApiService();
  const result = await service.fetchCoordinates(prm);

  return NextResponse.json(result);
}
