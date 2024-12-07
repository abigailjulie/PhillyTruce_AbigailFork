import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId, id } = await request.json();

  const updatedPost = await prisma.report.update({
    where: { id: id },
    data: {
      read_by: {
        push: userId,
      },
    },
  });

  return NextResponse.json(updatedPost);
}
