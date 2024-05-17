"use client"

import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Todo} from "@/types"

export default function TodosTable({todos}:{todos: Todo[]}) {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>아이디</TableColumn>
        <TableColumn>할일내용</TableColumn>
        <TableColumn>완료여부</TableColumn>
        <TableColumn>생성일</TableColumn>
      </TableHeader>
      <TableBody>
        {todos && todos.map((aTodo: Todo) =>( // Todo가 type
          <TableRow key={aTodo.id}>
            <TableCell>{aTodo.id}</TableCell>
            <TableCell>{aTodo.title}</TableCell>
            <TableCell>{aTodo.is_done ? "완료":"미완료"}</TableCell>
            <TableCell>{`${aTodo.created_at}`}</TableCell>
          </TableRow>
        ))}

      </TableBody>
    </Table>
  );
}