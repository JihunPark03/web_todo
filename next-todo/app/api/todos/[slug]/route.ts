import { NextRequest, NextResponse } from "next/server"
import { fetchATodo, deleteATodo} from "@/data/firestore"

export async function GET(request: NextRequest, {params}:{params: {slug: string}}) {

    const fetchedTodo = await fetchATodo(params.slug);

    if(fetchedTodo === null){
        return new NextResponse(null, {status:204})
    }

    const response={
        message: '단일 할일 가져오기',
        data:fetchedTodo

    }

    return NextResponse.json(response,{status: 200});
}

export async function DELETE(request: NextRequest, {params}:{params: {slug: string}}) {

    await deleteATodo(params.slug);

    const response={
        message: '단일 할일 삭제 성공'
    }

    return NextResponse.json(response,{status: 200});
}