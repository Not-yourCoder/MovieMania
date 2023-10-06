import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function xPagination({ movies }) {
  return (
    <Stack spacing={2} className="bg-red-400 min-h-screen flex flex-col ">
      <Pagination
        count={movies.length}
        className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-300"
      />
    </Stack>
  );
}
