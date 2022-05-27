import {
  Checkbox,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import type * as React from "react";
import { columns, data } from "./_data";

export const TableContent = () => {
  return (
    <TableContainer>
      <Table my="4" borderWidth="1px" fontSize="sm">
        <Thead bg={mode("gray.50", "gray.800")}>
          <Tr>
            {columns.map((column, index) => (
              <Th
                whiteSpace="nowrap"
                scope="col"
                key={index}
                textAlign="center"
                borderRightWidth="1px"
                borderRightColor="#E2E8F0"
              >
                {column.Header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              {columns.map((column, index) => {
                const cell = row[column.accessor as keyof typeof row];
                const element = column.Cell?.(cell) ?? cell;
                return (
                  <Td
                    whiteSpace="nowrap"
                    key={index}
                    alignItems="center"
                    textAlign="center"
                    borderRightWidth="1px"
                    borderRightColor="#E2E8F0"
                  >
                    {index === 0 && <Checkbox mr={2} />}
                    {element}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
