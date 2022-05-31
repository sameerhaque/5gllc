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
                key={index.toString()}
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
            <Tr key={index.toString()}>
              {columns.map((column, idx) => {
                const cell = row[column.accessor as keyof typeof row];
                const element = column.Cell?.(cell) ?? cell;
                return (
                  <Td
                    whiteSpace="nowrap"
                    key={idx.toString()}
                    alignItems="center"
                    textAlign="center"
                    borderRightWidth="1px"
                    borderRightColor="#E2E8F0"
                  >
                    {idx === 0 && <Checkbox mr={2} />}
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
